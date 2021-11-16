const darkModeClass = 'dark-mode'
const body = document.getElementsByTagName('body')[0]
const h1 = document.getElementById('page-title')
const button = document.getElementById('mode-selector')
const footer = document.getElementsByTagName('footer')[0]

function changeMode() {
  changeClasses()
  changeText()
}

function changeClasses() {
  body.classList.toggle(darkModeClass)
  h1.classList.toggle(darkModeClass)
  button.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
}

function changeText() {
  const lightMode = 'Light Mode'
  const darkMode = 'Dark Mode'
  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode
    h1.innerHTML = darkMode + " ON"
  } else {
    button.innerHTML = darkMode
    h1.innerHTML = lightMode + " ON"
  }
}

button.addEventListener('click', changeMode)