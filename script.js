const titreSpans = document.querySelectorAll('h1 span');
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
let spé1="None"
let spé2="None"
let note1="None"
let note2="None"
let Niveau_Moyen="None"
const retourtitre = document.querySelector(".titre");
let opacité_Louis=0;
let opacité_Saint_Louis = 0;
let opacité_Janson=0;
let opacité_Marie=0;
let opacité_Paul=0;
let barre3= document.getElementsByClassName('lignes');
const état=0;

window.addEventListener('load', () => {

    const TL = gsap.timeline({ paused: true });
    
    TL.staggerFrom(titreSpans, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.5)
    .from(l1, 0.5, {width:0, ease: "power2.out"})
    .from(l2, 0.5, {width:0, ease: "power2.out"})
    .from(l3, 0.5, {width:0, ease: "power2.out"})
    TL.play();
});

window.onload = function () {
    setTimeout(function () {
        placementbarre(document.cookie),
        console.log(document.cookie),
        document.getElementById('Erreur').style.display = "none",
        PopUp("Phide")
    },);}
   
function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('pop_up_accueil').style.display = "none",
    note1=document.getElementById("Note_1").value,
    note2=document.getElementById("Note_2").value, 
    Calcul_Niveau_Moyen();


    else if (hideOrshow == "Phide") 
    document.getElementById('pop_up_accueil').style.display = "none",
    note1="None",
    note2="None",
    spé1="None",
    spé2="None";

    else document.getElementById('pop_up_accueil').removeAttribute('style'),
    spé1=document.getElementById("spécialité1").value,
    spé2=document.getElementById("spécialité2").value;

}


function changement1(){
 spé1=document.getElementById("spécialité1").value;
}

function changement2(){
    spé2=document.getElementById("spécialité2").value;
    }
    

function vérification(){
    
    note1=document.getElementById("Note_1").value,
    note2=document.getElementById("Note_2").value;


    
    if (note1>20 || note2>20 || spé1 === "None" || spé2 === "None" || spé1===spé2)
    document.getElementById('Erreur').removeAttribute('style');

    else 
    document.getElementById('Erreur').style.display = "none",
    PopUp("hide");
}
 
function Calcul_Niveau_Moyen()
{
    var intnote1 = parseInt(note1);
    var intnote2 = parseInt(note2);
    Niveau_Moyen=(intnote1+intnote2)/2;
    document.cookie = Note=Niveau_Moyen;
    placementbarre(document.cookie)
}


function carteshow(nom){
    if (nom=="Louis" && opacité_Louis==0){
    Louis = document.querySelector(".Louis"),
    Louis.classList.add("load"),
    opacité_Louis=1;
}
    else if (nom=="Louis" && opacité_Louis==1){
    Louis = document.querySelector(".Louis"),
    Louis.classList.remove("load"),
    opacité_Louis=0;
}


    else if (nom=="Saint-Louis" && opacité_Saint_Louis==0){
    Saint_Louis = document.querySelector(".Saint-Louis"),
    Saint_Louis.classList.add("load"),
    opacité_Saint_Louis=1;
}
    else if (nom=="Saint-Louis" && opacité_Saint_Louis==1){
    Saint_Louis = document.querySelector(".Saint-Louis"),
    Saint_Louis.classList.remove("load"),
    opacité_Saint_Louis=0;
}

    
else if (nom=="Marie" && opacité_Marie==0){
    Marie = document.querySelector(".Marie"),
    Marie.classList.add("load"),
    opacité_Marie=1;
}
    else if (nom=="Marie" && opacité_Marie==1){
    Marie = document.querySelector(".Marie"),
    Marie.classList.remove("load"),
    opacité_Marie=0;
}


else if (nom=="Janson" && opacité_Janson==0){
    Janson = document.querySelector(".Janson"),
    Janson.classList.add("load"),
    opacité_Janson=1;
}
    else if (nom=="Janson" && opacité_Janson==1){
    Janson = document.querySelector(".Janson"),
    Janson.classList.remove("load"),
    opacité_Janson=0;
}

else if (nom=="Paul" && opacité_Paul==0){
    Paul = document.querySelector(".Paul"),
    Paul.classList.add("load"),
    opacité_Paul=1;
}
    else if (nom=="Paul" && opacité_Paul==1){
    Paul = document.querySelector(".Paul"),
    Paul.classList.remove("load"),
    opacité_Paul=0;

}
}


retourtitre.addEventListener("click",function(){
    document.location.href="index.html";
    placementbarre(document.cookie)
})


function placementbarre(Moyenne){
    if (Moyenne!="None"){
        console.log("salut")
        let différence_Louis=Moyenne-17;
        let différence_Saint_Louis=Moyenne-16;
        let différence_Janson=Moyenne-14;
        let différence_Marie=Moyenne-13;
        let différence_Paul=Moyenne-12;
        
        
        if (différence_Louis>=0){
            document.querySelector(".DeLouis").style.left="90%",
            document.querySelector(".DeLouis").style.left="90%";
        }
        else if (différence_Louis>=-1){
            document.querySelector(".DeLouis").style.left="70%",
            document.querySelector(".DeLouis").style.left="70%";
            
        }
        else if (différence_Louis>=-2){
            document.querySelector(".DeLouis").style.left="50%",
            document.querySelector(".DeLouis").style.left="50%";
        }
        else if (différence_Louis<-2){
            console.log("louis")
            document.querySelector(".DeLouis").style.left="40%",
            document.querySelector(".DeLouis").style.left="40%";
            console.log("test")
        }
        

        if (différence_Saint_Louis>=0){
            console.log("janson")
            document.querySelector(".DeSaintLouis").style.left="90%";
        }
        else if (différence_Saint_Louis>=-1){
            document.querySelector(".DeSaintLouis").style.left="70%";
        }
        else if (différence_Saint_Louis>=-2){
            document.querySelector(".DeSaintLouis").style.left="50%";
        }
        else{
            document.querySelector(".DeSaintLouis").style.left="40%";
        }

        
        
        if (différence_Janson>=0){
            document.querySelector(".DeJanson").style.left="90%",
            document.querySelector(".DeJanson").style.left="90%";
        }
        else if (différence_Janson>=-1){
            document.querySelector(".DeJanson").style.left="70%",
            document.querySelector(".DeJanson").style.left="70%";
            
        }
        else if (différence_Janson>=-2){
            document.querySelector(".DeJanson").style.left="50%",
            document.querySelector(".DeJanson").style.left="50%";
        }
        else{
            document.querySelector(".DeJanson").style.left="40%",
            document.querySelector(".DeJanson").style.left="40%";
        }


        if (différence_Marie>=0){
            console.log("louis")
            document.querySelector(".DeMarie").style.left="90%",
            document.querySelector(".DeMarie").style.left="90%";
        }
        else if (différence_Marie>=-1){
            document.querySelector(".DeMarie").style.left="70%",
            document.querySelector(".DeMarie").style.left="70%";
            
        }
        else if (différence_Marie>=-2){
            document.querySelector(".DeMarie").style.left="50%",
            document.querySelector(".DeMarie").style.left="50%";
        }
        else{
            document.querySelector(".DeMarie").style.left="40%",
            document.querySelector(".DeMarie").style.left="40%";
        }



        if (différence_Paul>=0){
            console.log("louis")
            document.querySelector(".DePaul").style.left="90%",
            document.querySelector(".DePaul").style.left="90%";
        }
        else if (différence_Paul>=-1){
            document.querySelector(".DePaul").style.left="70%",
            document.querySelector(".DePaul").style.left="70%";
            
        }
        else if (différence_Paul>=-2){
            document.querySelector(".DePaul").style.left="50%",
            document.querySelector(".DePaul").style.left="50%";
        }
        
        else{
            document.querySelector(".DePaul").style.left="40%",
            document.querySelector(".DePaul").style.left="40%";
        }
    }
    else{
        console.log("erreur")
    }
}


window.addEventListener('load', () => {
    placementbarre(document.cookie)
    console.log(document.cookie);
});