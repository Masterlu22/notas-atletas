function mostraDadosEObtemMedia(dados){
    for(let i = 0; i < dados.length; i++){
        let ordena = dados[i].notas.slice().sort((a, b) => a - b);
        let notasDoMeio = ordena.slice(1, 4);

        let quantidade = notasDoMeio.length
        let inicio = 0;
        
        let soma = notasDoMeio.reduce(function(total, atual){
                return total + atual
        }, inicio);

        let media = soma / quantidade
        

        console.log(`Atleta: ${dados[i].nome}`)
        console.log(`Notas Obtidas: ${dados[i].notas}`)
        console.log(`Média Válida: ${media}`)
        console.log('')

    }
}


let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

mostraDadosEObtemMedia(atletas);
