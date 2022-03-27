import React from 'react'
import { FooterContainer } from './Styled'
import { TittleText } from '../../Screens/Styled'
import { InLineContainer } from '../HorizontalCards/Styled'
import { TwitterLogo } from './TwitterLogo'
import { LinkedInLogo } from './LinkedInLogo'
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
        <LinkedInLogo />
        <TwitterLogo />
      </InLineContainer>
    </FooterContainer>
  )
}
