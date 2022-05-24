import { Block, ImportantNewsBlock, ImportantNewsBlockBack, Title, Search, Ellipses } from './styles';
import Patient from "../../cards/Patient"

export default function ImportantNewsService() {

  return (
    <>
      <Block>
        <div className='header'>
          <Title>Todos os pacientes</Title>
        </div>
        <ImportantNewsBlockBack>
          <div className='header'>
            <div>
              <p>Lista de Pacientes(36)</p>
            </div>
            <div>

              <Search>
                <div>
                  <input type="text" />
                  <img src="/icons/search.png" alt="" />
                </div>
              </Search>
            </div>
            <div>
              <Ellipses>
                <div></div>
                <div></div>
                <div></div>
              </ Ellipses>
            </div>
          </div>
          <ImportantNewsBlock >
            <Patient
              image='icons/renata2.png'
              name='Renata Augusto Ferreira'
              diagnosis='TDAH CAB ADHD, Autismo'
              numberOfCanceledTests={1}
              numberOfPendingTests={1}
              numberOfRealizedTests={3}
            />

            <Patient
              image='icons/leandro.png'
              name='Leandro Motta Braga'
              diagnosis='TDAH CAB ADHD, Autismo'
              numberOfCanceledTests={0}
              numberOfPendingTests={50}
              numberOfRealizedTests={6}
            />

          </ImportantNewsBlock>
        </ImportantNewsBlockBack >
      </Block >
    </>
  )
}