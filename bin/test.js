function getTimeRemaining(endtime) { 
    var t = Date.parse(endtime) - Date.parse(new Date()); 
    var seconds = Math.floor((t/1000) % 60); 
    var minutes = Math.floor((t/1000/60) % 60); 
    var hours = Math.floor((t/(1000 * 60 * 60)) % 24); 
    return { 
     'total': t, 
     'hours': hours, 
     'minutes': minutes, 
     'seconds': seconds 
    }; 
} 
var flag = 0; 

function startClock() { 


    /************ INITIALIZE CLOCK ************/ 
    function initializeClock(id, endtime) { 

     // If countdown time is 0 then operate 
     if(flag==0) 
     { 
      var clock = document.getElementById(id); 
      var hoursSpan = clock.querySelector('.hours'); 
      var minutesSpan = clock.querySelector('.minutes'); 
      var secondsSpan = clock.querySelector('.seconds'); 

     flag=1; 
     } 


     function updateClock() { 
      var t = getTimeRemaining(endtime); 


      hoursSpan.innerHTML = ('0' + t.hours).slice(-2); 
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2); 
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2); 

      if (t.total <= 0) { 
       clearInterval(timeinterval); 
       flag=0; 
      } 
     } 

     updateClock(); 
     var timeinterval = setInterval(updateClock, 1000); 
    } 

    var timeInMinutes = 60; 
    var currentTime = Date.parse(new Date()); 
    var deadline = new Date(currentTime + timeInMinutes*60*1000); 
    initializeClock('clockdiv', deadline); 

    document.cookie = deadline 

    var cookie = document.cookie; 

    console.log(cookie); 

} 

function sendTrack(){ 
    (function() { 

     var trackUrl = document.getElementById("url");  

    }()); 
}