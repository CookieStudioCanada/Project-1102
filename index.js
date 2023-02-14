// Hamburger

const toggleButton = document.getElementById('toggle-button');
const dropdown = document.getElementById('dropdown');

dropdown.style.display = 'none'

toggleButton.addEventListener('click', () => {

  // Add transition...
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

const navLinks = document.querySelector('.navlinks');

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    const sectionId = event.target.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});


// Dropdown

const select = document.getElementById("bien-type");
const output = document.getElementById("output");

select.addEventListener("change", function() {
  const value = this.value;
  if (value === "amortissable") {

    output.innerHTML = optionTexts["bien-amort"];    

  } else if (value === "non-amortissable") {

    output.innerHTML = optionTexts["bien-non-amort"];

  } else {
    output.innerHTML = "";
  }
});

// Les textes pour les inputs
var optionTexts = { 
  "bien-amort": 
    "<br> Nom du bien : <input id='Nom' type='text' placeholder='Nom'><br>" +
    "<br> Coût : <input id='PBR' type='number' placeholder='PBR'><br>" + 
    "<br> FNACC : <input id='FNACC' type='number' placeholder='FNACC'><br>" +     
    "<br> JVM : <input id='PD' type='number' placeholder='PD'><br>" +
    "<br> Société : <input id='Societe' type='checkbox' placeholder='Societe'><br>" +
    "<br><button onclick='ButtonGC()'>Calcul</button>",
  "bien-non-amort": 
    "<br> Nom du bien : <input id='Nom' type='text' placeholder='Nom'><br>" +
    "<br> PBR : <input id='PBR' type='number' placeholder='PBR'><br>" +     
    "<a id='FNACC' type='number' placeholder='FNACC' value='0'>" +     
    "<br> JVM : <input id='PD' type='number' placeholder='PD'><br>" +
    "<br> Société : <input id='Societe' type='checkbox' placeholder='Societe'><br>" +
    "<br><button onclick='ButtonGC()'>Calcul</button>",
};

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
let nomEl = document.getElementById("nom-el")
let jvmEl = document.getElementById("jvm-el")
let pbrEl = document.getElementById("pbr-el")
let fnaccEl = document.getElementById("fnacc-el")
let recupEl = document.getElementById("recup-el")
let informations = document.getElementById("informations")

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
    impot552El.textContent = impot.toFixed(2) + " $"
    cdc552El.textContent = cdc + " $"
    imrtd552El.textContent = imrtd.toFixed(2) + " $"
    
}

// function de GC
// let results = [];
const folderName = "taxExpenseCalculations";

function ButtonGC()
{

  let pd = document.getElementById("PD").value
  let pbr = document.getElementById("PBR").value
  let nom = document.getElementById("Nom").value
  let fnacc = document.getElementById("FNACC").value

  let societe = document.getElementById("Societe")

  let type = select.value;
  
  // switch
  if (select.value === "amortissable") {

    let gc = pd - pbr
    let gci = gc / 2

    let recup = (pbr - fnacc);
  
    let cdc = gci
    let imrtd = gci * 0.30666666
    
    if (societe.checked) {

      impotEl.textContent = (gci * 0.5017).toFixed(2) + " $"
      cdcEl.textContent = cdc + " $"
      imrtdEl.textContent = imrtd.toFixed(2) + " $"
      nomEl.textContent = nom;
      pbrEl.textContent = pbr.toString() + " $";
      jvmEl.textContent = pd.toString() + " $";
      fnaccEl.textContent = fnacc + " $";
      recupEl.textContent = (recup * 0.122).toFixed(2) + " $ (DPE)";  
      informations.innerHTML = "La société a disposé d'un bien amortissable..."

    } else {

      impotEl.textContent = gci + " $ (À ajouter aux revenus)"
      cdcEl.textContent = "N/A"
      imrtdEl.textContent = "N/A"
      nomEl.textContent = nom;
      pbrEl.textContent = pbr.toString() + " $";
      jvmEl.textContent = pd.toString() + " $";
      fnaccEl.textContent = fnacc + " $";
      recupEl.textContent = recup + " $ (À ajouter aux revenus)";  
      informations.innerHTML = "Le particulier a disposé d'un bien amortissable..."
    }

  } else if (select.value === "non-amortissable") {

    let gc = pd - pbr
    let gci = gc / 2
    let impot = gci * 0.5017
  
    let cdc = gci
    let imrtd = gci * 0.30666666
  
    if (societe.checked) {

      impotEl.textContent = impot.toFixed(2) + " $";
      cdcEl.textContent = cdc + " $";
      imrtdEl.textContent = imrtd.toFixed(2) + " $";
      nomEl.textContent = nom;
      pbrEl.textContent = pbr.toString() + " $";
      jvmEl.textContent = pd.toString() + " $";
      fnaccEl.textContent = "N/A";
      recupEl.textContent = "N/A";
      informations.innerHTML = "La société a disposé d'un bien non amortissable..."

    } else {

      impotEl.textContent = gci + " $ (À ajouter aux revenus)"
      cdcEl.textContent = "N/A"
      imrtdEl.textContent = "N/A"
      nomEl.textContent = nom;
      pbrEl.textContent = pbr.toString() + " $";
      jvmEl.textContent = pd.toString() + " $";
      fnaccEl.textContent = "N/A";
      recupEl.textContent = "N/A";
      informations.innerHTML = "Le particulier a disposé d'un bien non amortissable..."
    }

  } else {
    // nothing
  }
  
  let result = {
    nom: nom,
    pbr: pbr,
    jvm: pd,
    fnacc: fnacc,
    societe: societe.checked,
    type: type
  }

  const folderName = "taxExpenseCalculations";

  let results = JSON.parse(localStorage.getItem(folderName)) || [];
  results.push(result);
  localStorage.setItem(folderName, JSON.stringify(results));
}

// Get from Local Storage

function doIt() {
  const folderName = "taxExpenseCalculations";
  let getText = document.getElementById("getText");

  let storedResults = JSON.parse(localStorage.getItem(folderName)) || []; 
  console.log(storedResults);

  let html = "";
  for (let i = 0; i < storedResults.length; i++) {
    let result = storedResults[i];

    let gc = parseInt(result.jvm) - parseInt(result.pbr);
    let gci = gc / 2;
    let recup = (parseInt(result.pbr) - parseInt(result.fnacc));
  
    let imrtd = gci * 0.30666666; 

    if (result.type === "amortissable")
    {
      if (result.societe === true) { // Societe
        
        html += "<div class='historique'>" + "<p class='nameHistorique'>" + result.nom + " (Société) <button class='deleteButton' onclick='deleteResult(" + i + ")'>X</button>" + "</p>" + "<br>" + "Type: " + result.type + "<br>" + "PBR: " + result.pbr + "$, FNACC: " + result.fnacc + "$, JVM: " + result.jvm + "$" + "<br>" + "GCI: " + (gci * 0.5017) + "$, Recupération: " + recup + "$ (À ajouter aux revenus), IMRTD: " + imrtd.toFixed(2) +"$" + ", CDC: " + gci + "$<br>" + "</div>";

      } else { // particulier

        html += "<div class='historique'>" + "<p class='nameHistorique'>" + result.nom + " (Particulier) <button class='deleteButton' onclick='deleteResult(" + i + ")'>X</button>" + "</p>" + "<br>" + "Type: " + result.type + "<br>" + "PBR: " + result.pbr + "$, FNACC: " + result.fnacc + "$, JVM: " + result.jvm + "$" + "<br>" + "GCI: " + gci + "$ (À ajouter aux revenus), Recupération: " + recup + "$ (À ajouter aux revenus)<br>" + "</div>"; 
      }

      } else if (result.type === "non-amortissable") {

      if (result.societe === true) { // Societe
        
        html += "<div class='historique'>" + "<p class='nameHistorique'>" + result.nom + " (Société) <button class='deleteButton' onclick='deleteResult(" + i + ")'>X</button>" + "</p>" + "<br>" + "Type: " + result.type + "<br>" + "PBR: " + result.pbr + "$, JVM: " + result.jvm + "$" + "<br>" + "GCI: " + (gci * 0.5017) + "$, IMRTD: " + imrtd.toFixed(2) +"$" + ", CDC: " + gci + "$<br>" + "</div>";

      } else { // particulier
        
        html += "<div class='historique'>" + "<p class='nameHistorique'>" + result.nom + " (Particulier) <button class='deleteButton' onclick='deleteResult(" + i + ")'>X</button>" + "</p>" + "<br>" + "Type: " + result.type + "<br>" + "PBR: " + result.pbr + "$, JVM: " + result.jvm + "$" + "<br>" + "GCI: " + gci + "$ (À ajouter aux revenus)<br>" + "</div>"; 
    
      }
    } else {
      // nothing
    }
  }
  getText.innerHTML = html;
}

function reset() {
  const folderName = "taxExpenseCalculations";
  localStorage.removeItem(folderName);
  window.location.reload();
}

function deleteResult(index) {
  const folderName = "taxExpenseCalculations";
  let storedResults = JSON.parse(localStorage.getItem(folderName)) || [];
  storedResults.splice(index, 1);
  localStorage.setItem(folderName, JSON.stringify(storedResults));
  doIt();
}