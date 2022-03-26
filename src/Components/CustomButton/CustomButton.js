import { TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonContainer, ButtonText } from './Styled'

export const CustomButton = ({ onPress, Text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer>
        <ButtonText>{Text}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  )
}
