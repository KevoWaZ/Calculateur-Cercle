let perimetre = document.getElementById('perimetre')
let aire = document.getElementById('aire')
let diametre = document.getElementById('diametre')
let rayon = document.getElementById('rayon')
let button = document.querySelector('button')

rayon.onchange = function () {
    let number = Number(rayon.value)

    perimetre.value = 2 * Math.PI * number
    aire.value = Math.PI * number * number
    diametre.value = number * 2

}

perimetre.onchange = function () {
    let number = Number(perimetre.value)

    rayon.value = number / (2 * Math.PI)
    let newRayon = Number(rayon.value)
    diametre.value = newRayon * 2
    aire.value = Math.PI * newRayon * newRayon
}

aire.onchange = function () {
    let number = Number(aire.value)

    rayon.value = Math.sqrt(number / Math.PI)
    let newRayon = Number(rayon.value)
    perimetre.value = 2 * Math.PI * newRayon
    diametre.value = newRayon * 2
}

diametre.onchange = function () {
    let number = Number(diametre.value)

    rayon.value = number / 2
    let newRayon = Number(rayon.value)
    perimetre.value = 2 * Math.PI * newRayon
    aire.value = Math.PI * newRayon * newRayon
}
