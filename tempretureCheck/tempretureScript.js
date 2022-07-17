function conditionCheck() {
    let temp=document.querySelector("#temp").value;

    var img = document.getElementById("myImage")

    if (temp>70) {
        document.querySelector("#result").innerHTML=
            'الوداع';
            img.src ="./tempImages/inna-lillahi-wa-inna-ilayhi-rajiun.webp" 
            // img.src ="./tempImages/inna-lillahi-wa-inna-ilayhi-rajiun.webp" 
    } else if (temp<70 && temp>39) {
        document.querySelector("#result").innerHTML=
            'Heat Storke';
        img.src ="./tempImages/heatStroke.jpg" 
    } else if (temp<39 && temp>30){
        document.querySelector("#result").innerHTML=
            'Hot Weather';
        img.src ="./tempImages/hotWeather.jpg" 
    } else if (temp<30 && temp>15){
        document.querySelector("#result").innerHTML=
            'Pleasent Weather';
        img.src ="./tempImages/pleasentWeather.jpg" 
    } else if (temp<15 && temp>5){
        document.querySelector("#result").innerHTML=
            'Cold Weather';
        img.src ="./tempImages/coldWeather.jpg" 
    } else if (temp <5 && temp>-25){
        document.querySelector("#result").innerHTML=
            'Most Cold Weather';
        img.src ="./tempImages/mostColdest.webp" 
    } else if (temp<-25){
        document.querySelector("#result").innerHTML=
            'Ice Age started';
        img.src ="./tempImages/iceAge.jpg" 
    }
}

