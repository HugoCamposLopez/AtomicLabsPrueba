import React from 'react'
import { Card, ImageContainer, DotsContainer } from './Styled'
import { CustomImage, TittleText } from '../../Screens/Styled'
import { DetailCard } from './DetailCard'

export const CardConquista = () => {
  return (
    <Card>
      <ImageContainer>
        <CustomImage
          height={'200px'}
          width={'200px'}
          source={require('../../assets/PaqueteAtomic/Group4037.png')}
        />
      </ImageContainer>
      <CustomImage
        height={'10px'}
        width={'40%'}
        source={require('../../assets/PaqueteAtomic/Lines.png')}
      />
      <TittleText marginTop={'3%'} marginBottom={'5%'}>
        Conquista
      </TittleText>
      <DetailCard
        weight2={'700'}
        text1={'Desarrollo tecnológico '}
        text2={'y creación tecnológica'}
      />
      <DetailCard weight1={'700'} text1={'Ciberseguridad'} />
      <DetailCard weight1={'700'} text1={'Servicios de la nube'} />
      <DotsContainer marginTop={'20%'}>
        <CustomImage
          height={'20px'}
          width={'100px'}
          source={require('../../assets/PaqueteAtomic/dots3.png')}
        />
      </DotsContainer>
    </Card>
  )
}
