import { Card } from './styles';


interface HistoryServiceCardInterfece {
  image: string
  name: string
  testType: string
  data: string
}

export default function HistoryService({
  image,
  data,
  name,
  testType
}: HistoryServiceCardInterfece) {

  return (
    <>
      <Card>
        <div className='images'>
          <div className='front' >
            <img src={image} alt={name} />
          </div>
          <div className='back'>
            <img src="icons/hsBack.png" alt={name} />
          </div>
        </div>
        <div className='text'>
          <p className='textOne'>{name}</p>
          <p className='textTwo'>Teste Realizado</p>
          <p className='textThree'>{testType}</p>
          <p className='textTwo'>Realizado em:</p>
          <p className='textThree'>{data}</p>
        </div>
      </Card >
    </>
  )
}