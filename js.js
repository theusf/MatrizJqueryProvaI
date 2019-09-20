$(document).ready(function () {


tamanho = parseInt(prompt('Escolha o tamanho da matriz(Apenas um número)!!!!!!!',5));

 
function geraNumeroAleatorio(min, max) {
    var valor = Math.random() * (max*min) + 1;
    // arredondar com 2 casas decimais
    return valor = parseFloat(valor.toFixed(2));
}

// declaração das variaveis de matriz 
 matriz = new Array(tamanho);
 contador = 1;
 soma = 0;
 maior = null;
 menor = null;
 media = 0;

// geração da matriz com números aleatórios e exibição de cada elemento da matriz
for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz.length; j++) {
      matriz[i] = new Array ((matriz.length*matriz.length));

      /*geraNumeroAleatorio(i+22,i+34.5),
      geraNumeroAleatorio(i+88,i+3.1),
      geraNumeroAleatorio(i+8,i+1.29),
      geraNumeroAleatorio(i+9,i+4.29),
      geraNumeroAleatorio(i+23,i+1.7)

      
    );*/
      //alert(contador + 'o elemento = ' + matriz[i][j]);
      matriz[i][j] = geraNumeroAleatorio(i+22,i+34.5);

      console.log(i+ " e "+ j + "= " + matriz[i][j]);
      soma += matriz[i][j];


        if (matriz[i][j]>maior || maior == null)
            maior = matriz[i][j];

        if (matriz[i][j]<menor || menor == null)
            menor = matriz[i][j];

        media = soma / (matriz.length*matriz.length);

        $("<tr id='" +i + "' >"+ matriz[i][j] + "</tr>").appendTo('#quadro') ;
        $("<td>"+ matriz[i][j] + "</td>").appendTo('#' + i) ;

    }

}
console.log(document.getElementById('quadro').outerHTML);

$('#media').click(function () { 

        $('.visor').val("MEDIA: ( SOMA=" +soma +"/"+ (matriz.length*matriz.length) + ") Media = " + media);
        
    });
    

$('#soma').click(function () { 

    $('.visor').val("SOMA: " + soma);
    
});

$('#maior').click(function () { 

    $('.visor').val("MAIOR: " + maior);
    
});


$('#menor').click(function () { 
    
    $('.visor').val("MENOR: " + menor);
        
});


$('#limpar').click(function () { 
    
    $('.visor').val('');
        
});


});
    



