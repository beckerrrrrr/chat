'use strict'
const pessoas = [
    {
        nome: 'Paçoquinha',
        mensagem: '-Ta, na mancha chatinho?',
        tempo: '10 min atrás',
        imagem: 'paçoca.jpg',
    },
    {
        nome: 'Paulistos',
        mensagem: '-Já estão na paulista?',
        tempo: 'agora',
        imagem: 'paulistos.jpg',
    },
    {
        nome: 'willl',
        mensagem: 'vai na JMappele??',
        tempo: '1 hora atrás',
        imagem: 'will.jpg',
    },
    {
        nome: 'Mancha',
        mensagem: '-Que horas na quadra?',
        tempo: '7 min atrás',
        imagem: 'paçoca1.jpg',
    },
]
const criarCard = (pessoas) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoas.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoas.tempo

    const imagem = document.createElement('img')
    imagem.src = `./img/${pessoas.imagem}`
    imagem.alt = pessoas.name

    const nomemensagem = document.createElement('div')
    nomemensagem.classList.add('nomemensagem')

    const name = document.createElement('h2')
    name.textContent = pessoas.nome

    card.replaceChildren(imagem, nomemensagem, tempo)
    nomemensagem.replaceChildren(name, mensagem)

    return card
}



const mostrarCards = (pessoas) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(pessoas)
    cardContainer.appendChild(card)
}

pessoas.forEach(mostrarCards)