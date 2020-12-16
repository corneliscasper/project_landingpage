status_fade=0;
click=1;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }




  
  


const ChangeMode=function(){
    console.info("Test")
    document.querySelector(".js-btn-mode").addEventListener("click",function(){
        console.log("Er is gedrukt");
        if(status_fade==1){
            
            document.body.classList.toggle('fadeout');
            document.body.classList.toggle('fadein');// Ik toggle mijn fade in en out klasses zodat ik ze weer kan gebruiken
            console.log("Dark->Light")
            
        }
        document.body.classList.toggle('fadeout');
        setTimeout(function() {
            document.body.classList.toggle('fadein');
            document.body.classList.toggle('dark-theme');
            status_fade=1;//Dark-Light
            console.log("Light->Dark")// 2 uur werk aan gehad
        }, 3000); 
        
        

        
        if(click==1){
            document.querySelector(".js-btn-mode").innerHTML="Light"
            click=0;
        }
        else{
            document.querySelector(".js-btn-mode").innerHTML="Dark"
            click=1;
        }
    

    })
}

const clicked=function(){
    document.querySelector('.citybtn').addEventListener('click',function(){
    if(document.getElementById('name').value==""){
        alert("Name must be filled in");
        return false;
    }    
    console.log('citynaam word doorgegeven')

  
        
        
       
    

   

        GetWeather()
    })

}

const GetWeather= async function(){


    const data= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c2df8fa3824441b5887154558202611&q=${document.querySelector('.cityname').value}&days=1`).then((r)=>r.json()).catch((err)=>(console.log("Error: ",err)));

 
    try{
        document.querySelector('.citytitle').innerHTML=data.location.name
        document.querySelector('.temptitle').innerHTML=data.current.temp_c+" °C"
        const conditions=data.current.condition.text;
        console.log(conditions);
        document.querySelector(".image_photo").src=`${data.current.condition.icon}`
        document.querySelector(".Max-Temp-Waarde").innerHTML=data.forecast.forecastday[0].day.maxtemp_c+" °C"
        document.querySelector(".Min-Temp-Waarde").innerHTML=data.forecast.forecastday[0].day.mintemp_c+" °C"
        document.querySelector(".Sunrise-Waarde").innerHTML=data.forecast.forecastday[0].astro.sunrise
        document.querySelector(".Sunset-Waarde").innerHTML=data.forecast.forecastday[0].astro.sunset
    }
    catch{
        alert("City does not exists");
        return false;
    }
    


    





 
    //console.log(data2)


}

const init = function(){
    console.info('DOM LOADED')
    document.body.classList.remove('dark-theme')
    document.body.classList.remove('fadein')
    document.body.classList.remove('fadeout')
 
 

    ChangeMode()
    clicked()
        
    
    
}


document.addEventListener("DOMContentLoaded",init)
