import { Card } from './styles';

import Call from "../../buttons/Call"


interface MoreTestCardInterfece {
  image: string
  type: string
  number: number
}

export default function MoreTestService({
  image,
  number,
  type
}: MoreTestCardInterfece) {

  return (
    <>
      <Card>
        <div className='image'>
          <img src={image} alt="" />
        </div>
        <h5>{type}</h5>
        <p>Licenças Dsiponíveis</p>
        <div className='footer'>
          <b>{number}</b>
          <Call name='COMPRAR MAIS ' />
        </div>
      </Card >
    </>
  )
}