export const submit = () => {
  // inputList取得・配列準備
  const inputList = document.querySelectorAll('.js-input')
  const data = []

  // 配列にvalueを注入
  for (let i = 0; inputList.length > i; i++) {
    if (inputList[i].type === 'text') {
      data.push(inputList[i].value)
    } else if (inputList[i].selectedIndex) {
      data.push(inputList[i].value)
    } else if (inputList[i].type === 'checkbox') {
      if (inputList[i].checked || inputList[i].checked === !undefined) {
        data.push(inputList[i].value)
      }
    }
  }

  // 配列を結合
  const reText = data.join('')

  // 投入側のDOMを取得
  const $submitText = document.querySelector('.js-addtext')

  // 取得したDOMの中身を削除・class追加・投入
  $submitText.innerHTML = ''
  $submitText.classList.add('is-active')
  $submitText.insertAdjacentHTML('afterbegin', reText)
}
