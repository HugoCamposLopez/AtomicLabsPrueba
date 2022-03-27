import React from 'react'
import { TitleContainerLeft, TittleText } from '../../Screens/Styled'

export const CustomSubtitle = props => {
  return (
    <TitleContainerLeft>
      <TittleText size={'18px'} align={'left'} weight={'400'} marginTop={'5%'}>
        {props.text1}
      </TittleText>
      <TittleText size={'18px'} align={'left'} weight={'400'} marginTop={'5%'}>
        {props.text2}
      </TittleText>
    </TitleContainerLeft>
  )
}
