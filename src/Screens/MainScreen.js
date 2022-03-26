import React from 'react'
import { Container, TitleContainer, TittleText, CustomImage } from './Styled'
import { ImageBackground } from 'react-native'
import { KnowMore, CustomButton, HorizontalCards, Logo, ProcessImage } from '../Components/index'
export const MainScreen = () => {
  return (
    <Container >
      <ImageBackground source={require('../assets/PaqueteAtomic/MaskGroup1.png')} resizeMode="cover" style={{ flex: 1, marginTop: -30 }}>
      <Logo/>
      <TitleContainer>
        <TittleText size={'50px'} >Desarrolla todo</TittleText>
        <TittleText color={'#FA4D09'} size={'50px'}>tu POTENCIAL</TittleText>
        <TittleText size={'42px'}>dentro del equipo</TittleText>
        <TittleText color={'#FA4D09'} size={'60px'}>ATOMIC<TittleText size={'60px'}>LABS</TittleText>
        </TittleText>
      </TitleContainer>
      <KnowMore />
      <CustomImage
        height={'320px'}
        width={'370px'}
        source={require('../assets/PaqueteAtomic/Group4032.png')}
      />
      <CustomButton Text={'¡Quiero ser parte!'}/>
      <TitleContainer>
      <TittleText size={'35px'}>SOMOS EL BRAZO DERECHO
      <TittleText color={'#FA4D09'} size={'35px'}> DE LA TECNOLOGÍA</TittleText>
      </TittleText>
      </TitleContainer>
      <HorizontalCards />
      <TitleContainer>
        <TittleText size={'35px'}>¡TE ENCATARÁ</TittleText>
        <TittleText color={'#FA4D09'} size={'35px'}>TRABAJAR CON NOSOTROS!</TittleText>
      </TitleContainer>
      <ProcessImage />
      <CustomButton Text={'¡Quiero ser parte!'}/>
      <TitleContainer>
        <TittleText size={'35px'}>NUESTRO <TittleText color={'#FA4D09'} size={'35px'}>EQUIPO</TittleText></TittleText>

      </TitleContainer>
      </ImageBackground>

    </Container>
  )
}
