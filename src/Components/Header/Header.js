import React from 'react'
import {
  HeaderContainer,
  NumbersContainers,
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
            props.isFirst
              ? require('../../assets/PaqueteAtomic/Group4015.png')
              : require('../../assets/PaqueteAtomic/checkmark.png')
          }
        />
        <CustomImage
          width={'30px'}
          height={'30px'}
          marginTop={'5%'}
          source={
            props.isFirst
              ? require('../../assets/PaqueteAtomic/Group4019.png')
              : require('../../assets/PaqueteAtomic/Group4020.png')
          }
        />
      </NumbersContainers>
      <CustomImage
        width={'100%'}
        height={'10px'}
        radius={'50px'}
        source={
          props.isFirst
            ? require('../../assets/PaqueteAtomic/bar1.png')
            : require('../../assets/PaqueteAtomic/bar2.png')
        }
      />
      <InLineContainer marginTop={'10%'} width={'90%'}>
        <ImgContainer>
          <CustomImage
            width={'50px'}
            height={'50px'}
            marginTop={'5%'}
            source={
              props.isSecond
                ? require('../../assets/PaqueteAtomic/Group4015.png')
                : require('../../assets/PaqueteAtomic/Group4023.png')
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
