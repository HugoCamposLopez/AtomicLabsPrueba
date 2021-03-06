import React from 'react'
import { Container, CustomImage } from './Styled'
import { ImageBackground } from 'react-native'
import {
  KnowMore,
  CustomButton,
  HorizontalCards,
  Logo,
  ProcessImage,
  WorkerCards,
  Footer,
  DesarrollaPotencialTitle,
  BrazoDerechoTitle,
  TeEncataraTitle,
  NuestroEquipoTitle,
} from '../Components/index'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const MainScreen = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <ImageBackground
        source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
        resizeMode="cover"
        style={{ flex: 1, marginTop: -40 }}>
        <SafeAreaView>
          <Logo />
          <DesarrollaPotencialTitle />
          <KnowMore />
          <CustomImage
            height={'320px'}
            width={'370px'}
            source={require('../assets/PaqueteAtomic/Group4032.png')}
          />
          <CustomButton
            Text={'¡Quiero ser parte!'}
            onPress={() => navigation.navigate('WantToKnowYou')}
          />
          <BrazoDerechoTitle />
          <HorizontalCards />
          <TeEncataraTitle />
          <ProcessImage />
          <CustomButton
            Text={'¡Quiero ser parte!'}
            onPress={() => navigation.navigate('WantToKnowYou')}
          />
          <NuestroEquipoTitle />
          <WorkerCards />
        </SafeAreaView>
      </ImageBackground>
      <Footer />
    </Container>
  )
}
