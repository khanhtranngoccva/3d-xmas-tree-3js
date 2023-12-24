import * as React from 'react';
import {MeshProps} from "@react-three/fiber";
import Cube from "@/components/Cube";

interface BellProps extends MeshProps {
  color?: string;
}

function Bell(props: BellProps) {
  return <Cube length={5} {...props}></Cube>;
}

export default Bell;
