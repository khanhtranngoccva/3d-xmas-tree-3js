import * as React from 'react';
import {MeshProps} from "@react-three/fiber";
import * as THREE from 'three';
import {DisposableThreeObjectContext} from "@/components/DisposableThreeObjectProvider";

interface BoxProps extends MeshProps {
  color?: string;
  length: number;
  height: number;
  width: number;
}

function Box(props: BoxProps, ref: React.ForwardedRef<THREE.Mesh>) {
  const context = React.useContext(DisposableThreeObjectContext);
  const geometry = React.useMemo(() => {
    const key = JSON.stringify({
      type: "geometry",
      subtype: "boxGeometry",
      length: props.length,
      width: props.width,
      height: props.height,
    });
    return context.get(key, () => {
      return new THREE.BoxGeometry(props.length, props.height, props.width);
    });
  }, [context, props.length, props.height, props.width]);
  const color = props.color ?? "lime";
  const material = React.useMemo(() => {
    const key = JSON.stringify({
      type: "material",
      subtype: "meshStandardMaterial",
      color: color,
    });
    return context.get(key, () => {
      return new THREE.MeshStandardMaterial({
        color: color,
      })
    })
  }, [context, color]);
  return <>
    <mesh castShadow={true} receiveShadow={true} ref={ref} geometry={geometry} material={material} {...props} ></mesh>
  </>;
}

export default React.memo(React.forwardRef(Box));
