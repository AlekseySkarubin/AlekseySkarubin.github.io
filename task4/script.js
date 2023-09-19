const userText = prompt('Введите текст для замены исходного текста');
const userTextField = document.querySelector('#Label1');
userTextField.textContent = userText;
console.log('Текст ссылки изменён на', userText);