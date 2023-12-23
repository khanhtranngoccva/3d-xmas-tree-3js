import * as React from 'react';
import {GroupProps, MeshProps} from "@react-three/fiber";
import * as THREE from "three";
import {Shape, Vector2} from "three";
import Cube from "@/components/Cube";
import Box from "@/components/Box";
import {useControls} from "leva";
import DebugPoint from "@/components/DebugPoint";

interface GiftBoxProps extends GroupProps {
  color?: string,
  wrappingColor?: string,
  width: number,
  height: number,
  length: number,
  ropeLength?: number,
}

interface WrappingProps extends MeshProps {
  width: number,
  height: number,
  padding: number,
  thickness: number,
  color?: string,
}

interface RibbonProps extends MeshProps {
  color?: string,
}

interface TieProps extends GroupProps {
  color?: string;
}

function rect(width: number, height: number) {
  const data = [
    [width / 2, height / 2],
    [width / 2, -height / 2],
    [-width / 2, -height / 2],
    [-width / 2, height / 2],
    [width / 2, height / 2],
  ].map(p => new Vector2(...p));
  return new THREE.Shape(data);
}

function Wrapping(props: WrappingProps) {
  const shape = React.useMemo(() => {
    const shape = rect(props.width + props.padding * 2, props.height + props.padding * 2);
    const hole = rect(props.width, props.height);
    shape.holes.push(hole);
    return shape;
  }, [props.width, props.height, props.padding]);

  const {position, rotation, ...delegated} = props;

  return (
    <group position={props.position} rotation={props.rotation}>
      <mesh castShadow={true} receiveShadow={true} {...delegated} position={[0, 0, -props.thickness / 2]}>
        <extrudeGeometry args={[shape, {
          depth: props.thickness,
          bevelEnabled: false
        }]}/>
        <meshStandardMaterial color={props.color ?? "red"}></meshStandardMaterial>
      </mesh>
    </group>
  );
}

function GiftBox(props: GiftBoxProps) {
  const wrappingColor = props.wrappingColor ?? "red";

  return <group {...props}>
    <Box length={props.length} width={props.width} height={props.height} color={props.color}/>
    <Box length={1} height={0.25} width={1} color={wrappingColor} position={[0, 5.375, 0]}/>
    <Wrapping color={wrappingColor} width={props.length} height={props.height} padding={0.25} thickness={1}></Wrapping>
    <Wrapping color={wrappingColor} width={props.width} height={props.height} padding={0.25} thickness={1}
              rotation={[0, Math.PI / 2, 0]}></Wrapping>
    <Ribbon color={wrappingColor} position={[0, 0.375 + props.height / 2, 0.5]}></Ribbon>
    <Ribbon color={wrappingColor} position={[0, 0.375 + props.height / 2, -0.5]} rotation={[0, -Math.PI, 0]}></Ribbon>
    <Tie color={wrappingColor} position={[0, 0.375 + props.height / 2, 0]}></Tie>
    {props.ropeLength ?
      <Box length={0.0625} height={props.ropeLength} width={0.0625}
           position={[0, (props.ropeLength + props.height) / 2, 0]} color={"white"}/> : null}
  </group>;
}


function Tie(props: TieProps) {
  return <group {...props}>
    <Box color={props.color} length={1.25} height={0.25} width={1} position={[-1.125, 0, 0]}></Box>
    <Box color={props.color} length={0.75} height={0.25} width={1} position={[-2.125, 0.25, 0]}></Box>
    <Box color={props.color} length={0.75} height={0.25} width={1} position={[-2.875, 0.5, 0]}></Box>
    <Box color={props.color} length={0.5} height={0.25} width={1} position={[-3.5, 0.75, 0]}></Box>
    <Box color={props.color} length={0.25} height={0.25} width={1} position={[-3.875, 1, 0]}></Box>
    <Box color={props.color} length={0.25} height={0.75} width={1} position={[-4.125, 1.5, 0]}></Box>
    <Box color={props.color} length={0.25} height={0.25} width={1} position={[-3.875, 2, 0]}></Box>
    <Box color={props.color} length={0.5} height={0.25} width={1} position={[-3.5, 2.25, 0]}></Box>
    <Box color={props.color} length={0.75} height={0.25} width={1} position={[-2.875, 2.5, 0]}></Box>
    <Box color={props.color} length={1} height={0.25} width={1} position={[-2, 2.75, 0]}></Box>
    <Box color={props.color} length={0.75} height={0.25} width={1} position={[-1.125, 2.5, 0]}></Box>
    <Box color={props.color} length={0.25} height={0.25} width={1} position={[-0.625, 2.25, 0]}></Box>
    <Box color={props.color} length={0.25} height={0.5} width={1} position={[-0.375, 1.875, 0]}></Box>
    <Box color={props.color} length={0.25} height={1.25} width={1} position={[-0.125, 1, 0]}></Box>
    <Box color={props.color} length={1.25} height={0.25} width={1} position={[1.125, 0, 0]}></Box>
    <Box color={props.color} length={0.75} height={0.25} width={1} position={[2.125, 0.25, 0]}></Box>
    <Box color={props.color} length={0.75} height={0.25} width={1} position={[2.875, 0.5, 0]}></Box>
    <Box color={props.color} length={0.5} height={0.25} width={1} position={[3.5, 0.75, 0]}></Box>
    <Box color={props.color} length={0.25} height={0.25} width={1} position={[3.875, 1, 0]}></Box>
    <Box color={props.color} length={0.25} height={0.75} width={1} position={[4.125, 1.5, 0]}></Box>
    <Box color={props.color} length={0.25} height={0.25} width={1} position={[3.875, 2, 0]}></Box>
    <Box color={props.color} length={0.5} height={0.25} width={1} position={[3.5, 2.25, 0]}></Box>
    <Box color={props.color} length={0.75} height={0.25} width={1} position={[2.875, 2.5, 0]}></Box>
    <Box color={props.color} length={1} height={0.25} width={1} position={[2, 2.75, 0]}></Box>
    <Box color={props.color} length={0.75} height={0.25} width={1} position={[1.125, 2.5, 0]}></Box>
    <Box color={props.color} length={0.25} height={0.25} width={1} position={[0.625, 2.25, 0]}></Box>
    <Box color={props.color} length={0.25} height={0.5} width={1} position={[0.375, 1.875, 0]}></Box>
    <Box color={props.color} length={0.25} height={1.25} width={1} position={[0.125, 1, 0]}></Box>
    <Box length={1} height={0.25} width={1} color={props.color} position={[0, 0.25, 0]}/>


  </group>;
}

function Ribbon(props: RibbonProps) {
  const originalPoints = [
    [0.5, 0],
    [0.5, 1],
    [0.5, 1],
    [0.625, 1],
    [0.625, 2],
    [0.75, 2],
    [0.75, 2.75],
    [0.875, 2.75],
    [0.875, 3.25],
    [0.75, 3.25],
    [0.75, 3.125],
    [0.625, 3.125],
    [0.625, 3],
    [0.5, 3],
    [0.5, 2.875],
    [0.375, 2.875],
    [0.375, 2.75],
    [0.25, 2.75],
    [0.25, 2.625],
    [0.125, 2.625],
    [0.125, 2.5],
  ];
  const allPoints = [...originalPoints, ...originalPoints.map(([x, y]) => [-x, y]).reverse()];
  const shape = new THREE.Shape(allPoints.map(p => new Vector2(...p)));
  const {position, rotation, ...delegated} = props;

  return <group position={position} rotation={rotation}>
    <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh castShadow={true} receiveShadow={true} {...delegated} position={[0, 0, -0.25 / 2]}>
        <extrudeGeometry args={[shape, {
          depth: 0.25,
          bevelEnabled: false
        }]}/>
        <meshStandardMaterial color={props.color ?? "red"}></meshStandardMaterial>
      </mesh>
    </group>
  </group>;
}

export default GiftBox;
