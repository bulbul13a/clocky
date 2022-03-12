function Time(){
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";
    
    if(hr == 0){
        hr = 12;
    }
    
    if(hr > 12){
        hr = hr - 12;
        session = "PM";
    }

    if (hr<10){
        hr= "0"+hr;
    }
    if (min<10){
        min= "0"+min;
    }
    if (sec<10){
        sec= "0"+sec;
    }
    
    var time = hr + ":" + min + ":" + sec + " " + session;
    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("ClockDisplay").textContent = time;
    
    setTimeout(Time, 1000);
    
}

Time();