import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { CustomImage } from '../../Screens/Styled'
export const TwitterLogo = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(
          'https://twitter.com/AtomicMexico?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        )
      }}>
      <CustomImage
        marginTop={'25%'}
        height={'25px'}
        width={'30px'}
        source={require('../../assets/PaqueteAtomic/twitter.png')}
      />
    </TouchableOpacity>
  )
}
