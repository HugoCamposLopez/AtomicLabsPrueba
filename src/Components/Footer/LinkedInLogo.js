import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { CustomImage } from '../../Screens/Styled'

export const LinkedInLogo = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL('https://www.linkedin.com/company/atomic-mexico/')
      }}>
      <CustomImage
        height={'30px'}
        width={'30px'}
        source={require('../../assets/PaqueteAtomic/linkedin.png')}
      />
    </TouchableOpacity>
  )
}
