import { Card, Info } from './styles';
import { CardBack } from './../GeneralInformation/styles';


interface ImportantNewsCardInterfece {
  image: string
  name: string
  status: "COMPLETE" | "CANCELED"
  data: string
  type: string
}

export default function ImportantNewsCard({
  image,
  data,
  name,
  status,
  type
}: ImportantNewsCardInterfece) {

  return (
    <div>
      <Card>
        <div className='image'>
          <img src={image} alt={name} />
        </div>
        <Info>
          <p className='textTwo'>Paciente</p>
          <p className='textOne'>{name}</p>
          {status === "CANCELED" && <div className='textThree red'>
            CANCELOU O TESTE:
            <b>{type}</b>
          </div>}
          {status === "COMPLETE" && <div className='textThree green'>
            COMPLETOU O TESTE:
            <b>{type}</b>
          </div>}
          <p className='textTwo'>Realizado em: {data}</p>
        </Info>
      </Card >
    </div>
  )
}