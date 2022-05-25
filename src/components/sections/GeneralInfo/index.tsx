import { Block, GeneralInformationBlock, Title } from './styles';
import GeneralInformation from "../../cards/GeneralInformation"

import Flickity from 'react-flickity-component'

export default function GeneralInfo() {
  const flickityOptions = {
    initialIndex: 0,
    cellAlign: 'left',
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false
  }



  return (

    <Block>
      <div>
        <Title>Informações Gerais</Title>
      </div>
      <GeneralInformationBlock >

        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          <GeneralInformation image='/icons/person.png' number={26} percentNumber={30} legend="Pacientes ativos" numberGoods={true} tileLegend='Pacientes totais' tilenumber="268" />
          <GeneralInformation image='/icons/tube.png' number={306} percentNumber={-10} legend="Testes realizados" numberGoods={true} tileLegend='Testes totais' tilenumber="1.265" />
          <GeneralInformation image='/icons/tubeGreen.png' imageSignal='/icons/c.png' number={139} percentNumber={30} legend="Testes concluídos" numberGoods={true} tileLegend='Testes totais concluidos' tilenumber="10.550" />
          <GeneralInformation image='/icons/tubeRed.png' imageSignal='/icons/x.png' number={11} percentNumber={-3} numberGoods={false} legend="Testes cancelados" tileLegend='Testes totais Cancelados' tilenumber="618" />
        </Flickity>
      </GeneralInformationBlock>
    </Block >

  )
}