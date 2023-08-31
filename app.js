let perimetre = document.getElementById('perimetre')
let aire = document.getElementById('aire')
let diametre = document.getElementById('diametre')
let rayon = document.getElementById('rayon')
let calcul = document.getElementById('calcul')
let btnReset = document.getElementById('btnReset')
let modal = document.getElementById('modal')
let Tau = Math.PI * 2
let Numbers = {
    rayon: rayon.value,
    diametre: diametre.value,
    perimetre: perimetre.value,
    aire: aire.value
}

rayon.onchange = function () {
    let number = Number(rayon.value)
    
    if (number <= 0) {
        rayon.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        perimetre.value = (Tau * number).toFixed(3)
        aire.value = (Math.PI * number * number).toFixed(3)
        diametre.value = (number * 2).toFixed(3)

        resetEquation()
        updateNumbers()
        dangerToLink()
        rayonE()
    }
}

perimetre.onchange = function () {
    let number = Number(perimetre.value)

    if (number <= 0) {
        modal.classList.add("is-active")
        perimetre.classList.replace("is-link", "is-danger")
    } else {
        rayon.value = (number / Tau).toFixed(3)
        let newRayon = (Number(rayon.value)).toFixed(3)
        diametre.value = (number / Math.PI).toFixed(3)
        aire.value = (Math.PI * newRayon * newRayon).toFixed(3)

        resetEquation()
        updateNumbers()
        dangerToLink()
        perimetreE()
    }
}

aire.onchange = function () {
    let number = Number(aire.value)

    if (number <= 0) {
        modal.classList.add("is-active")
        aire.classList.replace("is-link", "is-danger")
    } else {
        rayon.value = (Math.sqrt(number / Math.PI)).toFixed(3)
        let newRayon = (Number(rayon.value)).toFixed(3)
        perimetre.value = (Tau * newRayon).toFixed(3)
        diametre.value = (newRayon * 2).toFixed(3)

        resetEquation()
        updateNumbers()
        dangerToLink()
        aireE()
    }
}

diametre.onchange = function () {
    let number = Number(diametre.value)

    if (number <= 0) {
        modal.classList.add("is-active")
        diametre.classList.replace("is-link", "is-danger")
    } else {
        rayon.value = (number / 2).toFixed(3)
        let newRayon = (Number(rayon.value)).toFixed(3)
        perimetre.value = (Tau * newRayon).toFixed(3)
        aire.value = (Math.PI * newRayon * newRayon).toFixed(3)

        resetEquation()
        updateNumbers()
        dangerToLink()
        diametreE()
    }
}

btnReset.onclick = function () {
    perimetre.value = ""
    aire.value = ""
    diametre.value = ""
    rayon.value = ""
    updateNumbers()
    dangerToLink()
    resetEquation()
}

function dangerToLink() {
    rayon.classList.replace("is-danger", "is-link")
    perimetre.classList.replace("is-danger", "is-link")
    aire.classList.replace("is-danger", "is-link")
    diametre.classList.replace("is-danger", "is-link")
}

function updateNumbers() {
    Numbers.rayon = rayon.value
    Numbers.diametre = diametre.value
    Numbers.perimetre = perimetre.value
    Numbers.aire = aire.value
}

function resetEquation() {
    ajout = document.querySelector('.equation')
    ajout.innerHTML = ""
}