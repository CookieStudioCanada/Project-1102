// 55(2) data

let divrepEl = document.getElementById("div-rep-el")
let divnonrepEl = document.getElementById("div-nonrep-el")
let pdajustEl = document.getElementById("pd-ajust-el")
let impot552El = document.getElementById("impot-552-el")
let cdc552El = document.getElementById("cdc-552-el")
let imrtd552El = document.getElementById("imrtd-552-el")

// GC data
let impotEl = document.getElementById("impot-el")
let cdcEl = document.getElementById("cdc-el")
let imrtdEl = document.getElementById("imrtd-el")

// function de 55(2)

function Button552()
{
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

    divrepEl.textContent = divrep + " $"
    divnonrepEl.textContent = divnonRP + " $"
    pdajustEl.textContent = pdajust + " $"
    impot552El.textContent = impot + " $"
    cdc552El.textContent = cdc + " $"
    imrtd552El.textContent = imrtd + " $"
    
}

// function de GC

function ButtonGC()
{
    let pd = document.getElementById("PD").value
    let pbr = document.getElementById("PBR").value
    
    let gc = pd - pbr
    let gci = gc / 2
    let impot = gci * 0.5017

    let cdc = gci
    let imrtd = gci * 0.30666666

    impotEl.textContent = impot + " $"
    cdcEl.textContent = cdc + " $"
    imrtdEl.textContent = imrtd + " $"
}

// tabs

function tabs(evt, sections) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(sections).style.display = "block";
    evt.currentTarget.className += " active";
  }