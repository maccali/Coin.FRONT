import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MenuLeft } from "../../menus/Left"
import MenuTop from "../../menus/Top"
import GeneralInfo from "../../sections/GeneralInfo"
import HistoryService from "../../sections/HistoryService"
import MoreTestSection from "../../sections/MoreTestSection"
import ImportantNewsSection from "../../sections/ImportantNewsSection"
import { BackBlockWhite } from "./styles"

function Home() {
  return (
    <>
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
    </>
  )
}

export default Home
