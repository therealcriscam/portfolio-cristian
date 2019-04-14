'use strict'

$('.scroll').click(event => {
    const jump = $(event.currentTarget).attr('href');
    const newPosition = $(jump).offset();

    $('html, body').stop().animate({scrollTop: newPosition.top}, 600);
    event.preventDefault();
});

window.onscroll = function() {
    scroll();
}

function scroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('top-button').style.display = "block";
    } 
    
    else {
        document.getElementById('top-button').style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}