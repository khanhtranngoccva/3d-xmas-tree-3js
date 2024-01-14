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
import {WallpaperContext} from "@/components/WallpaperContextWrapper";


function Tree() {
  const {snowInterval} = React.useContext(WallpaperContext);

  return (
    <>
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
      <Box width={10000} height={5} length={10000} color={"#c2c2c2"}></Box>
      <SnowParticleSimulator particleSize={3} sx={-800} sy={400} sz={-600} ex={800} ey={500} ez={600}
                             interval={snowInterval}
                             removeY={0}></SnowParticleSimulator>
    </>
  );
}

export default Tree;
