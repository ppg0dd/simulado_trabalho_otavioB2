const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexColor = "#";
    /*for define um loop, o loop em questão é: 1 a variável declarada i = 0, 2 enquanto i for menor que 6 o loop vai continuar,
    3 ao final de cada loop adicionar + 1 ao valor de i (portanto, o loop de for vai repetir 6 vezes*/
    for (let i = 0; i < 6 ; i++) {
        hexColor += hex[getRandomNumber()] 
    }

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRandomNumber () {
    return Math.floor(Math.random() * hex. length);
}