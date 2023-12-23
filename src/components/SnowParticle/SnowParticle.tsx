import * as React from 'react';
import Box from "@/components/Box";
import * as THREE from 'three';
import {useFrame} from "@react-three/fiber";

function SnowParticle(props: {
  x: number,
  y: number,
  z: number,
  onRemove: () => void,
  removeY: number,
  size: number,
}) {
  const {x, y, z, size} = props;
  const particleRef = React.useRef<THREE.Mesh | null>(null);
  const timeRef = React.useRef<number>(0);
  const phaseRef = React.useRef(2 * Math.PI * Math.random());

  React.useEffect(() => {
    timeRef.current = 0;
  }, [x, y, z]);

  useFrame((state, delta, frame) => {
    const particle = particleRef.current;
    if (!particle) return;
    timeRef.current += delta;
    const elapsed = timeRef.current;
    particle.position.y = y - 50 * elapsed;
    particle.position.z = z + 10 * Math.sin(elapsed * Math.PI - phaseRef.current); // period is 2 seconds,
    if (particle.position.y < 0) {
      props.onRemove();
    }
  });

  return <Box castShadow={false} position={[x, y, z]} ref={particleRef} width={size} height={size} length={size}
              color={"white"}></Box>;
}

export default SnowParticle;
