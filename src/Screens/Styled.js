import styled from 'styled-components'

export const Container = styled.ScrollView`
  flex: 1;
`

export const TitleContainer = styled.View`
  align-items: center;
  padding: 20px 0px 0px 0px;
  margin-top: ${props => props.marginTop || '0px'};
`
export const TitleContainerLeft = styled.View`
width: 90%
margin-left: auto;
margin-right: auto
height: auto
`

export const TittleText = styled.Text`
color: ${props => props.color || 'white'};
font-size: ${props => props.size || '30px'};
font-weight: ${props => props.weight || 'bold'};
text-align: ${props => props.align || 'center'};
margin-top: ${props => props.marginTop || '0%'};
margin-bottom: ${props => props.marginBottom || '0%'}
width: ${props => props.width || 'auto'}
text-decoration: ${props => props.underline || 'none'}
`

export const CustomImage = styled.Image`
  margin-top: ${props => props.marginTop || '10%'};
  height: ${props => props.height || '300px'};
  width: ${props => props.width || '350px'};
  margin-left: ${props => props.marginLeft || 'auto'};
  margin-right: auto;
  border-radius: ${props => props.radius || '0px'};
`
export const ImgContainer = styled.View`
  padding: 0% 10% 3% 3%;
`