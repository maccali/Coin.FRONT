import { Card, Info, TestsInfo, Actions } from './styles';

import Call from "../../buttons/Call"
import CallSecondary from "../../buttons/CallSecondary"
import Edit from "../../buttons/Edit"


interface PatientCardInterfece {
  image: string
  name: string
  diagnosis: string
  numberOfRealizedTests: number
  numberOfCanceledTests: number
  numberOfPendingTests: number
}

export default function ImportantNewsCard({
  diagnosis,
  image,
  name,
  numberOfCanceledTests,
  numberOfPendingTests,
  numberOfRealizedTests
}: PatientCardInterfece) {

  return (
    <>
      <Card>
        <div className='image'>
          <img src={image} alt={name} />
        </div>
        <Info>
          <p className='textOne'>{name}</p>
          <p className='textTwo'>Diagnóstico</p>
          <p className='textThree green'>{diagnosis}</p>
        </Info>

        <TestsInfo>
          <div className='green'>
            <h5>{numberOfRealizedTests}</h5>
            <p>Testes realizados</p>
          </div>
          <div className='red'>
            <h5>{numberOfCanceledTests}</h5>
            <p>Testes cancelados</p>
          </div>
          <div className='orange'>
            <h5>{numberOfPendingTests}</h5>
            <p>Testes pendentes</p>
          </div>
        </TestsInfo>
        <div></div>
        <Actions>
          <Edit img='/icons/edit.png' />
          <CallSecondary name='Enviar novo Teste' />
          <Call name='Alterar Cadastro' />
        </Actions>
      </Card >
    </>
  )
}