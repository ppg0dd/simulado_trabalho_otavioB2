//QUESTÃO 1
//VERIFICAR SE UM NÚMERO É PRIMO

//Function executada ao apertar o botão
function verificarPrimo() {

    //Número que será verificado
    var numero = parseFloat(prompt("Escreva um número que falarei se é primo ou não"));

    //Se o número for 0 ou 1 pode ser como não pode ser considerado primo, o == da o resultado de True ou False, o || significa "ou"
    if (numero == 1 || numero == 0) {
        //alerta que ocorre se o número for 1 ou 0
        alert('O número ' + numero + ' não é considerado primo (apesar de haver controversas)') 

        //caso o número seja igual a dois terá um aviso diferente (único número primo par, o que quebra a lógica do for)
    }else if(numero == 2){ 
        alert('O número 2 é o único número par e primo!!')

        //Com o número sendo maior que 2, iremos verificar se é primo ou não
    }else if (numero > 2) {

        //O For é um loop, a variável inicia com o valor 2 e aumenta 1 a cada loop, e vai parar quando i for igual ao número
        for (let i = 2; i < numero; i++) {
            
            /*essa operação com % nos dá a sobra da divisão inteira, esse if só ocorrerá quando a sobra for 0, o que é impossível existir um número maior
            do que 1 que divida um número primo (a não ser ele mesmo), portanto, se essa condição for True, o número não é primo*/
            if (numero % i == 0) {
                alert('O número '+ numero + ' não é primo');
                //break para parar o loop
                break
            //quando o loop estiver no ultimo loop, ou seja, quando acabar e ainda não tiver cumprido o if anterior, ele irá informar que o número é primo
            } else if(numero - 1 == i){ 
                alert('O número ' + numero + ' é primo!');
                break
            }
        }

    //caso alguem digite algum número negativo enviar esta mensagem
    }else if(numero < 0){
        alert('Números negativos não podem ser primos!!!')
    //se a pessoa escrever um número todo errado (com símbolos por exemplo)
    }else {
        alert('Isso não é válido!!!!')
    }
}


//QUESTÃO 2
//INVERTER UMA STRING

function inverterString() {
    //primeiro qual vai ser a string
    var string = prompt('Insira uma palavra, que eu vou invertela!')
    //criaçõa da variável que vai representar a string invertida
    var stringInvertida = ''

    /*loop onde o valor de i é o número total de caracteres da string digitada (string.length) -1 onde esse -1
    é para poder mencionar na ordem certa da string, pois ao utilizar os [] a ordem começa apartir do 0 e não do 1
    (por isso o -1), o loop irá encerrar quando i for menor que 0, ou seja, quando não sobrar nenhuma casa, e a cada
    loop irá diminuir 1, pegando do final para o inicio da string*/ 
    for (i = string.length - 1; i >= 0 ; i-- ) {
        //a stringinvertida vai ser igual a ela mesma mais a casa selecionada por i (+=), sendo  adicionado todas as casas até não existirem mais
        stringInvertida += string[i];
    }
    //informar o resultado:
    alert(stringInvertida)
}


//QUESTÃO 3
//ENCONTRAR O MAIOR ELEMENTO EM UM VETOR

function maiorVetor() {
    var valor1 = parseFloat(prompt('Insira um valor:'));
    var valor2 = parseFloat(prompt('Insira outro valor:'));  
    var valor3 = parseFloat(prompt('Insira outro valor:'));  
    var valor4 = parseFloat(prompt('Insira outro valor:'));  
    var valor5 = parseFloat(prompt('Insira outro valor:'));

    var vetores = [valor1, valor2, valor3, valor4, valor5]

    var maiorValor = Math.max(...vetores)
    
    alert('O maior dos valores escritos é: '+ maiorValor)
}

//QUESTÃO 4
//MAIOR, MENOR E MÉDIA

function vetores() {
    var valor1 = parseFloat(prompt('Insira um valor:'));
    var valor2 = parseFloat(prompt('Insira outro valor:'));  
    var valor3 = parseFloat(prompt('Insira outro valor:'));  
    var valor4 = parseFloat(prompt('Insira outro valor:'));  
    var valor5 = parseFloat(prompt('Insira outro valor:'));

    var vetores = [valor1, valor2, valor3, valor4, valor5]

    var maiorValor = Math.max(...vetores)
    var menorValor = Math.min(...vetores)
    var media = (valor1 + valor2 + valor3 + valor4 + valor5) / 5

    alert('O maior dos valores escritos é '+ maiorValor + ', o menor valor é '+ menorValor + ' e a média é '+media)
}


//QUESTÃO 5
//