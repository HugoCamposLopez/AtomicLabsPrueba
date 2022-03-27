import React from 'react'
import { TitleContainer, TittleText } from '../../../Screens/Styled'

export const TusDatosHanSidoTitle = () => {
  return (
    <TitleContainer>
      <TittleText weight={'800'}>TUS DATOS</TittleText>
      <TittleText>
        HAN SIDO{' '}
        <TittleText color={'#FA4D09'} weight={'800'}>
          ENVIADOS
        </TittleText>
      </TittleText>
      <TittleText color={'#FA4D09'} weight={'800'}>
        CON ÉXITO
      </TittleText>
    </TitleContainer>
  )
}
