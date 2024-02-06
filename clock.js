function fun() {
    var now = new Date();
    let hours = now.getHours() % 12;
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var hourDeg= (hours + minutes / 60) * 30;
    var minuteDeg = (minutes + seconds / 60) * 6;
    var secondDeg = seconds * 6;

    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(fun, 1000);

fun();
