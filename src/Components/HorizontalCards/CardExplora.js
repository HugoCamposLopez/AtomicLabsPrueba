import React from 'react'
import { Card, ImageContainer, DotsContainer } from './Styled'
import { CustomImage, TittleText } from '../../Screens/Styled'
import { DetailCard } from './DetailCard'

export const CardExplora = () => {
  return (
<Card>
        <ImageContainer>
          <CustomImage
            height={'200px'}
            width={'200px'}
            source={require('../../assets/PaqueteAtomic/Group4035.png')}
          />
        </ImageContainer>
        <CustomImage
          height={'10px'}
          width={'40%'}
          source={require('../../assets/PaqueteAtomic/Lines.png')}
        />
        <TittleText marginTop={'3%'} marginBottom={'5%'}>
          EXPLORA
        </TittleText>
        <DetailCard
          weight2={'700'}
          text1={'Innovacion '}
          text2={'y creación tecnológica'}
        />
        <DetailCard weight1={'700'} text1={'UI / UX'} />
        <DetailCard weight1={'700'} text1={'Innovación'} />
        <DotsContainer marginTop={'20%'}>
          <CustomImage
            height={'20px'}
            width={'100px'}
            source={require('../../assets/PaqueteAtomic/dots2.png')}
          />
        </DotsContainer>
      </Card>
  )
}
