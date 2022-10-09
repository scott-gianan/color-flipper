const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('button');
const bodyColor = document.querySelector('body');

const getRandomHex = () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.round(Math.random()*(hex.length-1))];
    }
    //console.log(hexColor)
    return hexColor;
}

const changeColor = () => {
    bodyColor.style.backgroundColor = getRandomHex();
}

btn.addEventListener("click", changeColor)
