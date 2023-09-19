
const key = "ed70f7a865650fd9b856cce483b9272b"

function insertInTAble(dados) {
    document.querySelector(".city").innerHTML = "Tempo em" + dados.name;
    document.querySelector(".temperature").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".type-temp").innerHTML = dados.weather[0].description;
    document.querySelector(".clime-time").innerHTML = dados.main.humidity + "%";
}

async function searchCity(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}$lang=pt_br&unit=metric`).then(resposta => resposta.json())
        insertInTAble(dados)

}

function buttonGetCaption() {
    const cidade = document.querySelector(".city-name").value

        	searchCity(cidade)
}