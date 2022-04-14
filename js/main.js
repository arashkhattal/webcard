var countDate = new Date("may 22, 2022 22:30:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance  = countDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".day").innerText = days;
    document.querySelector(".hour").innerText = hours;
    document.querySelector(".minute").innerText = minutes;
    document.querySelector(".second").innerText = seconds;

},1000)


