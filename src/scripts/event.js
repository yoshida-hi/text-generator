import { submit } from './component/_submit'

// submit event
const $submit = document.querySelector('.js-submit')
$submit.addEventListener('click', () => {
  submit()
})
