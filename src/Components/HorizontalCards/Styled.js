import styled from 'styled-components'

export const ContainerCards = styled.ScrollView`
  height: 600px;
  width: 100%;
  margin-bottom: -15%;
`
export const Card = styled.View`
  background-color: #fa4d09;
  height: 80%;
  width: 350px;
  border-radius: 10px;
  margin: 20px 20px 0px 20px;
`
export const ImageContainer = styled.View`
  margin-top: -10%;
  margin-bottom: -8%;
`

export const Dot = styled.Text`
font-size: 60px
font-weight: bold;
color: white;
margin: -20% 0% 0% 0%
`

export const DetailText = styled.Text`
  color: white;
  font-size: ${props => props.size || '18px'};
  font-weight: ${props => props.weight || '400'};
`

export const InLineContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  margin-bottom: 3%;
  width: ${props => props.width || '70%'};
  margin-right: auto;
  margin-left: auto;
  margin-top: ${props => props.marginTop || '0px'};
`

export const DotsContainer = styled.View`
  margin-top: ${props => props.marginTop || '0%'};
`
