//api call
const api = `https://api.covid19api.com/summary?fbclid=IwAR2YmZZfer5buethbbCblBK_LoFfACaLOgfOMB3Jtiv5iy0RucdM_BXpaFU`;

fetch(api)
     .then(response => response.json())
     .then(json => displayShow(json))

    // show display
     function displayShow(data){
        //global info
        document.querySelector(".wNewConfirmed").innerText = data.Global.NewConfirmed;
        document.querySelector(".wTotalConfirmed").innerText = data.Global.TotalConfirmed;
        document.querySelector(".wNewDeaths").innerText = data.Global.NewDeaths;
        document.querySelector(".wTotalDeaths").innerText = data.Global.TotalDeaths;
        document.querySelector(".wNewRecovered").innerText = data.Global.NewRecovered;
        document.querySelector(".wTotalRecovered").innerText = data.Global.TotalRecovered;

        //bd info
        document.querySelector(".bNewConfirmed").innerText = data.Countries[13].NewConfirmed;
        document.querySelector(".bTotalConfirmed").innerText = data.Countries[13].TotalConfirmed;
        document.querySelector(".bNewDeaths").innerText = data.Countries[13].NewDeaths;
        document.querySelector(".bTotalDeaths").innerText = data.Countries[13].TotalDeaths;
        document.querySelector(".bNewRecovered").innerText = data.Countries[13].NewRecovered;
        document.querySelector(".bTotalRecovered").innerText = data.Countries[13].TotalRecovered;
     }

     // reload window 
     setTimeout(function () {
        window.location.reload(1);
    }, 10000);