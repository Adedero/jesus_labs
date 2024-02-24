const menu = document.querySelector('#menu-btn')
const close = document.querySelector('#close-btn')
const nav = document.querySelector('nav')
const links = document.querySelectorAll('.navigation a')

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        links.forEach((link) => link.classList.remove('active'))
        link.classList.add('active')   
    })
})

menu.addEventListener('click', () => {
    nav.classList.add('opened')
})

close.addEventListener('click', removeNav)
nav.addEventListener('click', removeNav)

function removeNav() {
    nav.classList.remove('opened')
}
