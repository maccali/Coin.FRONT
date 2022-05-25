import type { NextPage } from 'next'
import MenuTop from "../../menus/Top"
import HistoryService from "../../sections/HistoryServicePatient"
import AllPatients from "../../sections/AllPatients"
import { BackBlockWhite } from "./styles"

export default function Patients() {
  return (
    <>
      <BackBlockWhite>
        <div className='menuTop'>
          <MenuTop />
        </div>
        <div className='historyService'>
          <HistoryService />
        </div>
        <div className='allPatients'>
          <AllPatients />
        </div>
      </ BackBlockWhite>
    </>
  )
}

