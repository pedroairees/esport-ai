const form = document.getElementById('form')
const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')

const aiResponse = document.getElementById('aiResponse')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
})

//Estudar sobre isso com a IA antes de continuar