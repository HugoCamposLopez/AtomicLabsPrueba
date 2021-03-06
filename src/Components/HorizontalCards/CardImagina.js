import React from 'react'
import { Card, ImageContainer, DotsContainer } from './Styled'
import { CustomImage, TittleText } from '../../Screens/Styled'
import { DetailCard } from './DetailCard'

export const CardImagina = () => {
  return (
    <Card>
      <ImageContainer>
        <CustomImage
          height={'200px'}
          width={'200px'}
          source={require('../../assets/PaqueteAtomic/Group4036.png')}
        />
      </ImageContainer>
      <CustomImage
        height={'10px'}
        width={'40%'}
        source={require('../../assets/PaqueteAtomic/Lines.png')}
      />
      <TittleText marginTop={'3%'} marginBottom={'5%'}>
        IMAGINA
      </TittleText>
      <DetailCard weight1={'700'} text1={'Estrategia '} text2={'digital'} />
      <DetailCard weight2={'700'} text1={'Big Data & '} text2={'Analisis'} />
      <DetailCard
        weight1={'700'}
        text1={'Consultoría '}
        text2={'Tecnológica'}
      />
      <DetailCard weight1={'700'} text1={'Reducción '} text2={'de costos TI'} />
      <DotsContainer marginTop={'12.7%'}>
        <CustomImage
          height={'20px'}
          width={'100px'}
          source={require('../../assets/PaqueteAtomic/dots1.png')}
        />
      </DotsContainer>
    </Card>
  )
}
