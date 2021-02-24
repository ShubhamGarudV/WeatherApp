//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key},

const weatherApi={
  
    baseurl:"https://api.openweathermap.org/data/2.5/weather",
    key:"e6a67c292a0b2079e1b583a7f8d1ba8b"
}
const searchid=document.getElementById('searchid');



searchid.addEventListener('keypress',(e)=>{
    if(e.keyCode==13)
    {
        console.log(searchid.value);
        getweatherReport(searchid.value);
        const details=document.querySelector('.weather-body');
        details.style.display="block";
    }
});

function getweatherReport(userinput)
{
    fetch(`${weatherApi.baseurl}?q=${userinput}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showweatherReport);
}


function showweatherReport(weather)
{
    console.log(weather);
    

    const city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;

    const date=document.getElementById('date');

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let todaydate=new Date();
    var fulldate=todaydate.getDate();
    fulldate+=' ';
    fulldate+= months[todaydate.getMonth()];
    fulldate+=' ';
    fulldate+=todaydate.getFullYear();
    date.innerHTML=fulldate;
  


    const temp=document.getElementById('temp');
    temp.innerHTML=`${Math.round(weather.main.temp)}°C`;

    const  minmax=document.getElementById('minmax');
    minmax.innerText=`${Math.floor(weather.main.temp_min)}°C(min)/${Math.ceil(weather.main.temp_max)}°C(max)`;

    const sky=document.getElementById('sky');
    sky.innerText=`${weather.weather[0].main}`;

    var tempwe=sky.innerText;
    console.log(tempwe);


    if(sky.textContent=='Clear')
    {
        document.body.style.backgroundImage="url('./images/clear.png')";
    }
    else if(sky.textContent=='Clouds')
    {
        document.body.style.backgroundImage="url('./images/cloudy.PNG')";
    }
    else if(sky.textContent=='Mist')
    {
        document.body.style.backgroundImage="url('./images/mist.PNG')";
    }
    else if(sky.textContent=='Haze')
    {
        document.body.style.backgroundImage="url('./images/haze.PNG')";
    }
    else if(sky.textContent=='Smoke'|| sky.textContent=='Fog')
    {
        document.body.style.backgroundImage="url('./images/smoke.PNG')";
    }
   
}


