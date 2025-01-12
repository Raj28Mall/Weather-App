const apiKey='d1095dbc3cf6403da6565612241212';
const baseUrl='http://api.weatherapi.com/v1';

async function getWeather(city){

    const url=`${baseUrl}/current.json?key=${apiKey}&q=${city}&aqi=no`;

    let x= await fetch(url);
    if(!x.ok){
        alert("Unfortunately, we dont have data about this place");
    }
    else{
        let data= await x.json();
        updateDOM(data);
    }
}

function updateDOM(data){
    const bottomDiv=document.getElementById('bottom');
    bottomDiv.style.display="block";

    document.querySelector("#temp").innerHTML=Math.round(data.current.temp_c)+"°C";
    document.querySelector("#city").innerHTML=data.location.name;
    document.querySelector("#humidity").innerHTML=data.current.humidity+"%";
    document.querySelector("#wind").innerHTML=data.current.wind_kph+" km/h";
}

const btn=document.querySelector("#btn");
const cityName=document.querySelector("#cityName");
btn.addEventListener('click', e=>{
    getWeather(cityName.value);
})



