import * as React from 'react';
import * as THREE from 'three';
import {GroupProps} from "@react-three/fiber";

function Star(props: GroupProps, ref: React.ForwardedRef<THREE.Mesh|null>) {
  const points = [
    [5, 40],
    [5, 30],
    [10, 30],
    [10, 20],
    [15, 20],
    [15, 15],
    [40, 15],
    [40, 10],
    [35, 10],
    [35, 5],
    [30, 5],
    [30, 0],
    [25, 0],
    [25, -5],
    [20, -5],
    [20, -15],
    [25, -15],
    [25, -30],
    [30, -30],
    [30, -40],
    [20, -40],
    [20, -35],
    [10, -35],
    [10, -30],
    [5, -30],
    [5, -25],
  ];
  const allPoints = [...points, ...points.map(([x, y]) => [-x, y]).reverse()].map(p => new THREE.Vector2(...p));
  const shape = new THREE.Shape(allPoints);
  const [lightsOn, setLightsOn] = React.useState(true);
  const internalRef = React.useRef<THREE.Mesh|null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLightsOn(lightsOn => !lightsOn);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <group {...props}>
    <mesh castShadow={true} receiveShadow={true} position={[0, 0, -5]} ref={e => {
      internalRef.current = e;
      if (typeof ref === "function") {
        ref(e);
      } else if (ref) {
        ref.current = e;
      }
    }}>
      <extrudeGeometry args={[shape, {
        depth: 10,
        bevelEnabled: false
      }]}></extrudeGeometry>
      <meshPhongMaterial color={lightsOn ? "#ffcd4e" : "#523f01"}></meshPhongMaterial>
    </mesh>
  </group>;
}

export default React.memo(React.forwardRef(Star));
