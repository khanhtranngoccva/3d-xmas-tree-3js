import * as React from 'react';
import * as THREE from "three";
import {WallpaperContext} from "@/components/WallpaperContextWrapper";
import {PCFSoftShadowMap} from "three";

function Lights() {
  const {normalBias, mapWidth, mapHeight} = React.useContext(WallpaperContext);
  const lightRef0 = React.useRef<THREE.DirectionalLight | null>(null);
  const lightRef1 = React.useRef<THREE.DirectionalLight | null>(null);
  const lightRef2 = React.useRef<THREE.DirectionalLight | null>(null);
  const ambientRef = React.useRef<THREE.AmbientLight | null>(null);

  React.useEffect(() => {
    for (let lightRef of [lightRef0]) {
      const light = lightRef.current;
      if (!light) return;
      light.shadow.normalBias = normalBias;
      light.shadow.map?.setSize(mapWidth, mapHeight);
      light.shadow.mapSize.set(mapWidth, mapHeight);
      light.shadow.camera.near = 0.5;
      light.shadow.camera.far = 3000;
      light.shadow.camera.left = -600;
      light.shadow.camera.right = 600;
      light.shadow.camera.top = -600;
      light.shadow.camera.bottom = 600;
      light.shadow.camera.updateMatrix();
      light.shadow.camera.updateProjectionMatrix();
    }
  }, [normalBias, mapHeight, mapWidth]);

  return <>
    <directionalLight position={[-1000, 1000, -2000]} intensity={0.25} ref={lightRef1}
                      color={"white"}></directionalLight>
    <directionalLight position={[-1000, 1000, -2000]} intensity={0.25} ref={lightRef2}
                      color={"white"}></directionalLight>
    <directionalLight position={[-294, 500, 366]} intensity={1.5} castShadow={true} ref={lightRef0}
                      color={"white"}></directionalLight>
    <ambientLight intensity={0.7} ref={ambientRef}></ambientLight>
  </>;
}

export default Lights;
