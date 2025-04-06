const deg = 6;
const digitalElement = document.querySelector('.digital-clock');

const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const setHour = () => {
    let agora = new Date();

     const hours =  String(agora.getHours()).padStart(2,'0');
     const minutes = String(agora.getMinutes()).padStart(2,'0') ;
     const seconds = String(agora.getSeconds()).padStart(2,'0');

     digitalElement.textContent = `${hours}:${minutes}:${seconds}`;

};

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${ mm }deg)`;
    sec.style.transform = `rotateZ(${ ss }deg)`;
    
};


setHour();
setInterval( setHour, 1000);
setClock();
setInterval(setClock, 1000);
