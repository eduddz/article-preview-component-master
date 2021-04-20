const perfil = document.querySelector('.perfil')
const social = document.querySelector('.share')
const active = document.querySelector('.active-desktop')
let booleano = true
const x = window.matchMedia("(max-width: 1439px)")

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

perfil.addEventListener('mouseover', function () { 
    return active.style.display="flex"
})
perfil.addEventListener('mouseout', function () { 
    return active.style.display="none"
})