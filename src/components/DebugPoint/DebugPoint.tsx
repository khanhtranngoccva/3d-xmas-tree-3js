import * as React from 'react';
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

function DebugPoint(props: {
  x: number,
  y: number,
  z: number,
  size?: number
}) {
  const ref = React.useRef<THREE.Mesh | null>(null);
  const size = props.size ?? 5;

  useFrame((_, delta) => {
    const point = ref.current;
    if (!point) return;
    point.rotation.x += 2 * delta;
    point.rotation.y += 2 * delta;
  });

  return <mesh position={[props.x, props.y, props.z]} ref={ref}>
    <boxGeometry args={[size, size, size]}></boxGeometry>
    <meshBasicMaterial color={"white"}></meshBasicMaterial>
  </mesh>;
}

export default DebugPoint;
