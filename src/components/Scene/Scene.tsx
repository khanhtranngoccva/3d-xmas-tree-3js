import * as React from 'react';
import BloomProvider from "@/components/BloomProvider/BloomProvider";
import Tree from "@/components/Tree";
import {OrbitControls} from "@react-three/drei";
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";

function Scene() {
  return <EffectComposer enabled={true}>
    <Bloom blurPass={undefined} intensity={3} mipmapBlur={true} luminanceThreshold={0.3}/>
    <Tree></Tree>
    <OrbitControls target={[0, 150, 0]} enablePan={false} maxPolarAngle={Math.PI / 2}
                   minPolarAngle={Math.PI / 6}></OrbitControls>
  </EffectComposer>;
}

export default Scene;
