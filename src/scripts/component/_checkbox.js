export const checkbox = (elm) => {
  //const $checkboxList = '.js-checkbox-list'

  // clickした要素 から ULまで
  const eventDOM = elm.target
  const parentDOM = eventDOM.parentNode.parentNode.parentNode

  // checkされている要素
  const checkDOM = elm.target.checked
}
