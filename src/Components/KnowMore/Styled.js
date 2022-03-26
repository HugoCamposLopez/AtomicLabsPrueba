import styled from 'styled-components'

export const ContainerMore = styled.View`
  align-items: center;
  flex: 1;
`

export const TextMore = styled.Text`
  color: white;
  font-size: 18px;
`
export const Arrow = styled.Image.attrs(props => ({
  source: require('../../assets/PaqueteAtomic/Group4013.png'),
}))`
  height: 60px;
  width: 60px;
  margin-top: 5%;
`
