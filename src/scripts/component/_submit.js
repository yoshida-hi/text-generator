export const submit = () => {
  const $input = document.querySelector('.js-input')
  const $submitText = document.querySelector('.js-addtext')
  const data = $input.value

  $submitText.insertAdjacentHTML('afterbegin',data)
}