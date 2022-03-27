import React from 'react'
import { ContainerCards } from './Styled'
import { CardImagina } from './CardImagina'
import { CardExplora } from './CardExplora'
import { CardConquista } from './CardConquista'

export const HorizontalCards = () => {
  return (
    <ContainerCards horizontal={true}>
      <CardImagina />
      <CardExplora />
      <CardConquista />
    </ContainerCards>
  )
}
