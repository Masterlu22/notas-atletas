<h1>Notas de atletas</h1>

> Status: concluído

>   ### Obs: Este é um projeto criado exclusivamente para o curso DevStart de JavaScript

> + Descrição funcionalidade: Basicamente, o projeto consiste em coletar notas de determinados atletas, e calcular a média das mesmas, excluindo a maior e a menor nota.
   Após o cálculo da média, é retornado ao console dados referentes ao nome dos atletas, sua notas obtidas e suas respectivas médias, obedecendo o critério
   citado anteriormente.

>   ## Tecnologias utilizadas

   + JavaScript

> Descrição códigos:

+ Foi atribuída a variável atletas com os respectivos valores de nome e notas
+ Foi criada a função com o parâmetro dados. Tal função foi chamada com a atribuição da variável atletas.
+ atribui-se for(){} para caminhar sobre o array atletas.
+ após isso, ordena-se os valores com slice() e sort(). slice antecede sort para que aquele tipo de ordenação seja efetuado.
  apenas quando a variável ordena for chamada, Mantendo assim a posição original das notas. sort() basicamente é o método utilizado para ordenar elementos.
+ Após a ordenação, é criada uma variável chamada numeroDoMeio, onde são excluidos o maior e menor número da sequência de notas ordenadas.
+ É criada a variável soma, por meio do reduce, onde a mesma será usada para obtenção das médias.
+ após obtenção das médias, usaremos console.log, para que os dados dos atletas sejam exibidos.

  

