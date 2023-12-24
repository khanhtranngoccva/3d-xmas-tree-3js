import * as React from 'react';
import {GroupProps} from "@react-three/fiber";
import Cube from "@/components/Cube";

function CandyCane(props: GroupProps) {
  return <group {...props}>
    <Cube length={2.5} color={"white"} position={[0, 6.25, 0]}></Cube>
    <Cube length={2.5} color={"red"} position={[-2.5, 6.25, 0]}></Cube>
    <Cube length={2.5} color={"white"} position={[-2.5, 3.75, 0]}></Cube>
    <Cube length={2.5} color={"red"} position={[-2.5, 1.25, 0]}></Cube>
    <Cube length={2.5} color={"red"} position={[2.5, 6.25, 0]}></Cube>
    <Cube length={2.5} color={"white"} position={[2.5, 3.75, 0]}></Cube>
    <Cube length={2.5} color={"red"} position={[2.5, 1.25, 0]}></Cube>
    <Cube length={2.5} color={"white"} position={[2.5, -1.25, 0]}></Cube>
    <Cube length={2.5} color={"red"} position={[2.5, -3.75, 0]}></Cube>
    <Cube length={2.5} color={"white"} position={[2.5, -6.25, 0]}></Cube>
  </group>;
}

export default CandyCane;
