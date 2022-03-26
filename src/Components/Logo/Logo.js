import React from 'react'
import { CustomImage } from '../../Screens/Styled'

export const Logo = () => {
  return (
    <CustomImage
      height={'80px'}
      width={'200px'}
      source={require('../../assets/PaqueteAtomic/Logo.png')}
    />
  )
}
