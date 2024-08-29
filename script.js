async function getWeather(){
    //criaçao da variavel para pegar o valor do input cidade
    var cidade = document.getElementById('city').value

    //conectar com api
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);
    var tempCelsisus = resposta.data.main.temp;

    //imprime valor no front ens com concatenar jquery e duas cadas decimas
    document.getElementById('temperatura').innerHTML = `A temperatura ateal de ${cidade} é: ${tempCelsisus.toFixed(2)} °c`;

}
 //chamar função
getweather();