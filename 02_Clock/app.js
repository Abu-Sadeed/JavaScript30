const secondHand = document.querySelector(".seconds");
const minuteHand = document.querySelector(".minutes");
const hourHand = document.querySelector(".hours");

const setDate = () => {
    const now = new Date();
    
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    const secondDegree = ((second / 60) * 360);
    const minuteDegree = ((minute / 60) * 360) + ((second/60)*6);
    const hourDegree = ((hour / 12) * 360) + ((minute/60)*30);

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    console.log(minute);
}

setInterval(setDate, 1000);

setDate();