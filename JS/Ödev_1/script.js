function askName(){
    setInterval(getDate,10)
    let name = window.prompt("Adınız nedir?")
    if(name!==""){
      let container= document.getElementsByTagName("div");
      container[0].style.display="block"
    }
    let dc=document.getElementById("name");
    dc.innerHTML=`Merhaba, <b>${name}</b>! Hoş geldin!`;
    
}


function getDate(){
    let time= new Date();
    let day= time.getDay();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();

    var today = checkDay(day)   

    hour=hour < 10 ? "0"+hour: hour;
    min=min < 10 ? "0"+ min:min;
    sec=sec < 10 ? "0"+ sec:sec;
    
    let date= hour +":"+ min+":" + sec +" "+today;

    document.getElementById("clock").innerHTML=date;
}

function checkDay(day){
    var today;
    switch(day){
        case 0:
            today="Pazar";
            break;
        case 1:
            today="Pazartesi";
            break;
        case 2:
            today="Salı";
            break;
        case 3:
            today="Çarşamba";
            break;
        case 4:
            today="Perşembe";
            break;
        case 5:
            today="Cuma";
            break;
        case 6:
            today="Cumartesi";
            break;
        default:
            today="Belirsiz Tarih"
        
    }
    return today;
}