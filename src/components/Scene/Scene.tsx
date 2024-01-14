import * as React from 'react';
import Tree from "@/components/Tree";
import {OrbitControls} from "@react-three/drei";
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import Lights from "@/components/Lights";
import {WallpaperContext} from "@/components/WallpaperContextWrapper";
import {Canvas, useThree} from "@react-three/fiber";

function Scene() {
  const {bloom, offsetX, offsetY} = React.useContext(WallpaperContext);

  return <div className={"relative flex w-full h-full items-center justify-center overflow-hidden"}>
    <div className={"absolute"} style={{
      width: `calc(100% + ${Math.abs(offsetX) * 2}px)`,
      height: `calc(100% + ${Math.abs(offsetY) * 2}px)`,
      transform: `translate(${offsetX}px, ${offsetY}px)`
    }}>
      <Canvas className={"w-full h-full"} camera={{
        position: [0, 350, 700],
        near: 0.1,
        far: 2000,
        fov: 40,
        rotation: [0, Math.PI / 3, 0],
      }} shadows={"soft"} dpr={[1, 5]}>
        <EffectComposer enabled={true} disableNormalPass={true}>
          <Bloom intensity={bloom} luminanceThreshold={0.25} mipmapBlur={true}></Bloom>
          <Lights></Lights>
          <Tree></Tree>
          <OrbitControls maxDistance={700} target={[0, 150, 0]} enablePan={false} maxPolarAngle={Math.PI / 2}
                         minPolarAngle={Math.PI / 6}></OrbitControls>
        </EffectComposer>
      </Canvas>
    </div>
  </div>;
}

export default Scene;
