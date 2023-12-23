"use client";

import {Canvas, MeshProps, useFrame} from "@react-three/fiber";
import React from "react";
import {OrbitControls} from "@react-three/drei";
import Tree from "@/components/Tree";
import "@/helpers/patches";
import DisposableThreeObjectProvider from "@/components/DisposableThreeObjectProvider";
import BloomProvider from "@/components/BloomProvider";
import Scene from "@/components/Scene";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between">
      <DisposableThreeObjectProvider>
        <Canvas className={"w-full h-full"} camera={{
          position: [0, 350, 700],
          near: 0.1,
          far: 2000,
          fov: 40,
          rotation: [0, Math.PI / 3, 0],
        }} shadows={"soft"} dpr={[1, 5]}>
          <Scene></Scene>
        </Canvas>
      </DisposableThreeObjectProvider>
    </main>
  );
}
