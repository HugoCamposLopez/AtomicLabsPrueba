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
