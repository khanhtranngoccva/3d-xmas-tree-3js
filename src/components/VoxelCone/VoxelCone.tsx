import * as React from 'react';
import {GroupProps} from "@react-three/fiber";
import {DEFAULT_UNIT_SIZE} from "@/constants";
import VoxelCylinder from "@/components/VoxelCylinder";


interface VoxelConeProps extends GroupProps {
  unitSize?: number,
  spinGapInRadians?: number,
  height: number,
  stepHeight: number,
  endRadius: number,
  startRadius: number,
  color?: string,
}

function VoxelCone(props: VoxelConeProps) {
  const unitSize = props.unitSize ?? DEFAULT_UNIT_SIZE;
  // height 75, unitSize 10 => 7 layers
  const actualStepHeight = Math.floor(props.stepHeight / unitSize) * unitSize;
  const layerCount = Math.floor(props.height / actualStepHeight);
  const stepWidth = (props.endRadius - props.startRadius) / (layerCount - 1);
  const actualHeight = actualStepHeight * layerCount;
  const nodes: React.ReactNode[] = [];

  for (let i = 0; i < layerCount; i++) {
    const radius = Math.floor((props.startRadius + i * stepWidth) / unitSize) * unitSize;
    nodes.push(<VoxelCylinder radius={radius} height={actualStepHeight} unitSize={unitSize} key={i} color={props.color}
                              rotation={[-Math.PI / 2, 0, 0]}
                              position={[0, -(i + 0.5) * actualStepHeight + actualHeight / 2, 0]} castShadow={true}
                              receiveShadow={true}/>);
  }

  return <group {...props}>
    {nodes}
  </group>;
}

export default VoxelCone;
