import { Block, ImportantNewsBlock, Title, Rectangle } from './styles';
import ImportantNewsCard from "../../cards/ImportantNewsCard"
import Flickity from 'react-flickity-component'

export default function ImportantNewsService() {
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
          <Title>Atualizações importantes</Title>
        </div>
        <ImportantNewsBlock >
          <Flickity
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            <ImportantNewsCard
              data='20/10/2023'
              image='/icons/renata.png'
              status='COMPLETE'
              name='Renata Augusto Ferreira'
              type='TDAH CAB ADHD'
            />

            <ImportantNewsCard
              data='20/10/2023'
              image='/icons/carlos.png'
              status='CANCELED'
              name='Carlos Nobrega Baccio'
              type='TDAH CAB ADHD'
            />

            <ImportantNewsCard
              data='20/10/2023'
              image='/icons/suelton.png'
              status='CANCELED'
              name='Suelton A. Mellis'
              type='TDAH CAB ADHD'
            />
          </Flickity>
          <Rectangle />
        </ImportantNewsBlock>
      </Block >
    </>
  )
}