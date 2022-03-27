import styled from 'styled-components'

export const HeaderContainer = styled.View`
  width: 90%;
  align-items: center;
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 200px;
`
export const NumbersContainers = styled.View.attrs(HeaderContainer)`
  display: flex;
  flex-direction: row;
  width: 90%;
`
export const WhiteBar = styled.View`
  margin-top: 3%;
  width: 95%;
  height: 10px;
  background-color: white;
  border-radius: 20px;
`
export const OrangeBar = styled.View`
  position: absolute;
  top: 56px
  left: 2.3%
  width: 33%;
  height: 10px
  background-color: #fa4d09;
  border-radius: 20px;

`
