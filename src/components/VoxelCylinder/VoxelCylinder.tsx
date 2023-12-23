import * as React from 'react';
import {Shape, Vector2} from "three";
import {handleSmoothScroll} from "next/dist/shared/lib/router/utils/handle-smooth-scroll";
import {MeshProps, useFrame} from "@react-three/fiber";
import {DEFAULT_SPIN_GAP_IN_RADIANS, DEFAULT_UNIT_SIZE} from "@/constants";
import * as THREE from "three";

interface GetShapePointsParams {
  spinGapInRadians?: number,
  radius: number,
  unitSize?: number,
}

interface GetHeightParams {
  height: number,
  unitSize?: number,
}

interface VoxelCylinderProps extends MeshProps {
  spinGapInRadians?: number,
  unitSize?: number,
  radius: number,
  height: number,
  color?: string,
}


function getRectangleSizes(params: GetShapePointsParams) {
  const unitSize = params.unitSize ?? DEFAULT_UNIT_SIZE;
  const spinGapInRadians = params.spinGapInRadians ?? DEFAULT_SPIN_GAP_IN_RADIANS;

  const dimensions: ([number, number] | undefined)[] = [];
  const dimSet = new Set<string>();
  for (let i = 0; i < Math.PI / 2; i += spinGapInRadians) {
    const targetDimension: [number, number] = [
      roundToUnitSize(params.radius * Math.sin(i)) * 2,
      roundToUnitSize(params.radius * Math.cos(i)) * 2
    ];
    const serialized = JSON.stringify(targetDimension);
    if (dimSet.has(serialized)) {
      continue;
    }
    dimSet.add(serialized);
    if (targetDimension.every(x => x > 0)) dimensions.push(targetDimension);
  }

  function roundToUnitSize(dimension: number) {
    return Math.round(dimension / unitSize) * unitSize;
  }

  for (let i = 0; i < dimensions.length - 1; i++) {
    for (let j = i + 1; j < dimensions.length; j++) {
      const d1 = dimensions[i];
      const d2 = dimensions[j];
      if (!d1 || !d2) continue;
      const [w1, l1] = d1;
      const [w2, l2] = d2;
      if (w1 <= w2 && l1 <= l2) {
        dimensions[i] = undefined;
      } else if (w1 >= w2 && l1 >= l2) {
        dimensions[j] = undefined;
      }
    }
  }

  return dimensions.filter(function (v) {
    return !!v;
  }) as [number, number][];
}

function getShapePoints(params: GetShapePointsParams): [number, number][] {
  const dimensions = getRectangleSizes({
    radius: params.radius,
    spinGapInRadians: params.spinGapInRadians,
    unitSize: params.unitSize
  });
  let dimensionsWithIntermediatePoints: [number, number][] = [];
  if (dimensions.length > 0) {
    dimensionsWithIntermediatePoints.push([...dimensions.at(0)!]);
    dimensions.reduce((p1, p2) => {
      dimensionsWithIntermediatePoints.push([p1[0], p2[1]]);
      dimensionsWithIntermediatePoints.push([...p2]);
      return p2;
    });
  }

  const maxDimension = Math.max(...dimensions.map(d => d[1]));
  return [
    ...dimensionsWithIntermediatePoints,
    ...dimensionsWithIntermediatePoints.map(([x, y]) => {
      return [x, -y];
    }).reverse(),
    ...dimensionsWithIntermediatePoints.map(([x, y]) => {
      return [-x, -y];
    }),
    ...dimensionsWithIntermediatePoints.map(([x, y]) => {
      return [-x, y];
    }).reverse(),
  ].map(([x, y]) => [(x + maxDimension) / 2, (y + maxDimension) / 2]) as [number, number][];
}

export function getUnitHeight(params: GetHeightParams) {
  const unitSize = params.unitSize ?? DEFAULT_UNIT_SIZE;
  return Math.round(params.height / unitSize) * unitSize;
}

function VoxelCylinder(props: VoxelCylinderProps) {
  const color = props.color ?? "green";
  const points = getShapePoints({
    radius: props.radius,
    spinGapInRadians: props.spinGapInRadians,
    unitSize: props.unitSize,
  });
  const shape = new Shape(points.map(p => new Vector2(...p)));
  const realHeight = getUnitHeight({
    height: props.height,
    unitSize: props.unitSize
  });
  const {position, rotation, ...delegated} = props;

  return <object3D position={position} rotation={rotation}>
    <object3D position={[-props.radius, -props.radius, -realHeight / 2]}>
      <mesh {...delegated}>
        <extrudeGeometry args={[
          shape,
          {
            bevelEnabled: false,
            depth: realHeight,
          }
        ]}></extrudeGeometry>
        <meshStandardMaterial color={color}></meshStandardMaterial>
      </mesh>
    </object3D>
  </object3D>;
}

export default VoxelCylinder;
