import styled from 'styled-components'

export const ButtonContainer = styled.View`
  align-self: center;
  width: ${props => props.width || '190px'};
  height: ${props => props.height || '60px'};
  border: 1px solid black;
  border-radius: ${props => props.radius || '20px'};
  background-color: ${props => props.bgColor || 'white'};
  margin-top: ${props => props.marginTop || '5%'};
  margin-bottom: 5%;
  opacity: ${props => props.opacity || '1'};
`

export const ButtonText = styled.Text`
  text-align: center;
  color: ${props => props.color || '#00609c'};
  font-size: 18px;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: bold;
`
