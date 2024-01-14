"use client";

import React from "react";
import "@/helpers/patches";
import DisposableThreeObjectProvider from "@/components/DisposableThreeObjectProvider";
import Scene from "@/components/Scene";
import WallpaperContextWrapper from "@/components/WallpaperContextWrapper";
import {Canvas} from "@react-three/fiber";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between select-none relative">
      <WallpaperContextWrapper>
        <DisposableThreeObjectProvider>
          <Scene></Scene>
        </DisposableThreeObjectProvider>
      </WallpaperContextWrapper>
    </main>
  );
}
