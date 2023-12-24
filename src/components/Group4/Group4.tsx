import * as React from 'react';
import VoxelCone from "@/components/VoxelCone";
import {TREE_COLOR} from "@/constants";
import Bell from "@/components/Bell";
import GiftBox from "@/components/GiftBox";
import CandyCane from "@/components/CandyCane";
import {useControls} from "leva";

function Group4() {
    return <group position={[0, 75, 0]}>
    <VoxelCone unitSize={5} height={50} stepHeight={10} endRadius={110} startRadius={70}
               color={TREE_COLOR}></VoxelCone>
    <Bell position={[37.5, 7.5, 77.5]} color={"#fdfd00"}></Bell>
    <Bell position={[-52.5, 7.5, 72.5]} color={"#00fdfd"}></Bell>
    <Bell position={[-82.5, 7.5, 27.5]} color={"#5757fd"}></Bell>
    <Bell position={[-67.5, 12.5, -42.5]} color={"#fdfd00"}></Bell>
    <Bell position={[-22.5, 17.5, -72.5]} color={"#8282fd"}></Bell>
    <Bell position={[27.5, 7.5, -82.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[87.5, 7.5, -12.5]} color={"#fdfdfd"}></Bell>
    <Bell position={[77.5, 7.5, 37.5]} color={"#e35ae3"}></Bell>
    <Bell position={[67.5, -2.5, -67.5]} color={"#e35ae3"}></Bell>
    <Bell position={[-17.5, 2.5, -87.5]} color={"#e35a5a"}></Bell>
    <Bell position={[-57.5, -2.5, -77.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[-77.5, 2.5, -52.5]} color={"#d5d251"}></Bell>
    <Bell position={[-77.5, -12.5, -77.5]} color={"#fdfdfd"}></Bell>
    <Bell position={[-102.5, -12.5, -32.5]} color={"#00f8f8"}></Bell>
    <Bell position={[12.5, -12.5, -107.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[87.5, -12.5, -62.5]} color={"#d52a2a"}></Bell>
    <Bell position={[102.5, -12.5, 17.5]} color={"#fd8282"}></Bell>
    <Bell position={[87.5, -12.5, 62.5]} color={"#fd8282"}></Bell>
    <Bell position={[32.5, -12.5, 102.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[-47.5, -12.5, 97.5]} color={"#fd57fd"}></Bell>
    <Bell position={[-77.5, -17.5, 82.5]} color={"#5a5ae3"}></Bell>
    <Bell position={[-107.5, -17.5, 32.5]} color={"#fd57fd"}></Bell>
    <CandyCane position={[-3.75, -32.5, 108.75]}></CandyCane>
    <CandyCane position={[-81.25, -32.5, 61.25]} rotation={[0, Math.PI / 2, 0]}></CandyCane>
    <CandyCane position={[-111.25, -32.5, -11.25]} rotation={[0, Math.PI / 2, 0]}></CandyCane>
    <CandyCane position={[-33.75, -32.5, -101.25]} rotation={[0, Math.PI / 2, 0]}></CandyCane>
    <CandyCane position={[108.75, -32.5, 11.25]} rotation={[0, -Math.PI / 2, 0]}></CandyCane>
    <GiftBox position={[50, -35, 100]} width={10} height={10} length={10} ropeLength={5} wrappingColor={"#ffc13b"}
             color={"#ad0b0b"}></GiftBox>
    <GiftBox position={[-110, -35, 15]} rotation={[0, Math.PI / 2, 0]} width={10} height={10} length={10} ropeLength={5}
             wrappingColor={"#ffc13b"} color={"#2440e3"}></GiftBox>
    <GiftBox position={[80, -35, -80]} rotation={[0, 0, 0]} width={10} height={10} length={10} ropeLength={5}
             wrappingColor={"#ffc13b"} color={"#029b1b"}></GiftBox>

  </group>;
}

export default Group4;
