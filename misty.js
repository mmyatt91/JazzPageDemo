function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

const words = document.querySelectorAll('.word');
const intervalId = setInterval(function () {
    for (let word of words){
        word.style.color = randomRGB();
    }
}, 1000)
