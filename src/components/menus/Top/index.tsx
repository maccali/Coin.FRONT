import { Block, Search, ButtonIcon, ButtonProfile } from './styles';

export default function MenuTop() {
  return (
    <>
      <Block>
        <div className='search'>
          <Search>
            <input type="text" placeholder='Busca...' />
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
            <img className='signal' src="/icons/redDot.png" alt="" />
          </ButtonIcon>
        </div>
        <div className='buttonIconProfile'>
          <ButtonProfile className='dropdown'>

            <div>
              <span>Olá,</span>
              <b>Felipe</b>
              <img src="/icons/felipe.png" alt="" />
            </div>

            <div className="dropdown-content">
              <a><p> Minha conta</p></a>
              <a><p>Configurações</p></a>
              <a> <img src="/icons/exit.png" alt="" /> <p>Sair</p></a>
            </div>
          </ButtonProfile>
          {/* <div className="dropdown-content">
            <p>Hello World!</p>
          </div> */}
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