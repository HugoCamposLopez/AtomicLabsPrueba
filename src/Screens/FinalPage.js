import React from 'react'
import { ImageBackground } from 'react-native'
import { Container, CustomImage } from './Styled'
import {
  CustomSubtitle,
  Footer,
  Logo,
  TusDatosHanSidoTitle,
} from '../Components'

export const FinalPage = () => {
  return (
    <Container>
      <ImageBackground
        source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
        resizeMode="cover"
        style={{ flex: 1, marginTop: -40 }}>
        <Logo />
        <TusDatosHanSidoTitle />
        <CustomSubtitle
          text1={
            'En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs.'
          }
          text2={'Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!'}
        />
        <CustomImage
          height={'420px'}
          width={'375px'}
          source={require('../assets/PaqueteAtomic/Group4039.png')}
        />
      </ImageBackground>
      <Footer />
    </Container>
  )
}
