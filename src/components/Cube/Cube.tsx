import * as React from 'react';
import {MeshProps} from "@react-three/fiber";


interface CubeProps extends MeshProps {
  color?: string;
  length: number;
}

function Cube(props: CubeProps) {
  const color = props.color ?? "lime";
  return <>
    <mesh {...props} castShadow={true} receiveShadow={true}>
      <boxGeometry args={[props.length, props.length, props.length]}></boxGeometry>
      <meshStandardMaterial color={color}></meshStandardMaterial>
    </mesh>
  </>
}

export default Cube;
