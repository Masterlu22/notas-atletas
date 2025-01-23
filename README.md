<h1>Notas de atletas</h1>

> Status: concluído

> ## Descrição funcionalidade:
      Basicamente, o projeto consiste em coletar notas de determinados atletas, e calcular a média das mesmas,
      excluindo a maior e a menor nota. Após o cálculo da média, é retornado, ao console, dados referentes ao nome
      dos atletas, suas notas obtidas e suas respectivas médias, obedecendo o critério citado anteriormente.

>   ## Tecnologias utilizadas:

      JavaScript

> ## Descrição códigos:

+ Foi atribuído o array atletas, onde contém o nome e notas de determinados atletas
+ Foi criada a função com o parâmetro dados. Tal função foi chamada com a atribuição do array atletas.
+ Atribui-se for(){} para caminhar sobre o array atletas.
+ Após isso, ordena-se os valores com slice() e sort(). slice antecede sort para que aquele tipo de ordenação seja efetuado
  Apenas quando a variável ordena for chamada, Mantendo assim a posição original das notas. sort() basicamente é o método utilizado para ordenar elementos.
+ Após a ordenação, é criada uma variável chamada notasDoMeio, onde são excluidos o maior e menor número da sequência de notas ordenadas, utilizando .silce().
+ Depois, define-se a variável quantidade, contendo notasDoMeio.length
+ É criada a variável soma, por meio do reduce, onde a mesma será usada para obtenção das médias.
+ Cria-se a variável media, onde a variável soma será dividida pela variável quantidade
+ Após obtenção das médias, usaremos console.log, para que os dados dos atletas sejam exibidos.

  

