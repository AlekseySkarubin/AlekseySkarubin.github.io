const consoleLog = document.querySelector('#consoleLog');
const alertclick = document.querySelector('#alert');
const promptclick = document.querySelector('#prompt');
consoleLog.addEventListener('click', () => {
    alert('Console.log cлужит для вывода информации в консоль');
})
alertclick.addEventListener('click', () => {
    alert('Alert cлужит для вывода информации в консоль');
})
promptclick.addEventListener('click', () => {
   prompt('Prompt - это функция ввода информации в консоль. Введите что-нибудь');
})