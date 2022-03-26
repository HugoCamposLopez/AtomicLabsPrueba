import { TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonContainer, ButtonText } from './Styled'

export const CustomButton = (props) => {
  return (
    <TouchableOpacity>
      <ButtonContainer>
        <ButtonText>{props.Text}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  )
}
