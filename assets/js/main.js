function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function updateCountdown() {
    var timing = getTimeRemaining(date);

    $('.masque').fadeIn(1000);

    setTimeout(function() {
        $('.masque').fadeOut(500);
    }, 2000);

    $('.day > .value').html(timing.days);
    $('.heures > .value').html(timing.hours);
    $('.minutes > .value').html(timing.minutes);
    $('.secondes > .value').html(timing.seconds);
}

// CONFIGURE DATE

var date = "02/18/2021";

$(document).ready(() => {
    var timing = getTimeRemaining(date);

    $('.masque').fadeIn(1000);

    setTimeout(function() {
        $('.masque').fadeOut(500);
    }, 2000);

    $('.day > .value').html(timing.days);
    $('.heures > .value').html(timing.hours);
    $('.minutes > .value').html(timing.minutes);
    $('.secondes > .value').html(timing.seconds);
});

// Countdown

setInterval(() => {
    var timing = getTimeRemaining(date);

    $('.day > .value').html(timing.days);
    $('.heures > .value').html(timing.hours);
    $('.minutes > .value').html(timing.minutes);
    $('.secondes > .value').html(timing.seconds);
}, 1000);
