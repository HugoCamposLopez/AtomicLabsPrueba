import React from 'react'
import { TittleText, TitleContainerLeft } from '../../../Screens/Styled'

export function nameValidate (name) {
  let color = ''
  const regx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
  if (name.length == 0) {
    color = 'white'
  } else {
    name.length > 3 && regx.test(name) ? (color = 'green') : (color = 'red')
  }
  return color
}

export function buttonValidate (name, lastName) {
  let isDisabled = true
  const regx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
  if (name.length >= 4 && lastName.length >= 4 && regx.test(name)) {
    isDisabled = false
  }
  return isDisabled
}

export function renderWarnings (name, type, maxValue, reg) {
  let render = null
  const regx = reg
  if (name.length == 0) {
    render = (
      <TitleContainerLeft>
        <TittleText size={'12px'} color={'red'} underline={'underline'}>
          El {type} debe tener mas de {maxValue - 1} caracteres y solamente
          letras o numeros según sea el caso.
        </TittleText>
      </TitleContainerLeft>
    )
  } else if (name.length >= maxValue && regx.test(name)) {
    render = (
      <TittleText size={'12px'} color={'green'} underline={'underline'}>
        {type} válido
      </TittleText>
    )
  } else {
    render = (
      <TitleContainerLeft>
        <TittleText size={'12px'} color={'red'} underline={'underline'}>
          El {type} debe tener mas de {maxValue - 1} caracteres y solamente
          letras o numeros según sea el caso.
        </TittleText>
      </TitleContainerLeft>
    )
  }

  return render
}

export function validatePhone (cellphone) {
  const regx = /^[0-9]*$/
  let isDisabled = null
  cellphone.length >= 10 && regx.test(cellphone)
    ? (isDisabled = false)
    : (isDisabled = true)
  return isDisabled
}

export function validateLengthPhone (cellphone) {
  let color = ''
  const regx = /^[0-9]*$/
  console.log(regx.test(cellphone))
  if (cellphone.length == 0) {
    color = 'white'
  } else {
    cellphone.length > 9 && regx.test(cellphone)
      ? (color = 'green')
      : (color = 'red')
  }
  return color
}
