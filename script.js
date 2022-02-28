const perfil = document.querySelector('.perfil')
const social = document.querySelector('.share')
const active = document.querySelector('.active-desktop')
const x = window.matchMedia("(max-width: 1439px)")
let booleano = true

function share() {
    if (x.matches) {
        if (booleano === true) {
            perfil.style.display = 'none'
            social.style.display = 'flex'
            booleano = false
        } else if (booleano === false) {
            social.style.display = 'none'
            perfil.style.display = 'flex'
            booleano = true
        }
    }
}

perfil.addEventListener('click', function () { 
    active.style.display = "flex"
    share()
})
perfil.addEventListener('click', function () { 
    active.style.display = "none"
    share()
})