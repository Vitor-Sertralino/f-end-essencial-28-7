/*const meuTitulo = document.querySelector("h1")
meuTitulo.textContent = "Olá, mundo!"*/

/*document.querySelector('button').addEventListener('click', function () {
    alert('Você clicou aqui')
})*/

const imagem = document.querySelector('img')
imagem.onclick = () => {
    const scr = imagem.getAttribute('src')
    if (scr === 'images/logo-senai.jpg') {
        imagem.setAttribute('src', 'images/logo-senai2.png')
    } else {
        imagem.setAttribute('src', 'images/logo-senai.jpg')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    const myName = prompt('Por favor, digite o seu nome')
    localStorage.setItem('name', myName)
    myHeading.textContent = `Bem-vindo ao SENAI, ${myName}`

    if (!localStorage.getItem('name')) {
        setUserName()
    } else {
        const storedNamed = localStorage.getItem('name')
        myHeading.textContent = `Bem-vindo ao SENAI, ${storedNamed}`
    }
}

myButton.onclick = () => {
    setUserName()
}