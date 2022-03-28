/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import { Container, CustomImage } from './Styled'
import { ImageBackground } from 'react-native'
import {
  CustomButton,
  Logo,
  Footer,
  Header,
  Input,
  CustomSubtitle,
} from '../Components/index'
import { useNavigation } from '@react-navigation/native'
import {
  nameValidate,
  buttonValidate,
  renderWarnings,
} from '../Components/helpers/Validations/Validations'
import { SafeAreaView } from 'react-native-safe-area-context'
export const WantToKnowYou = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const navigation = useNavigation()
  const regx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
  return (
    <Container>
      <ImageBackground
        source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
        resizeMode="cover"
        style={{ flex: 1, marginTop: -40 }}>
        <SafeAreaView>
          <Logo />
          <Header isFirst={true} Text1={'TE QUEREMOS '} Text2={'CONOCER'} />
          <CustomSubtitle
            text1={
              'Queremos saber que eres tú por favor ingresa los siguientes datos:'
            }
          />
          <Input
            InputText={'Nombre (s)'}
            onChangeText={value => setName(value)}
            border={nameValidate(name)}
          />
          {renderWarnings(name, 'Nombre', 4, regx)}
          <Input
            InputText={'Apellidos'}
            onChangeText={value => setLastName(value)}
            border={nameValidate(lastName)}
          />
          {renderWarnings(lastName, 'Apellido', 4, regx)}
          <CustomButton
            Color={'white'}
            Text={'Enviar'}
            bgColor={'#FA4D09'}
            radius={'30px'}
            width={'230px'}
            height={'50px'}
            marginTop={'15%'}
            opacity={buttonValidate(name, lastName) ? '0.5' : '1'}
            disabled={buttonValidate(name, lastName)}
            onPress={() => navigation.navigate('Phone')}
          />
          <CustomImage
            height={'550px'}
            width={'100%'}
            source={require('../assets/PaqueteAtomic/Group4033.png')}
          />
        </SafeAreaView>
      </ImageBackground>
      <Footer />
    </Container>
  )
}
