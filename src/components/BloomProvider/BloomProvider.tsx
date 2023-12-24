import * as React from 'react';
import * as THREE from 'three';
import {produce} from "immer";
import {SelectiveBloom, SelectiveBloomProps} from "@react-three/postprocessing";
import {Light} from "three";
import useMemoizedObject from "@/hooks/useMemoizedObject";

interface BloomLayer {
  lights: Set<THREE.Light>;
  selection: Set<THREE.Object3D>;
}

interface BloomProps extends Omit<SelectiveBloomProps, "lights" | "selection"> {
}

type BloomState = Map<string, BloomLayer>

interface BloomContext {
  addLight(key: string, light: THREE.Light): void;

  removeLight(key: string, light: THREE.Light): void;

  addObject(key: string, object: THREE.Object3D): void;

  removeObject(key: string, object: THREE.Object3D): void;
}

function _contextError() {
  throw new Error("Function can only be called inside BloomContext");
}

export const BloomContext = React.createContext<BloomContext>({
  addLight(key: string, light: Light) {
    _contextError();
  },
  removeLight(key: string, light: Light) {
    _contextError();
  },
  addObject(key: string, light: Light) {
    _contextError();
  },
  removeObject(key: string, light: Light) {
    _contextError();
  },
});


function BloomProvider(props: {
  blooms: Record<string, BloomProps>,
  children?: React.ReactNode,
}) {
  const [bloomState, setBloomState] = React.useState<BloomState>(() => {
    const draft = new Map();
    for (let key of Object.keys(props.blooms)) {
      if (!draft.has(key)) {
        draft.set(key, {
          lights: new Set(),
          selection: new Set(),
        });
      }
    }
    return draft;
  });

  React.useEffect(() => {
    setBloomState((current) => {
      return produce(current, draft => {
        for (let key of Object.keys(props.blooms)) {
          if (!draft.has(key)) {
            draft.set(key, {
              lights: new Set(),
              selection: new Set(),
            });
          }
        }
        for (let key of Array.from(bloomState.keys())) {
          if (!(key in props.blooms)) {
            draft.delete(key);
          }
        }
      });
    });
  }, [bloomState, props.blooms]);

  const addLight = React.useCallback((key: string, light: THREE.Light) => {
    setBloomState((current) => {
      if (!current.has(key)) {
        throw new Error(`Bloom object does not have a state of key ${key}.`);
      }
      return produce(current, draft => {
        draft.get(key)!.lights.add(light);
      });
    });
  }, []);
  const removeLight = React.useCallback((key: string, light: THREE.Light) => {
    setBloomState((current) => {
      return produce(current, draft => {
        draft.get(key)?.lights.delete(light);
      });
    });
  }, []);
  const addObject = React.useCallback((key: string, object: THREE.Object3D) => {
    setBloomState((current) => {
      if (!current.has(key)) {
        throw new Error(`Bloom object does not have a state of key ${key}.`);
      }
      return produce(current, draft => {
        draft.get(key)!.selection.add(object);
      });
    });
  }, []);
  const removeObject = React.useCallback((key: string, object: THREE.Object3D) => {
    setBloomState((current) => {
      return produce(current, draft => {
        draft.get(key)?.selection.delete(object);
      });
    });
  }, []);

  const result = Object.keys(props.blooms).map(key => {
    const bloomProps = props.blooms[key];
    const bloomData = bloomState.get(key);
    if (!bloomProps || !bloomData) return null;
    if (!bloomData.lights.size || !bloomData.selection.size) return null;
    return <SelectiveBloom
      {...bloomProps}
      key={key}
      lights={Array.from(bloomData.lights)}
      selection={Array.from(bloomData.selection)}>
    </SelectiveBloom>;
  });
  return <BloomContext.Provider value={useMemoizedObject({
    addLight,
    removeLight,
    addObject,
    removeObject,
  })}>
    {result}
    {props.children}
  </BloomContext.Provider>;
}

export function useBloomLight(key: string, ref: React.RefObject<THREE.Light>) {
  const context = React.useContext(BloomContext);

  React.useEffect(() => {
    if (!ref.current) return;
    const light = ref.current;
    context.addLight(key, light);
    return () => {
      context.removeLight(key, light);
    };
  }, [key, context, ref]);
}

export function useBloomObject(key: string, ref: React.RefObject<THREE.Object3D>) {
  const context = React.useContext(BloomContext);

  React.useEffect(() => {
    if (!ref.current) return;
    const object = ref.current;
    context.addObject(key, object);
    return () => {
      context.removeObject(key, object);
    };
  }, [key, context, ref]);
}

export default React.memo(BloomProvider);
