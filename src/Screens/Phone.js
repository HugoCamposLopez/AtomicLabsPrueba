import React, { useState } from 'react'
import { ImageBackground } from 'react-native'
import { Container, CustomImage } from './Styled'
import {
  Footer,
  Header,
  Logo,
  Input,
  CustomButton,
  CustomSubtitle
} from '../Components'
import { useNavigation } from '@react-navigation/native'
import {
  validateLengthPhone,
  validatePhone,
  renderWarnings
} from '../Components/helpers/Validations/Validations'

export const Phone = () => {
  const navigation = useNavigation()
  const [cellphone, setCellphone] = useState('')
  return (
    <Container>
      <ImageBackground
        source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
        resizeMode="cover"
        style={{ flex: 1, marginTop: -40 }}>
        <Logo />
        <Header Text1={'VALIDA TU \n'} Text2={'CELULAR'} />
        <CustomSubtitle
          text1={'Necesitamos validar tu número para continuar'}
          text2={'Ingresa tu numero a 10 digitos y te enviaremos un código SMS'}
        />
        <Input
          InputText={'Número de celular'}
          onChangeText={value => setCellphone(value)}
          border={validateLengthPhone(cellphone)}
          keyboardType={'number-pad'}
        />
        {renderWarnings(cellphone, 'Numero de ceular', 10, /^[0-9]*$/)}
        <CustomButton
          Color={'white'}
          Text={'Continuar'}
          bgColor={'#FA4D09'}
          radius={'30px'}
          width={'230px'}
          height={'50px'}
          marginTop={'15%'}
          disabled={validatePhone(cellphone)}
          opacity={validatePhone(cellphone) ? '0.5' : '1'}
          onPress={() => navigation.navigate('FinalPage')}
        />
        <CustomImage
          width={'350px'}
          height={'500px'}
          marginTop={'-5%'}
          source={require('../assets/PaqueteAtomic/Group4034.png')}
        />
      </ImageBackground>
      <Footer />
    </Container>
  )
}
