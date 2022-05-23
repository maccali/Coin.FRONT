import { Block, GeneralInformationBlock } from './styles';
import GeneralInformation from "../../cards/GeneralInformation"


export default function GeneralInfo() {
  return (
    <>
      <Block>
        <div>
          <h3>Informações Gerais</h3>
        </div>
        <GeneralInformationBlock>
          <GeneralInformation image='/icons/person.png' number={26} percentNumber={30} legend="Pacientes ativos" />
          <GeneralInformation image='/icons/tube.png' number={306} percentNumber={-10} legend="Testes realizados" />
          <GeneralInformation image='/icons/tubeGreen.png' number={139} percentNumber={30} legend="Testes concluídos" />
          <GeneralInformation image='/icons/tubeRed.png' number={11} percentNumber={-3} legend="Testes cancelados" />
        </GeneralInformationBlock>

      </Block >
    </>
  )
}