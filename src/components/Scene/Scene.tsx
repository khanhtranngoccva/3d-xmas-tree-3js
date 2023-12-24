import * as React from 'react';
import Tree from "@/components/Tree";
import {OrbitControls} from "@react-three/drei";
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import Lights from "@/components/Lights";

function Scene() {
  return <EffectComposer enabled={true} disableNormalPass={true}>
    <Bloom intensity={3} luminanceThreshold={0.25} mipmapBlur={true}></Bloom>
    <Lights></Lights>
    <Tree></Tree>
    <OrbitControls maxDistance={700} target={[0, 150, 0]} enablePan={false} maxPolarAngle={Math.PI / 2}
                   minPolarAngle={Math.PI / 6}></OrbitControls>
  </EffectComposer>;
}

export default Scene;
