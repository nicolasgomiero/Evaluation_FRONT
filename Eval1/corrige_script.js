var bouton = document.querySelector('.button');
var CadreA = document.querySelector('#cadreA');
var nosMenus = document.querySelector('#nosmenus');
var reservations = document.querySelector('#reservations');
var CadreB = document.querySelector("#cadreB");
var CadreC = document.querySelector("#cadreC");
var messageerreur = document.querySelectorAll(".tooltip");

var nomSaisi = document.querySelector("#nom");
var prenomSaisi = document.querySelector("#prenom");
var telephoneSaisi = document.querySelector("#tel");
var emailSaisi = document.querySelector("#mail");
var objetSaisi = document.querySelector("#objet");
var boutonFormulaire = document.querySelector("#libouton");

/*
function baisserOpacite(){
    CadreA.style.opacity = "0.8";
}

function opaciteParDefaut(){
    CadreA.style.opacity = "1";
}

bouton.addEventListener("mouseover", baisserOpacite);
bouton.addEventListener("mouseout", opaciteParDefaut);

 */

function permuterOpacite(){
    var opaciteActuelle = CadreA.style.opacity;
    if (opaciteActuelle === "0.8"){
        CadreA.style.opacity = "1";
    }else CadreA.style.opacity = "0.8"
}


function afficherCadreB(){
    CadreB.scrollIntoView(
        {block: "end", behavior: "smooth"}
    );
}

function afficherCadreC(){
    CadreC.scrollIntoView(
        {block: "end", behavior: "smooth"}
    );
}

function masquerLesElements(){
    for (var i=0; messageerreur.length; i++){
        messageerreur[i].style.display = "none";
    }
}

function verifierFormulaire() {
    // on vérifie qu'il ait au moins trois caractères dans le champs nom
    if (nomSaisi.value.length<3){
        messageerreur[0].style.display = "inline-block";
    } else messageerreur[0].style.display = "none";
    if (prenomSaisi.value.length<3){
        messageerreur[1].style.display = "inline-block";
    } else messageerreur[1].style.display = "none";
    // On vérifie qu'il y ait au moins une valeur saisie dans les champs téléphone et email
    if ((telephoneSaisi.value == "") && (emailSaisi.value == "")){
        messageerreur[2].style.display = "inline-block";
    } else messageerreur[2].style.display = "none";
}

function changerObjet() {
    objetSaisi.value = "Réservations";
}


masquerLesElements();
bouton.addEventListener("click", afficherCadreB);
bouton.addEventListener("mouseover", permuterOpacite);
bouton.addEventListener("mouseout", permuterOpacite);

nosMenus.addEventListener("click", afficherCadreB);
reservations.addEventListener("click", afficherCadreC);

boutonFormulaire.addEventListener("click", verifierFormulaire);
objetSaisi.addEventListener("click", changerObjet);