import React from 'react'
import { InputComponentContainer, TextInput } from './Styled'
import { CustomImage, TittleText } from '../../Screens/Styled'
export const Input = props => {
  return (
    <InputComponentContainer marginTop={props.marginTop}>
      <TittleText align={'left'} size={'18px'} weight={'400'}>
        {props.InputText}
      </TittleText>
      <TextInput
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        border={props.border}
      />
      <CustomImage
        width={'15px'}
        height={'20px'}
        marginTop={'-10%'}
        marginLeft={'90%'}
        source={require('../../assets/PaqueteAtomic/ic_lock_24.png')}
      />
    </InputComponentContainer>
  )
}
