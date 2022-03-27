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

export function renderWarnings(name, type, minValue, maxValue) {
  let render = null
  name.length >= minValue && name.length < maxValue
    ? (render = (
        <TittleText size={'12px'} color={'red'} underline={'underline'}>
          El {type} debe tener mas de {maxValue - 1} caracteres
        </TittleText>
      ))
    : (render = (
        <TittleText size={'12px'} color={'green'} underline={'underline'}>
          {type} válido
        </TittleText>
      ))
  return render
}

export function validatePhone(cellphone) {
  let isDisabled = null
  cellphone.length >= 10 ? (isDisabled = false) : (isDisabled = true)
  return isDisabled
}

export function validateLengthPhone(cellphone) {
  let color = ''
  if (cellphone.length == 0) {
    color = 'white'
  } else {
    cellphone.length >= 1 && cellphone.length < 10
      ? (color = 'red')
      : (color = 'green')
  }
  return color
}
