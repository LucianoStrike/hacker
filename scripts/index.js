

function inserir(numero){
    var numeroJuntado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numeroJuntado + numero;

    
}

function limpar(){                                                         //funçao para limpar
    document.getElementById('resultado').innerHTML = "";                   // adionar vazio "" para limpar

}
function limparBaixo(){                                                         //funçao para limpar
    document.getElementById('resultado').innerHTML = "";                   // adionar vazio "" para limpar

}

function back(){                             //funçao para recuar // ainda noa funciona bem
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.legth-1);  //subtraimos uma string
}

function calcularResultado(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = "Insira os valores primeiro!"
    }
    

}