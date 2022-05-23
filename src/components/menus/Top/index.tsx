import { Block, Search, ButtonIcon, ButtonProfile } from './styles';


export default function MenuTop() {
  return (
    <>
      <Block>
        <div className='search'>
          <Search>
            <input type="text" />
            <img src="/icons/search.png" alt="" />
          </Search>
        </div>
        <div className='buttonIconConfig'>
          <ButtonIcon >
            <img src="/icons/config.png" alt="" />
          </ButtonIcon>
        </div>
        <div className='buttonIconBell'>
          <ButtonIcon>
            <img src="/icons/bell.png" alt="" />
          </ButtonIcon>
        </div>
        <div className='buttonIconProfile'>
          <ButtonProfile>
            <div>
              <span>Olá,</span>
              <b>Felipe</b>
            </div>
            <img src="/icons/felipe.png" alt="" />
          </ButtonProfile>
        </div>
        <div className='buttonIconApp'>
          <ButtonIcon>
            <img src="/icons/app.png" alt="" />

          </ButtonIcon>
        </div>
      </Block >
    </>
  )
}