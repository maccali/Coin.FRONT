import { Block, MoreTestBlock, Title } from './styles';
import MoreTest from "../../cards/MoreTest"


export default function MoreTestSection() {

  return (
    <>
      <Block>
        <div>
          <Title>Teste Mais Realizado</Title>
        </div>
        <MoreTestBlock >
          <MoreTest image='/icons/hsc.png' number={13} type="Autismo" />
        </MoreTestBlock>
      </Block >
    </>
  )
}