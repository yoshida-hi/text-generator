import { submit } from './component/_submit'
import { checkbox } from './component/_checkbox'

// submit event
const $submit = document.querySelector('.js-submit')
$submit.addEventListener('click', () => {
  submit()
})

// checkbox event
const $checkboxList = document.querySelectorAll('input.js-input-checkbox')
$checkboxList.forEach(() => {
  document.addEventListener('change', checkbox)
})
