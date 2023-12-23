import * as React from 'react';
import useMemoizedObject from "@/hooks/useMemoizedObject";

interface DisposableThreeObject {
  dispose(): void;
}

interface DisposableThreeObjectContext {
  get<T extends DisposableThreeObject>(key: string, initializerFunc: () => T): T;

  dispose(): void;
}

export const DisposableThreeObjectContext = React.createContext<DisposableThreeObjectContext>({
  dispose() {
  },
  get() {
    throw new Error("Function can only be called in a component inside the context provider.");
  }
});

function DisposableThreeObjectProvider(props: { children?: React.ReactNode }) {
  const ref = React.useRef<Map<string, DisposableThreeObject>>(new Map());
  const cache = ref.current;

  const get = React.useCallback(function _get<T extends DisposableThreeObject>(key: string, initializerFunc: () => T): T {
    if (cache.has(key)) {
      return cache.get(key) as T;
    } else {
      cache.set(key, initializerFunc());
      return cache.get(key) as T;
    }
  }, [cache]);

  const dispose = React.useCallback(() => {
    cache.forEach((resource, key) => {
      cache.delete(key);
      resource.dispose();
    });
  }, [cache]);

  return <DisposableThreeObjectContext.Provider value={useMemoizedObject({get, dispose})}>
    {props.children}
  </DisposableThreeObjectContext.Provider>;
}

export default React.memo(DisposableThreeObjectProvider);
