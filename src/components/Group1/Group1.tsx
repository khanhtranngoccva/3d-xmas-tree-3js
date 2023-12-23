import * as React from 'react';
import VoxelCone from "@/components/VoxelCone";
import Bell from "@/components/Bell";
import {TREE_COLOR} from "@/constants";
import {useControls} from 'leva';

function Group1() {


  return <group position={[0, 230, 0]}>
    <VoxelCone unitSize={5} height={40} stepHeight={10} endRadius={40} startRadius={10}
               color={TREE_COLOR}></VoxelCone>
    <Bell position={[17.5, 12.5, 7.5]}></Bell>
    <Bell position={[-17.5, 7.5, 12.5]} color={"blue"}></Bell>
    <Bell position={[7.5, 2.5, 27.5]} color={"#ff74f7"}></Bell>
    <Bell position={[-7.5, 2.5, -27.5]} color={"#ff547b"}></Bell>
    <Bell position={[27.5, 2.5, -7.5]} color={"#ffd44b"}></Bell>
    <Bell position={[17.5, -7.5, -32.5]} color={"#ffd44b"}></Bell>
    <Bell position={[37.5, -7.5, -7.5]} color={"#ff547b"}></Bell>
    <Bell position={[37.5, -12.5, 12.5]} color={"#4e72d2"}></Bell>
    <Bell position={[-32.5, -7.5, -17.5]} color={"#9783f5"}></Bell>
    <Bell position={[-32.5, -7.5, 17.5]} color={"#21ff0f"}></Bell>
    <Bell position={[-37.5, -22.5, -7.5]} color={"#4e72d2"}></Bell>
    <Bell position={[-7.5, -22.5, -37.5]} color={"#4e72d2"}></Bell>
    <Bell position={[-7.5, -22.5, 37.5]} color={"#59d8ff"}></Bell>
    <Bell position={[27.5,-22.5,27.5]} color={"#4e72d2"}></Bell>



  </group>;
}

export default Group1;
