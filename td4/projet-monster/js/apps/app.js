import {init,get}
   from "../actions/action.js" ;


    let b1 = document.querySelector("#b1");
    let b2 = document.querySelector("#b2");
    let b3 = document.querySelector("#b3");
    let b4 = document.querySelector("#b4");
    let b5 = document.querySelector("#b5");
    let b6 = document.querySelector("#b6");
    let b7 = document.querySelector("#b7");


    b1.addEventListener("click",(event) => {
         //TODO initialiser le monster avecune nouvelle vie
    });

    b2.addEventListener("click",(event) => {
        //TODO fait courir le monstre
    });

    b3.addEventListener("click",(event) => {
       //TODO le monstre se bat
    });

    b4.addEventListener("click",(event) => {
        //TODO le monstre dort
    });
    b5.addEventListener("click",(event) => {
        //TODO le monstre mange
    });
    b6.addEventListener("click",(event) => {
        //TODO le monstre montre ses caractéristiques

    });
    b7.addEventListener("click",(event) => {
        //TODO le monstre travaille
    });

    export function start(){
        init("monster","10","100",true);
        //nouveau handler qui affiche l'état du monstre
       alert(get());
    }




