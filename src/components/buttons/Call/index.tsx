import { Block } from './styles';


interface CallButtonInterfece {
  name: string
}

export default function CallButton({
  name
}: CallButtonInterfece) {
  return (
    <Block>
      {name}
    </Block >
  )
}