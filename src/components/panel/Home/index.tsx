import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MenuLeft } from "../../../components/menus/Left"
import MenuTop from "../../../components/menus/Top"
import GeneralInfo from "../../../components/sections/GeneralInfo"
import HistoryService from "../../../components/sections/HistoryService"
import MoreTestSection from "../../../components/sections/MoreTestSection"
import ImportantNewsSection from "../../../components/sections/ImportantNewsSection"
import { BackBlock, BackBlockWhite } from "./styles"

const Home: NextPage = () => {
  return (
    <>
      <BackBlock>
        <MenuLeft />
        <BackBlockWhite>
          <div className='menuTop'>
            <MenuTop />
          </div>
          <div className='generalInfo'>
            <GeneralInfo />
          </div>
          <div className='historyService'>
            <HistoryService />
          </div>
          <div className='moreTest'>
            <MoreTestSection />
          </div>
          <div className='importantNews'>
            <ImportantNewsSection />
          </div>
        </ BackBlockWhite>
      </BackBlock>
    </>
  )
}

export default Home
