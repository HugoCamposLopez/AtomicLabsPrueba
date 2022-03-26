import { TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonContainer, ButtonText } from './Styled'

export const CustomButton = ({
  onPress,
  Text,
  Color,
  bgColor,
  radius,
  width,
  height,
  marginTop,
  disabled,
  opacity
}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <ButtonContainer
        bgColor={bgColor}
        radius={radius}
        width={width}
        height={height}
        marginTop={marginTop}
        opacity={opacity}
        >
        <ButtonText color={Color}>{Text}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  )
}
