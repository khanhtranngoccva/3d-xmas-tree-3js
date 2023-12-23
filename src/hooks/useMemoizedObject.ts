import React from "react";

export default function useMemoizedObject<T extends {}>(object: T): T {
  return React.useMemo(() => {
    return object;
  }, [...Object.values(object)]);
}


export function useMemoizedArray<T>(array: T[]): T[] {
  return React.useMemo(() => {
    return array;
  }, array);
}
