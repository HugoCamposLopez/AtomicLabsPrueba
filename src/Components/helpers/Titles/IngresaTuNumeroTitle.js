import React from 'react'
import { TitleContainerLeft, TittleText } from '../../../Screens/Styled'
const string =
  'Necesitamos validar tu número para continuar. \n\nIngresa tu numero a 10 digitos y te enviaremos un código SMS'
export const IngresaTuNumeroTitle = () => {
  return (
    <TitleContainerLeft>
      <TittleText
        size={'18px'}
        weight={'400'}
        marginTop={'-50%'}
        align={'left'}>
        {string}
      </TittleText>
    </TitleContainerLeft>
  )
}
