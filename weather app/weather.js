let h1=document.querySelector("#heading");
let div=document.querySelector("#box");
let body=document.querySelector("body");
let btn=document.querySelector("button");
let input=document.querySelector("#demo");
/*btn.addEventListener("click",()=>{
    body.style.backgroundColor="aqua";
    div.style.backgroundColor="aqua";
    btn.style.backgroundColor="aqua";
    input.style.color="aqua";
    input.style.backgroundColor="aqua";
    console.log(input.value);
     fetch(`http://api.weatherapi.com/v1/current.json?key=e7e72b0b086e435dad060820251806&q=${input.value}&aqi=yes`).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            h1.innerText=(`location:-${data.location.country} ,name:- ${data.location.name} , region :- ${data.location.region} 
            , localtime :- ${data.location.localtime} , Air quality :- ${data.current.air_quality.co} , condition :- ${data.current.condition.text }, 
            temperature(in celcius) :- ${data.current.temp_c} and temperature (in farenheit) :- ${data.current.temp_f}`);
        })
})*/
async function weather(city){
     let f=await fetch(`http://api.weatherapi.com/v1/current.json?key=e7e72b0b086e435dad060820251806&q=${city}&aqi=yes`);
     return await f.json();
     };

btn.addEventListener("click",async()=>{
   console.log(input.value);
    let data=await weather(input.value);
    console.log(data);
    h1.innerText=(`location:-${data.location.country} ,name:- ${data.location.name} , region :- ${data.location.region} 
    , localtime :- ${data.location.localtime} , Air quality :- ${data.current.air_quality.co} , condition :- ${data.current.condition.text }, 
    temperature(in celcius) :- ${data.current.temp_c} and temperature (in farenheit) :- ${data.current.temp_f}`);
})