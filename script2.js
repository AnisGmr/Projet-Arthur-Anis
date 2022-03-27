let spé1="Math"
let spé2="Math"
let note1=0
let note2=0



function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('pop_up_accueil').style.display = "none",
    
    note1=document.getElementById("Note_1").value,
    note2=document.getElementById("Note_2").value, 
    
    console.log(spé2),
    console.log(spé1),
    console.log(note1),
    console.log(note2);

    else document.getElementById('pop_up_accueil').removeAttribute('style');

}

window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    },);
}

function changement1(){
 spé1=document.getElementById("spécialité1").value;
}

function changement2(){
    spé2=document.getElementById("spécialité2").value;
    }
    