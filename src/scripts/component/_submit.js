export const submit = () => {
  // inputList取得・配列準備
  const inputList = document.querySelectorAll('.js-input')
  //const checkboxList = document.querySelectorAll('.js-input-checkbox')
  const data = []

  //console.log(checkboxList)

  // 配列にvalueを注入
  inputList.forEach(function(val) {
    data.push(val.value)
  })

  // 配列からカンマを削除
  const reText = data.join('')

  // 投入側のDOMを取得
  const $submitText = document.querySelector('.js-addtext')

  // 取得したDOMの中身を削除・class追加・投入
  $submitText.innerHTML = ''
  $submitText.classList.add('is-active')
  $submitText.insertAdjacentHTML('afterbegin', reText)
}
