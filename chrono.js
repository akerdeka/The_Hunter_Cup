/*countdownManager = {
    // Configuration
    targetTime: new Date('2020-12-09 14:44:00'), // Date cible du compte à rebours (00:00:00)
    displayElement: { // Elements HTML où sont affichés les informations
        day:  null,
        hour: null,
        min:  null,
        sec:  null
    },
     
    // Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
    init: function(){
        // Récupération des références vers les éléments pour l'affichage
        // La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
        this.displayElement.day  = jQuery('#countdown_day');
        this.displayElement.hour = jQuery('#countdown_hour');
        this.displayElement.min  = jQuery('#countdown_min');
        this.displayElement.sec  = jQuery('#countdown_sec');
         
        // Lancement du compte à rebours
        this.tick(); // Premier tick tout de suite
        window.setInterval("countdownManager.tick();", 1000); // Ticks suivant, répété toutes les secondes (1000 ms)
    },
     
    // Met à jour le compte à rebours (tic d'horloge)
    tick: function(){
        // Instant présent
        var timeNow  = new Date();
         
        // On s'assure que le temps restant ne soit jamais négatif (ce qui est le cas dans le futur de targetTime)
        if( timeNow > this.targetTime ){
            timeNow = this.targetTime;
        }
         
        // Calcul du temps restant
        var diff = this.dateDiff(timeNow, this.targetTime);
         
        this.displayElement.day.text(  diff.day  );
        this.displayElement.hour.text( diff.hour );
        this.displayElement.min.text(  diff.min  );
        this.displayElement.sec.text(  diff.sec  );
    },
     
    // Calcul la différence entre 2 dates, en jour/heure/minute/seconde
    dateDiff: function(date1, date2){
        var diff = {}                           // Initialisation du retour
        var tmp = date2 - date1;
 
        tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60;                    // Extraction du nombre de secondes
        tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
        diff.min = tmp % 60;                    // Extraction du nombre de minutes
        tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
        diff.hour = tmp % 24;                   // Extraction du nombre d'heures
        tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
        diff.day = tmp;
 
        return diff;
    }
};
 
jQuery(function($){
    // Lancement du compte à rebours au chargement de la page
    countdownManager.init();
});*/


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