export const checkbox = () => {
  const checkboxList = document.querySelectorAll('.js-checkbox-list')

  for (let i = 0; checkboxList.length > i; i++) {
    const liList = checkboxList[i].childNodes    
    console.log(liList)
  }
}
