import * as React from 'react';
import {GroupProps} from "@react-three/fiber";
import Cube from "@/components/Cube";

function CandyCane(props: GroupProps) {
  return <group {...props}>
    <Cube length={2.5} color={"white"} position={[0, 5, 0]}></Cube>
    <Cube length={2.5} color={"red"} position={[-2.5, 5, 0]}></Cube>
    <Cube length={2.5} color={"red"} position={[-2.5, 2.5, 0]}></Cube>
    <Cube length={2.5} color={"red"} position={[2.5, 5, 0]}></Cube>
    <Cube length={2.5} color={"white"} position={[2.5, 2.5, 0]}></Cube>
    <Cube length={2.5} color={"red"} position={[2.5, 0, 0]}></Cube>
    <Cube length={2.5} color={"white"} position={[2.5, -2.5, 0]}></Cube>
    <Cube length={2.5} color={"red"} position={[2.5, -5, 0]}></Cube>
  </group>;
}

export default CandyCane;
