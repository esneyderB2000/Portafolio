const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Definicion correcta de Astronomia',
    answers: [
      { text: 'Ciencia que estudia la estructura y la composición de los astros, su localización y las leyes de sus movimientos.', correct: true },
      { text: 'Ciencia que estudia el universo y sus planetas', correct: false }
    ]
  },
  {
    question: 'Cuanto tiempo lleva nuetro praneta tierra?',
    answers: [
      { text: '4,500 millones de años', correct: true },
      { text: '500 millones de años', correct: false },
      { text: '10,000 millones de años', correct: false },
      { text: '6,00 millones de años', correct: false }
    ]
  },
  {
    question: 'Que pasa si el planeta tierra deja de girar',
    answers: [
      { text: 'No pasaria nada', correct: false },
      { text: 'Tendríamos medio año de luz diurna y medio año de noche', correct: true },
      { text: 'Se acabaria el oxigeno', correct: false },
      { text: 'Nos quedariamos sin gravedad', correct: false },
    ]
  },
  {
    question: 'El sol y la luna son un planeta??',
    answers: [
      { text: 'Si', correct: false },
      { text: 'No', correct: true }
    ]
  }
]