import React from 'react'
import { ContainerMore, TextMore, Arrow } from './Styled'
import { TouchableOpacity } from 'react-native'
export const KnowMore = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ContainerMore>
        <Arrow />
        <TextMore>Quiero saber mas</TextMore>
      </ContainerMore>
    </TouchableOpacity>
  )
}
