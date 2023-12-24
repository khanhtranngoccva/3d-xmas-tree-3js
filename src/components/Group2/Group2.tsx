import * as React from 'react';
import VoxelCone from "@/components/VoxelCone";
import {TREE_COLOR} from "@/constants";
import {useControls} from "leva";
import Bell from "@/components/Bell";
import CandyCane from "@/components/CandyCane";
import GiftBox from "@/components/GiftBox";

function Group2() {
  return (
    <group position={[0, 185, 0]}>
      <VoxelCone unitSize={5} height={50} stepHeight={10} endRadius={60} startRadius={20}
                 color={TREE_COLOR}></VoxelCone>
      <Bell position={[-17.5, 17.5, 22.5]} color={"#d1da40"}></Bell>
      <Bell position={[-22.5, 17.5, -17.5]} color={"#4e72d2"}></Bell>
      <Bell position={[7.5, 17.5, -27.5]} color={"#d1da40"}></Bell>
      <Bell position={[32.5, 7.5, -17.5]} color={"#70ff5a"}></Bell>
      <Bell position={[27.5, 7.5, 27.5]} color={"#d1da40"}></Bell>
      <Bell position={[7.5, 7.5, 37.5]} color={"#ff8932"}></Bell>
      <Bell position={[-32.5, 7.5, 17.5]} color={"#d1da40"}></Bell>
      <Bell position={[-27.5, 7.5, -27.5]} color={"#ffffff"}></Bell>
      <Bell position={[-42.5, -2.5, -22.5]} color={"#fc2910"}></Bell>
      <Bell position={[-52.5, -12.5, -22.5]} color={"#d1da40"}></Bell>
      <Bell position={[-57.5, -12.5, 7.5]} color={"#37ffff"}></Bell>
      <Bell position={[-47.5, -12.5, 32.5]} color={"#ffffff"}></Bell>
      <Bell position={[-22.5, -12.5, 52.5]} color={"#fc2910"}></Bell>
      <Bell position={[-22.5, -12.5, -52.5]} color={"#e3ab00"}></Bell>
      <Bell position={[27.5, -7.5, -42.5]} color={"#882de3"}></Bell>
      <Bell position={[52.5, -12.5, -22.5]} color={"#fd8282"}></Bell>
      <Bell position={[47.5, -12.5, 17.5]} color={"#00fd00"}></Bell>
      <Bell position={[17.5, -12.5, 47.5]} color={"#e35a5a"}></Bell>
      <Bell position={[37.5, -27.5, 37.5]} color={"#33f8ff"}></Bell>
      <Bell position={[57.5, -27.5, -7.5]} color={"#df2af6"}></Bell>
      <Bell position={[32.5, -27.5, -37.5]} color={"#8958ec"}></Bell>
      <Bell position={[-32.5, -27.5, 47.5]} color={"#ffffff"}></Bell>
      <Bell position={[-57.5, -27.5, -7.5]} color={"#e35a5a"}></Bell>
      <Bell position={[-22.5, -27.5, -47.5]} color={"#5a5ae3"}></Bell>
      <CandyCane position={[-6.25,-32.5,58.75]}></CandyCane>
      <CandyCane position={[-48.75,-32.5,-31.25]} rotation={[0, -Math.PI / 2, 0]}></CandyCane>
      <GiftBox color={"yellow"} height={10} width={10} length={10} position={[-55,-35,25]} ropeLength={5}></GiftBox>
      <GiftBox color={"#716cff"} height={10} width={10} length={10} position={[-10,-35,-60]} rotation={[0, Math.PI / 2, 0]} ropeLength={5}></GiftBox>

    </group>
  );
}

export default Group2;
