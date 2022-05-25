import { Block, HistoryServiceBlock, Title } from './styles';
import ServiceHistory from "../../cards/ServiceHistory"
import Call from "../../buttons/Call"

import Flickity from 'react-flickity-component'

export default function HistoryService() {
  const flickityOptions = {
    initialIndex: 0,
    cellAlign: 'left',
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false
  }

  return (
    <>
      <Block>
        <div className='header'>
          <Title>Histórico de atendimentos</Title>
          <Call name='VER TODOS' />
        </div>
        <HistoryServiceBlock >
          <Flickity
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            <ServiceHistory data='20/10/2023' image='/icons/hsb.png' name='Renata Augusto Ferreira' testType='TDAH CAB ADHD' />
            <ServiceHistory data='20/09/2023' image='/icons/hsc.png' name='Renata Augusto Ferreira' testType='Autismo' />
            <ServiceHistory data='20/10/2023' image='/icons/hsb.png' name='Renata Augusto Ferreira' testType='TDAH CAB ADHD' />
            <ServiceHistory data='20/09/2023' image='/icons/hsc.png' name='Renata Augusto Ferreira' testType='Autismo' />
          </Flickity>
        </HistoryServiceBlock>
      </Block >
    </>
  )
}