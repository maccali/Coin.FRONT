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
          <GeneralInformation image='/icons/person.png' number={26} percentNumber={30} legend="Pacientes ativos" />
          <GeneralInformation image='/icons/tube.png' number={306} percentNumber={-10} legend="Testes realizados" />
          <GeneralInformation image='/icons/tubeGreen.png' number={139} percentNumber={30} legend="Testes concluídos" />
          <GeneralInformation image='/icons/tubeRed.png' number={11} percentNumber={-3} legend="Testes cancelados" />
        </Flickity>
      </GeneralInformationBlock>
    </Block >

  )
}