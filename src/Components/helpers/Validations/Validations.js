import React from 'react'
import { TittleText } from '../../../Screens/Styled'
export function nameValidate(name) {
  let color = ''
  if (name.length == 0) {
    color = 'white'
  } else {
    name.length >= 1 && name.length < 4 ? (color = 'red') : (color = 'green')
  }
  return color
}

export function buttonValidate(name, lastName) {
  let isDisabled = true
  if (name.length > 3 && lastName.length > 3) {
    isDisabled = false
  }
  return isDisabled
}

export function renderWarnings(name, type) {
  let render = null
  name.length >= 0 && name.length < 4
    ? (render = (
        <TittleText size={'12px'} color={'red'} underline={'underline'}>
          El {type} debe tener mas de 3 caracteres
        </TittleText>
      ))
    : (render = (
        <TittleText size={'12px'} color={'green'} underline={'underline'}>
          {type} válido
        </TittleText>
      ))
  return render
}
