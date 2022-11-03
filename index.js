// 55(2) data

let divrepEl = document.getElementById("div-rep-el")
let divnonrepEl = document.getElementById("div-nonrep-el")
let pdajustEl = document.getElementById("pd-ajust-el")
let impot552El = document.getElementById("impot-552-el")
let cdcEl = document.getElementById("cdc-el")
let imrtdEl = document.getElementById("imrtd-el")

// function de 55(2)

function Button552()
{

    console.log("ca marche tu cali...")

    let pd = document.getElementById("PD-552").value
    let pbr = document.getElementById("PBR-552").value
    let cv = document.getElementById("CV").value
    let safe = document.getElementById("SAFE").value
    
    let divrep = pd - cv
    
    let divnonRP = divrep - safe

    let pdajust = pd - divrep + divnonRP

    let gc = pdajust - pbr
    let gci = gc / 2
    let impot = gci * 0.5017

    let cdc = gci
    let imrtd = gci * 0.30666666

    console.log("gc : " + gc)
    console.log("gci : " + gci)
    console.log("impot : " + impot)

    divrepEl.textContent = "Dividende rep : " + divrep + " $"
    divnonrepEl.textContent = "Dividende rep ne pas etre un div : " + divnonRP + " $"
    pdajustEl.textContent = "PD ajusté : " + pdajust + " $"
    impot552El.textContent = "Impôts payables : " + impot + "$"
    cdcEl.textContent = "CDC : " + cdc + "$"
    imrtdEl.textContent = "IMRTD : " + imrtd + "$"
    
}