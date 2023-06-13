//colors é uma constrante com os seguintes dados:
const colors = ["red", "DarkRed", "Salmon", "Pink", "HotPink", "DeepPink", "Orange", "Coral", "Gold", "Yellow", "Khaki", "BlueViolet", "Purple", "Lime", "Green", "DarkGreen", "Aqua", "Blue", "DarkBlue", "Cornsilk", "Maroon"]
//btn é uma constante que busca o btn do html
const btn = document.getElementById("btn");
//color é uma contante que busca o nome da cor no html (tem como base #f1f5f8)
const color = document.querySelector(".color");

//Adiciona um evento ao "click" do botão, que executara a function:
btn.addEventListener("click", () => {
    //randomNumber é uma constante que busca a function getRandomNumber
    const randomNumber = getRandomNumber();
    //mostrará no console o resultado dessa function (muito importante para ver que está funcionando)
    console.log(randomNumber);
    /*busca no HTML o body, depois vai na sua estilização (CSS) e altera seu backgroyndColor para
    o colors[randomNumber], onde o número gerado na constante randomNumber irá buscar o nome do elemento
    dentro da constante colors, portanto selecionando um dos nomes e alterando o backgroundColor para essa cor*/
    document.body.style.backgroundColor = colors[randomNumber];
    /*Além de mudar a cor do background, precisa-se alterar o nome presente no centro da página para o mesmo nome.
    color chama a constante color e textContent é para mudar o conteúdo do HTML para o nome da cor*/
    color.textContent = colors[randomNumber]
}) ;

//getRandomNumber() é a function que vai gerar os números para selecionar a cor na constante colors
function getRandomNumber () {
    /*colors.length é o número total de strings ou elementos dentro da const colors,
    Math.random() retorna um número entre 0 e 1,
    Math.random() * colors.length retorna um número entre 0 e o número total de elementos da const,
    o Math.floor arredonda esse número para baixo (garantindo que seja inteiro),
    o resulta é então retornado para a função getRandomNumber*/
    return Math.floor(Math.random()*colors.length);
}