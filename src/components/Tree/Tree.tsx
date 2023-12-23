"use client";

import * as React from 'react';
import * as THREE from "three";
import VoxelCylinder from "@/components/VoxelCylinder";
import Group1 from "@/components/Group1";
import Group2 from "@/components/Group2";
import GiftBox from "@/components/GiftBox";
import Group3 from "@/components/Group3";
import Group4 from "@/components/Group4";
import Box from "@/components/Box";
import Star from "@/components/Star";
import SnowParticleSimulator from "@/components/SnowParticleSimulator";
import {useBloomLight} from "@/components/BloomProvider";


function Tree() {
  const lightRef0 = React.useRef<THREE.DirectionalLight | null>(null);
  const lightRef1 = React.useRef<THREE.DirectionalLight | null>(null);
  const lightRef2 = React.useRef<THREE.DirectionalLight | null>(null);

  React.useEffect(() => {
    for (let lightRef of [lightRef0, lightRef1, lightRef2]) {
      const light = lightRef.current;
      if (!light) return;
      light.shadow.normalBias = 1;
      light.shadow.mapSize.width = 8192;
      light.shadow.mapSize.height = 8192;
      light.shadow.camera.near = 0.5;
      light.shadow.camera.far = 3000;
      light.shadow.camera.left = -600;
      light.shadow.camera.right = 600;
      light.shadow.camera.top = -600;
      light.shadow.camera.bottom = 600;
      light.shadow.camera.updateMatrix();
      light.shadow.camera.updateProjectionMatrix();
    }
  }, []);

  // useBloomLight("starBloom", lightRef0);

  return (
    <>
      <directionalLight position={[-1000, 1000, -2000]} intensity={0.25} ref={lightRef1}
                        color={"white"}></directionalLight>
      <directionalLight position={[-1000, 1000, -2000]} intensity={0.25} ref={lightRef2}
                        color={"white"}></directionalLight>
      <directionalLight position={[-294, 500, 366]} intensity={1.5} castShadow={true} ref={lightRef0}
                        color={"white"}></directionalLight>
      <ambientLight intensity={0.75}></ambientLight>
      <Group1></Group1>
      <Group2></Group2>
      <Group3></Group3>
      <Group4></Group4>
      <Star position={[0, 295, 0]}></Star>
      <Box height={20} width={2.5} length={2.5} position={[0, 260, 0]} color={"white"}></Box>
      <GiftBox width={10} height={10} length={10} position={[-35, 15, 55]} wrappingColor={"white"} color={"red"}
               scale={[3, 3, 3]}></GiftBox>
      <GiftBox width={10} height={10} length={15} position={[30, 15, 70]} wrappingColor={"#ffae00"} color={"#b700ff"}
               scale={[3, 3, 3]}></GiftBox>
      <VoxelCylinder receiveShadow={true} castShadow={true} radius={30} height={50} color={"#6e3c1c"}
                     rotation={[-Math.PI / 2, 0, 0]} position={[0, 25, 0]}></VoxelCylinder>
      <Box width={10000} height={5} length={10000} color={"#9a9a9a"}></Box>
      <SnowParticleSimulator particleSize={3} sx={-500} sy={400} sz={-500} ex={500} ey={500} ez={500} interval={10}
                             removeY={0}></SnowParticleSimulator>
    </>
  );
}

export default Tree;
