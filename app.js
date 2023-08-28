let perimetre = document.getElementById('perimetre')
let aire = document.getElementById('aire')
let diametre = document.getElementById('diametre')
let rayon = document.getElementById('rayon')
let calcul = document.getElementById('calcul')
let btnReset = document.getElementById('btnReset')
let Tau = Math.PI * 2

rayon.onchange = function () {
    let number = Number(rayon.value)

    if (number <= 0) {
        alert("Entrez un nombre positif!!!")
    } else {
        perimetre.value = (Tau * number).toFixed(3)
        aire.value = (Math.PI * number * number).toFixed(3)
        diametre.value = (number * 2).toFixed(3)
    
        rayonE()
    }
}

perimetre.onchange = function () {
    let number = Number(perimetre.value)

    if (number <= 0) {
        alert("entrez un nombre positif!!!")
    } else {
        rayon.value = (number / Tau).toFixed(3)
        let newRayon = (Number(rayon.value)).toFixed(3)
        diametre.value = (number / Math.PI).toFixed(3)
        aire.value = (Math.PI * newRayon * newRayon).toFixed(3)
    
        perimetreE()
    }
}

aire.onchange = function () {
    let number = Number(aire.value)

    if (number <= 0) {
        alert("Entrez un nombre positif!!!")
    } else {
        rayon.value = (Math.sqrt(number / Math.PI)).toFixed(3)
        let newRayon = (Number(rayon.value)).toFixed(3)
        perimetre.value = (Tau * newRayon).toFixed(3)
        diametre.value = (newRayon * 2).toFixed(3)
    
        aireE()
    }
}

diametre.onchange = function () {
    let number = Number(diametre.value)

    if (number <= 0) {
        alert("Entrez un nombre positif!!!")
    } else {
        rayon.value = (number / 2).toFixed(3)
        let newRayon = (Number(rayon.value)).toFixed(3)
        perimetre.value = (Tau * newRayon).toFixed(3)
        aire.value = (Math.PI * newRayon * newRayon).toFixed(3)
    
        diametreE()
    }
}



btnReset.onclick = function () {

    perimetre.value = ""
    aire.value = ""
    diametre.value = ""
    rayon.value = ""
    let ajout = document.querySelector('.equation');
    ajout.innerHTML = "";
}