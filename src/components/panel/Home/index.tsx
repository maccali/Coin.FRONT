import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MenuLeft } from "../../../components/menus/Left"
import MenuTop from "../../../components/menus/Top"
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
          <div className='generalInfo'>generalInfo</div>
          <div className='historyService'>historyService</div>
          <div className='moreTest'>moreTest</div>
          <div className='importantNews'>importantNews</div>
        </ BackBlockWhite>
        {/* <GeneralInformation image='/icons/person.png' number={26} percentNumber={30} legend="Pacientes ativos" />
      <GeneralInformation image='/icons/tube.png' number={306} percentNumber={-10} legend="Testes realizados" />
      <GeneralInformation image='/icons/tubeGreen.png' number={139} percentNumber={30} legend="Testes concluídos" />
    <GeneralInformation image='/icons/tubeRed.png' number={11} percentNumber={-3} legend="Testes cancelados" /> */}
      </BackBlock>
    </>
  )
}

export default Home
