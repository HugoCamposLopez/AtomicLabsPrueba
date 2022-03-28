import React from 'react'
import Workers from '../../assets/Workers.json'
import { WorkerCardContainer, WorkerCard, WorkerImage } from './Styled'
import { TittleText } from '../../Screens/Styled'

export const WorkerCards = () => {
  return (
    <WorkerCardContainer>
      {Workers?.map((element, index) => {
        return (
          <WorkerCard key={index}>
            <WorkerImage source={{ uri: element.photo }} key={index} />
            <TittleText size={'18px'}>{element.name}</TittleText>
            <TittleText size={'16px'} weight={'400'}>
              {element.position}
            </TittleText>
          </WorkerCard>
        )
      })}
    </WorkerCardContainer>
  )
}
