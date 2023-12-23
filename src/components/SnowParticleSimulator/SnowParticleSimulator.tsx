import * as React from 'react';
import SnowParticle from "@/components/SnowParticle";
import {produce} from "immer";
import * as uuid from "uuid";

interface ParticleParams {
  x: number;
  y: number;
  z: number;
  id: string;
  removeY: number;
}

interface Particle extends ParticleParams {
  remove(this: Particle): void;
}

interface ParticleSimulatorProps {
  sx: number;
  sy: number;
  sz: number;
  ex: number;
  ey: number;
  ez: number;
  removeY: number;
  interval: number;
  particleSize: number;
}

function random(start: number, end: number) {
  return Math.random() * (end - start) + start;
}

function SnowParticleSimulator(props: ParticleSimulatorProps) {
  const [particles, setParticles] = React.useState<Set<Particle>>(new Set());

  const removeParticle = React.useCallback((particle: Particle) => {
    setParticles(current => {
      return produce(current, draft => {
        draft.delete(particle);
      });
    });
  }, []);

  const addParticle = React.useCallback((particle: ParticleParams) => {
    setParticles(current => {
      return produce(current, draft => {
        const newParticle: Particle = {
          ...particle,
          remove: function (this: Particle) {
            removeParticle(this);
          }
        };
        // Bind function to the particle so that we don't have to pass an anonymous function each re-render, allowing memos.
        newParticle.remove = newParticle.remove.bind(newParticle);
        draft.add(newParticle);
      });
    });
  }, [removeParticle]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      addParticle({
        x: random(props.sx, props.ex),
        y: random(props.sy, props.ey),
        z: random(props.sz, props.ez),
        removeY: props.removeY,
        id: uuid.v4(),
      });
    }, props.interval);

    return () => {
      clearInterval(interval);
    };
  }, [addParticle, props.sx, props.sy, props.sz, props.ey, props.ex, props.ez, props.interval, props.removeY]);

  return <group>
    {Array.from(particles).map(particle => {
      return <SnowParticle
        removeY={particle.removeY} size={props.particleSize} x={particle.x} y={particle.y} z={particle.z}
        key={particle.id}
        onRemove={particle.remove}></SnowParticle>;
    })}
  </group>;
}

export default SnowParticleSimulator;
