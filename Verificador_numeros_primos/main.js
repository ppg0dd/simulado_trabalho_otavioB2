

function verificarPrimo() {

    var numero = parseFloat(prompt("Escreva um número:"));

    console.log(numero);
    
    if (numero == 1 || numero == 0) {

        alert('O número ' + numero + ' não é considerado primo (apesar de haver controversas)') 

    }else if(numero == 2){ 
        alert('O número 2 é o único número par e primo!!')
    }else if (numero > 1) {

        for (let i = 2; i < numero; i++) {

            if (numero % i == 0) {
                alert('O número '+ numero + ' não é primo');
                break
            } else { 
                alert('O número ' + numero + ' é primo!');
                break
            }
        }

    }else if(numero < 0){
        alert('Números negativos não podem ser primos!!!')
    }else {
        alert('Isso não é válido!!!!')
    }
}