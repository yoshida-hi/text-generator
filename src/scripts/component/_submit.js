export const submit = () => {
  const inputList = document.querySelectorAll('.js-input')
  const data = []

  inputList.forEach(function(val) {
    data.push(val.value)
  })

  const reText = data.join('')

  const $submitText = document.querySelector('.js-addtext')

  $submitText.innerHTML = ''
  $submitText.classList.add('is-active')
  $submitText.insertAdjacentHTML('afterbegin', reText)
}
