import type { NextPage } from 'next'
import { useState } from "react"
import { Item, Menu, Indicator, Logo, Block } from "./styles"

import Home from "../Home"
import Patients from "../Patients"

type activeMenuInterface = "DASH" | "PATIENTS" | "TESTS" | "CONFIG"

function TabsPanel() {

  const [activeMenu, setActiveMenu] = useState('DASH')


  return (
    <Block>
      <div className='menu'>

        <Logo>
          <img src="/arts/ident.png" alt="" />
          <img src="/arts/identLogo.png" alt="" />
        </Logo>
        <Menu>
          <Item className={activeMenu == "DASH" ? "active" : ""} onClick={() => { setActiveMenu("DASH") }}>
            <img src="/icons/home.png" alt="" />
            <p>Dashboard</p>
          </Item >
          <Item className={activeMenu == "PATIENTS" ? "active" : ""} onClick={() => { setActiveMenu("PATIENTS") }}>
            <img src="/icons/down.png" alt="" />
            <p>Pacientes</p>
          </Item >

          <Item className={activeMenu == "TESTS" ? "active" : ""} onClick={() => { setActiveMenu("TESTS") }}>
            <img src="/icons/down.png" alt="" />
            <p>Testes</p>
          </Item >

          <Item className={activeMenu == "CONFIG" ? "active" : ""} onClick={() => { setActiveMenu("CONFIG") }}>
            <img src="/icons/down.png" alt="" />
            <p>Configurações</p>
          </Item >
        </Menu>

      </div>
      <div className='tabs'>

        {activeMenu == "DASH" &&
          <Home />
        }

        {activeMenu == "PATIENTS" &&
          <Patients />
        }

        {activeMenu == "TESTS" &&
          "dfsa"
        }

        {activeMenu == "CONFIG" &&
          "dfsa"
        }
      </div>

    </Block >
  )
}

export default TabsPanel
