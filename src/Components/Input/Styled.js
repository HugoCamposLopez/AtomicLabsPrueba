import styled from 'styled-components'

export const InputComponentContainer = styled.View`
width: 90%
margin-left: auto;
margin-right: auto;
margin-top: ${props => props.marginTop || '5%'};
margin-bottom: 5%
`
export const TextInput = styled.TextInput`
  background-color: white;
  color: black;
  height: 45px;
  border-radius: 5px;
  margin-top: 3%;
  font-size: 18px;
  border: ${props => props.border || 'white'};
  border-width: 2px;
`
