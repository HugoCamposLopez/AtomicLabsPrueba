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
  QueremosSaberTitle,
} from '../Components/index'
import { useNavigation } from '@react-navigation/native'
import {
  nameValidate,
  buttonValidate,
  renderWarnings,
} from '../Components/helpers/Validations/Validations'

export const WantToKnowYou = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const navigation = useNavigation()
  return (
    <Container>
      <ImageBackground
        source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
        resizeMode="cover"
        style={{ flex: 1, marginTop: -40 }}>
        <Logo />
        <Header isSecond={true} Text1={'TE QUEREMOS '} Text2={'CONOCER'} />
        <QueremosSaberTitle />
        <Input
          InputText={'Nombre (s)'}
          onChangeText={value => setName(value)}
          border={nameValidate(name)}
        />
        {renderWarnings(name, 'nombre')}
        <Input
          InputText={'Apellidos'}
          onChangeText={value => setLastName(value)}
          border={nameValidate(lastName)}
        />
        {renderWarnings(lastName, 'apellido')}
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
      </ImageBackground>
      <Footer />
    </Container>
  )
}
