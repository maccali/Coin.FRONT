import type { NextPage } from 'next'
import MenuTop from "../../../components/menus/Top"
import HistoryService from "../../../components/sections/HistoryServicePatient"
import AllPatients from "../../../components/sections/AllPatients"
import { BackBlockWhite } from "./styles"

const Patients: NextPage = () => {
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

export default Patients
