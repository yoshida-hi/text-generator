export const submit = () => {
  const $input = document.querySelector('.js-input')
  const $submitText = document.querySelector('.js-addtext')
  //const data = $input.value
  const data = $input.value

  $submitText.innerHTML = ''
  $submitText.classList.add('is-active')
  $submitText.insertAdjacentHTML('afterbegin', data)
}
