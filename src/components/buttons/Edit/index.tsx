import { Block } from './styles';


interface CallButtonInterfece {
  img: string
}

export default function CallButton({
  img
}: CallButtonInterfece) {
  return (
    <Block>
      <img src={img} alt="" />
    </Block >
  )
}