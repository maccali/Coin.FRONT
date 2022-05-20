

import { useRef, useState, useEffect, createRef } from "react"
import gsap from "gsap"
import { Item, Menu, Indicator, Logo, Block } from "./styles"


export const MenuLeft = () => {

  const items = [
    {
      name: "Dashboard",
      color: "#eff2f9",
      href: "#"
    },
    {
      name: "Pacientes",
      color: "#eff2f9",
      href: "#"
    },
    {
      name: "Testes",
      color: "#eff2f9",
      href: "#"
    },
    {
      name: "Configurações",
      color: "#eff2f9",
      href: "#"
    },

  ];


  const $root = useRef()
  const $indicator1 = useRef()
  const $indicator2 = useRef()
  const $items = useRef(items.map(createRef))
  const [active, setActive] = useState(0)

  const animate = () => {
    const menuOffset = $root.current.getBoundingClientRect()
    const activeItem = $items.current[active].current
    const { width, height, top, left } = activeItem.getBoundingClientRect()

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: 'elastic.out(.7, .7)',
      duration: .8
    }

    gsap.to($indicator1.current, {
      ...settings,
    })

    gsap.to($indicator2.current, {
      ...settings,
      duration: 1
    })
  }

  useEffect(() => {
    animate()
    window.addEventListener('resize', animate)

    return (() => {
      window.removeEventListener('resize', animate)
    })
  }, [active])

  return (
    <Block>
      <Logo>
        <img src="/arts/ident.png" alt="" />
        <img src="/arts/identLogo.png" alt="" />
      </Logo>
      <Menu
        ref={$root}
      >
        {items.map((item, index) => (

          <Item
            key={item.name}
            ref={$items.current[index]}
            className={`item ${active === index ? 'active' : ''}`}
            onMouseEnter={() => {
              setActive(index)
            }}
            href={item.href}
          >
            <p>
              {item.name}
            </p>
          </Item>
        ))}
        <Indicator
          ref={$indicator1}
          className="indicator"
        />
        <Indicator
          ref={$indicator2}
          className="indicator"
        />
      </Menu>
    </Block>
  )
}
