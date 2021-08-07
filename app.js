const upBtn = document.querySelector ('.up-button')
const downBtn = document.querySelector ('.down-button')
const sidebar = document.querySelector ('.sidebar')
const mainSlide = document.querySelector ('.main-slide')
const slideCount = mainSlide.querySelectorAll ('div').length


sidebar.style.top = `-${ * 100}vh`