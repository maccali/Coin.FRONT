import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralInformation from "../../cards/GeneralInformation"
import { BackColor, BackImage } from "./styles"

interface BackGroundInterface {
  children: React.ReactNode;
}

export default function BackGround({
  children
}: BackGroundInterface) {
  return (
    <BackColor>
      <BackImage>
        {children}
      </ BackImage>
    </ BackColor>
  )
}