import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { FooterContainer } from './Styled'
import { CustomImage, TittleText } from '../../Screens/Styled'
import { InLineContainer } from '../HorizontalCards/Styled'

export const Footer = () => {
  return (
    <FooterContainer>
      <TittleText
        size={'14px'}
        marginBottom={'5%'}
        weight={'400'}
        color={'#9f9f9f'}>
        Ⓒ 2020 AtomicLabs. Todos los derechos reservados
      </TittleText>
      <TittleText
        underline={'underline'}
        size={'14px'}
        weight={'400'}
        marginBottom={'5%'}
        color={'#9f9f9f'}>
        Aviso de privacidad
      </TittleText>
      <InLineContainer width={'20%'} justify={'space-between'}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://www.linkedin.com/company/atomic-mexico/')
          }}>
          <CustomImage
            height={'30px'}
            width={'30px'}
            source={require('../../assets/PaqueteAtomic/linkedin.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://twitter.com/AtomicMexico?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
            )
          }}>
          <CustomImage
            marginTop={'25%'}
            height={'25px'}
            width={'30px'}
            source={require('../../assets/PaqueteAtomic/twitter.png')}
          />
        </TouchableOpacity>
      </InLineContainer>
    </FooterContainer>
  )
}
