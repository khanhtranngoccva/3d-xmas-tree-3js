import * as React from 'react';
import VoxelCone from "@/components/VoxelCone";
import {TREE_COLOR} from "@/constants";
import Bell from "@/components/Bell";
import CandyCane from "@/components/CandyCane";
import GiftBox from "@/components/GiftBox";
import {useControls} from "leva";

function Group3() {


  return <group position={[0, 130, 0]}>
    <VoxelCone unitSize={5} height={60} stepHeight={10} endRadius={90} startRadius={40}
               color={TREE_COLOR}></VoxelCone>
    <Bell position={[47.5, 17.5, 17.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[37.5, 12.5, 37.5]} color={"#fd7b7b"}></Bell>
    <Bell position={[52.5, 12.5, -22.5]} color={"#00fd00"}></Bell>
    <Bell position={[22.5,12.5,-52.5]} color={"#fdfdfd"}></Bell>
    <Bell position={[-22.5,22.5,-42.5]} color={"#fd8282"}></Bell>
    <Bell position={[-57.5,12.5,-7.5]} color={"#ff80ff"}></Bell>
    <Bell position={[-42.5,17.5,27.5]} color={"#882de3"}></Bell>
    <Bell position={[12.5,7.5,57.5]} color={"#6464ff"}></Bell>
    <Bell position={[67.5,2.5,-7.5]} color={"#fdb0fd"}></Bell>
    <Bell position={[22.5,-2.5,-62.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[-12.5,-7.5,-77.5]} color={"#fdfdfd"}></Bell>
    <Bell position={[-47.5,2.5,-47.5]} color={"#e3ab00"}></Bell>
    <Bell position={[-67.5,-2.5,12.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[-22.5,-7.5,72.5]} color={"#fd3939"}></Bell>
    <Bell position={[37.5,-12.5,67.5]} color={"#c540fd"}></Bell>
    <Bell position={[52.5,-17.5,67.5]} color={"#fdfd00"}></Bell>
    <Bell position={[57.5,-2.5,32.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[72.5,-12.5,-27.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[62.5,-7.5,-42.5]} color={"#00fd00"}></Bell>
    <Bell position={[72.5,-17.5,-52.5]} color={"#00fdfd"}></Bell>
    <Bell position={[-12.5,-17.5,-87.5]} color={"#e35a5a"}></Bell>
    <Bell position={[-62.5,-17.5,-62.5]} color={"#d52a2a"}></Bell>
    <Bell position={[-77.5,-7.5,-12.5]} color={"#e3ab00"}></Bell>
    <Bell position={[-62.5,-17.5,62.5]} color={"#c540fd"}></Bell>
    <Bell position={[-12.5,-32.5,87.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[-72.5,-32.5,52.5]} color={"#fd5151"}></Bell>
    <Bell position={[-87.5,-32.5,12.5]} color={"#fdfdfd"}></Bell>
    <Bell position={[-77.5,-32.5,-37.5]} color={"#e35a5a"}></Bell>
    <Bell position={[-12.5,-32.5,-87.5]} color={"#d52a2a"}></Bell>
    <Bell position={[72.5,-32.5,-52.5]} color={"#d52a2a"}></Bell>
    <Bell position={[77.5,-32.5,37.5]} color={"#d52a2a"}></Bell>
    <GiftBox position={[15,-40,90]} width={10} height={10} length={10} ropeLength={5} wrappingColor={"#ffd532"} color={"#4e4eff"}></GiftBox>
    <CandyCane position={[51.25,-37.5,73.75]} ></CandyCane>
    <CandyCane position={[53.75,-37.5,-71.25]} rotation={[0, Math.PI / 2, 0]} ></CandyCane>
    <GiftBox position={[90,-40,15]} rotation={[0, Math.PI / 2, 0]} width={10} height={10} length={10} ropeLength={5} wrappingColor={"#ff3262"} color={"#b84eff"}></GiftBox>
    <GiftBox position={[-90,-40,-15]} rotation={[0, Math.PI / 2, 0]} width={10} height={10} length={10} ropeLength={5} wrappingColor={"#ffa632"} color={"#b84eff"}></GiftBox>
  </group>;
}

export default Group3;
