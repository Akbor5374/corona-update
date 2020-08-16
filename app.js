//dom select
//global
const wNewConfirmed = document.querySelector(".wNewConfirmed");
const wTotalConfirmed = document.querySelector(".wTotalConfirmed");
const wNewDeaths = document.querySelector(".wNewDeaths");
const wTotalDeaths = document.querySelector(".wTotalDeaths");
const wNewRecovered = document.querySelector(".wNewRecovered");
const wTotalRecovered = document.querySelector(".wTotalRecovered");

//bd
const bNewConfirmed = document.querySelector(".bNewConfirmed");
const bTotalConfirmed = document.querySelector(".bTotalConfirmed");
const bNewDeaths = document.querySelector(".bNewDeaths");
const bTotalDeaths = document.querySelector(".bTotalDeaths");
const bNewRecovered = document.querySelector(".bNewRecovered");
const bTotalRecovered = document.querySelector(".bTotalRecovered");

//api call

const api = `https://api.covid19api.com/summary?fbclid=IwAR2YmZZfer5buethbbCblBK_LoFfACaLOgfOMB3Jtiv5iy0RucdM_BXpaFU`;

fetch(api)
     .then(response => response.json())
     .then(json => displayShow(json))

    // show display
     function displayShow(data){
        //global info
        wNewConfirmed.innerText = data.Global.NewConfirmed;
        wTotalConfirmed.innerText = data.Global.TotalConfirmed;
        wNewDeaths.innerText = data.Global.NewDeaths;
        wTotalDeaths.innerText = data.Global.TotalDeaths;
        wNewRecovered.innerText = data.Global.NewRecovered;
        wTotalRecovered.innerText = data.Global.TotalRecovered;

        //bd info
        bNewConfirmed.innerText = data.Countries[13].NewConfirmed;
        bTotalConfirmed.innerText = data.Countries[13].TotalConfirmed;
        bNewDeaths.innerText = data.Countries[13].NewDeaths;
        bTotalDeaths.innerText = data.Countries[13].TotalDeaths;
        bNewRecovered.innerText = data.Countries[13].NewRecovered;
        bTotalRecovered.innerText = data.Countries[13].TotalRecovered;
     }

     // reload window 
     setTimeout(function () {
        window.location.reload(1);
    }, 10000);