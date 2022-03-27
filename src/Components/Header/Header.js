import React from 'react'
import {
  HeaderContainer,
  NumbersContainers,
  OrangeBar,
  WhiteBar,
} from './Styled'
import { InLineContainer } from '../HorizontalCards/Styled'
import { CustomImage, TittleText, ImgContainer } from '../../Screens/Styled'
export const Header = props => {
  return (
    <HeaderContainer>
      <NumbersContainers>
        <CustomImage
          width={'30px'}
          height={'30px'}
          marginTop={'5%'}
          source={
            props.isSecond
              ? require(`../../assets/PaqueteAtomic/Group4015.png`)
              : null
          }
        />
        <CustomImage
          width={'30px'}
          height={'30px'}
          marginTop={'5%'}
          source={
            props.isSecond
              ? require(`../../assets/PaqueteAtomic/Group4019.png`)
              : null
          }
        />
      </NumbersContainers>
      <WhiteBar />
      <OrangeBar />
      <InLineContainer
        marginTop={'10%'}
        justify={'space-between'}
        width={'90%'}>
        <ImgContainer>
          <CustomImage
            width={'50px'}
            height={'50px'}
            marginTop={'5%'}
            source={
              props.isSecond
                ? require('../../assets/PaqueteAtomic/Group4015.png')
                : null
            }
          />
        </ImgContainer>

        <TittleText align={'left'} weight={'800'} marginTop={'-2%'}>
          {props.Text1}
          <TittleText color={'#FA4D09'} weight={'800'}>
            {props.Text2}
          </TittleText>
        </TittleText>
      </InLineContainer>
    </HeaderContainer>
  )
}
