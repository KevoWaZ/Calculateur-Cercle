let ajout = document.querySelector('.equation')

function rayonE() {
    let ajout = document.querySelector('.equation')

    let perime = document.createElement("h1")
    perime.id = "perime"
    perime.innerHTML = `\\(P = \\tau * r\\)`
    ajout.appendChild(perime)

    let air = document.createElement("h1")
    air.id = "air"
    air.innerHTML = `\\(A = \\pi * r * r\\)`
    ajout.appendChild(air)

    let diam = document.createElement("h1")
    diam.id = "diam"
    diam.innerHTML = `\\(D = r * 2\\)`
    ajout.appendChild(diam)

    MathJax.typesetPromise()
}

function perimetreE() {
    let ajout = document.querySelector('.equation')

    let rayo = document.createElement("h1")
    rayo.id = "rayo"
    rayo.innerHTML = `\\(r = P / \\tau \\)`
    ajout.appendChild(rayo)

    let diam = document.createElement("h1")
    diam.id = "diam"
    diam.innerHTML = `\\(D = P / \\pi \\)`
    ajout.appendChild(diam)

    let air = document.createElement("h1")
    air.id = "air"
    air.innerHTML = `\\(A = \\pi * r * r\\)`
    ajout.appendChild(air)

    MathJax.typesetPromise()
}

function aireE() {
    let ajout = document.querySelector('.equation')

    let rayo = document.createElement("h1")
    rayo.id = "rayo"
    rayo.innerHTML = `\\(r = \\sqrt{A / \\pi} \\)`
    ajout.appendChild(rayo)

    let perime = document.createElement("h1")
    perime.id = "perime"
    perime.innerHTML = `\\(P = \\tau * r \\)`
    ajout.appendChild(perime)

    let diam = document.createElement("h1")
    diam.id = "diam"
    diam.innerHTML = `\\(D = r * 2\\)`
    ajout.appendChild(diam)

    MathJax.typesetPromise()
}

function diametreE() {
    let ajout = document.querySelector('.equation')

    let rayo = document.createElement("h1")
    rayo.id = "rayo"
    rayo.innerHTML = `\\(r = D * 2 \\)`
    ajout.appendChild(rayo)

    let perime = document.createElement("h1")
    perime.id = "perime"
    perime.innerHTML = `\\(P = \\tau * r \\)`
    ajout.appendChild(perime)

    let air = document.createElement("h1")
    air.id = "air"
    air.innerHTML = `\\(A = \\pi * r * r\\)`
    ajout.appendChild(air)

    MathJax.typesetPromise()
}

