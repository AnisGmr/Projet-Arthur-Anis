const titreSpans = document.querySelectorAll('h1 span');
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
let spé1="None"
let spé2="None"
let note1=0
let note2=0
let Niveau_Moyen=0

window.addEventListener('load', () => {

    const TL = gsap.timeline({ paused: true });
    
    TL.staggerFrom(titreSpans, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
    .from(l1, 0.75, {width:0, ease: "power2.out"})
    .from(l2, 0.75, {width:0, ease: "power2.out"})
    .from(l3, 0.75, {width:0, ease: "power2.out"})
    

    TL.play();
})

window.onload = function () {
    setTimeout(function () {
        document.getElementById('Erreur').style.display = "none",
        PopUp("Phide")
    },);}
   
function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('pop_up_accueil').style.display = "none",
    note1=document.getElementById("Note_1").value,
    note2=document.getElementById("Note_2").value,
    
    Calcul_Niveau_Moyen(),
    console.log(spé2),
    console.log(spé1),
    console.log(note1),
    console.log(note2);

    else if (hideOrshow == "Phide") 
    document.getElementById('pop_up_accueil').style.display = "none",
    note1="None",
    note2="None",
    spé1="None",
    spé2="None",
    console.log(spé2),
    console.log(spé1),
    console.log(note1),
    console.log(note2);

    else document.getElementById('pop_up_accueil').removeAttribute('style'),
    spé1=document.getElementById("spécialité1").value,
    spé2=document.getElementById("spécialité2").value,
    console.log(1);

}


function changement1(){
 spé1=document.getElementById("spécialité1").value;
}

function changement2(){
    spé2=document.getElementById("spécialité2").value;
    }
    

function vérification(){
    
    note1=document.getElementById("Note_1").value,
    note2=document.getElementById("Note_2").value,
    console.log(spé2),
    console.log(spé1),
    console.log(note1),
    console.log(note2);

    
    if (note1>20 || note2>20 || spé1 === "None" || spé2 === "None" || spé1===spé2)
    document.getElementById('Erreur').removeAttribute('style'),
    console.log("error");

    else 
    document.getElementById('Erreur').style.display = "none",
    PopUp("hide");
}

function Calcul_Niveau_Moyen(){
    
    Niveau_Moyen=(note1+note2)/2;
}

