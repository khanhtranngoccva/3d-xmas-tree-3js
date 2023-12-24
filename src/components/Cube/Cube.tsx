import * as React from 'react';
import {MeshProps} from "@react-three/fiber";
import * as THREE from 'three';

interface CubeProps extends MeshProps {
  color?: string;
  length: number;
}

function Cube(props: CubeProps, ref: React.ForwardedRef<THREE.Mesh>) {
  const color = props.color ?? "lime";
  return <>
    <mesh {...props} castShadow={true} receiveShadow={true} ref={ref}>
      <boxGeometry args={[props.length, props.length, props.length]}></boxGeometry>
      <meshStandardMaterial color={color}></meshStandardMaterial>
    </mesh>
  </>
}

export default React.memo(React.forwardRef(Cube));
