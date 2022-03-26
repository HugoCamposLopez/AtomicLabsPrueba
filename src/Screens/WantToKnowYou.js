/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import { Container, CustomImage, TitleContainer, TittleText } from './Styled'
import { ImageBackground } from 'react-native'
import { CustomButton, Logo, Footer, Header, Input } from '../Components/index'
import { useNavigation } from '@react-navigation/native'
import {
  nameValidate,
  buttonValidate,
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
        <TitleContainer marginTop={'-50%'}>
          <TittleText align={'left'} size={'20px'} weight={'300'} width={'90%'}>
            Queremos saber que eres tú, por favor ingresa los siguientes datos:
          </TittleText>
        </TitleContainer>
        <Input
          InputText={'Nombre (s)'}
          onChangeText={value => setName(value)}
          border={nameValidate(name)}
        />
        {name.length >= 0 && name.length < 4 ? (
          <TittleText size={'12px'} color={'red'} underline={'underline'}>
            El nombre debe tener mas de 3 caracteres
          </TittleText>
        ) : (
          <TittleText size={'12px'} color={'green'} underline={'underline'}>
            Nombre válido
          </TittleText>
        )}
        <Input
          InputText={'Apellidos'}
          onChangeText={value => setLastName(value)}
          border={nameValidate(lastName)}
        />
        {lastName.length >= 0 && lastName.length < 4 ? (
          <TittleText size={'12px'} color={'red'} underline={'underline'}>
            El apellido debe tener mas de 3 caracteres
          </TittleText>
        ) : (
          <TittleText size={'12px'} color={'green'} underline={'underline'}>
            Apellido válido
          </TittleText>
        )}
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
