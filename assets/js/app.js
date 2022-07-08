const API_URL = "https://dog.ceo/api/breeds/image/random";
const change_generator = document.getElementById("button-generator");
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

change_generator.addEventListener('click', () => {

    const dados = async () => {
        const response = await fetch(API_URL)
        const dataJson = await response.json()
        return dataJson
    };

    const requisicao = dados(API_URL);

    requisicao.then((data) => {
        image2.src = data.message;
        console.log(data.status, data.message)
    });
    requisicao.catch((error) => {
        console.log(error)
    });
  
});


function carregou() {
    if(image1.style.display == 'flex'){
        image1.style.display = 'none'
    }
}

setTimeout(() => {
    carregou();
}, 4000)

document.addEventListener("DOMContentLoaded", function (event) {
    image1.src = "https://www.blogson.com.br/wp-content/uploads/2017/10/584b607f5c2ff075429dc0e7b8d142ef.gif"
});

function carregar() {
    document.getElementById("content").style.display = "flex";
}