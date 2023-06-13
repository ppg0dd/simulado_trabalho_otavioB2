function converterTemp() {
    var temp = parseFloat(prompt('Digita o valor da temperatura em °C: '));

    var fahrenheit = (temp * 1.8) + 32;
    alert('O valor '+ temp + ' em fahrenheit é igual a: ' + fahrenheit);
}