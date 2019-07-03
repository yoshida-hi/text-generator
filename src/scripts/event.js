import { submit } from './component/_submit'
import { checkbox } from './component/_checkbox'

const $submit = document.querySelector('.js-submit')
const $checkboxList = document.querySelector('.js-checkbox-list')
//const $checkboxList = document.querySelectorAll('.js-input-checkbox')
//console.log($checkboxList)

$submit.addEventListener('click', () => {
  submit()
})

$checkboxList.addEventListener('change', () => {
  checkbox()
})
