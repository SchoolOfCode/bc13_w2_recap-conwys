let count = document.getElementById('count');
let time = 0;
setInterval(() => {
    if (time<12) {
        time++
        count.textContent=time;
    } else if (time>=12) {
        time=12;
        clearInterval();
    }
},1000)