import React from 'react'
import { DetailText, Dot, InLineContainer } from './Styled'
export const DetailCard = props => {
  return (
    <InLineContainer>
      <Dot>.</Dot>
      <DetailText weight={props.weight1}>
        {props.text1}
        <DetailText weight={props.weight2}>{props.text2}</DetailText>
      </DetailText>
    </InLineContainer>
  )
}
