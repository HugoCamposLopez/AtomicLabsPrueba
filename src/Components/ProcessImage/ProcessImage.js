import React from 'react'
import { CustomImage, TittleText } from '../../Screens/Styled'
import { InLineContainer } from '../HorizontalCards/Styled'
export const ProcessImage = () => {
  return (<>
    <CustomImage
    height={'120px'}
    width={'380px'}
    source={require('../../assets/PaqueteAtomic/Group4040.png')}
    />
    <InLineContainer width={'95%'}>

    <TittleText width={'20%'} size={'12px'}>
      Contratación remota
    </TittleText>
    <CustomImage
    marginTop={'2.5%'}
    height={'10px'}
    width={'30px'}
    source={require('../../assets/PaqueteAtomic/arrow.png')}
    />
    <TittleText width={'20%'} size={'12px'}>
      Entrevista con el área de RH
    </TittleText>
    <CustomImage
    marginTop={'2.5%'}
    height={'10px'}
    width={'30px'}
    source={require('../../assets/PaqueteAtomic/arrow.png')}
    />
    <TittleText width={'20%'} size={'12px'}>
      Prueba práctica
    </TittleText>
    <CustomImage
    marginTop={'2.5%'}
    height={'10px'}
    width={'30px'}
    source={require('../../assets/PaqueteAtomic/arrow.png')}
    />
    <TittleText width={'20%'} size={'12px'}>
      Entrevista técnica
    </TittleText>
    </InLineContainer>
    </>
  )
}
