const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};

/** Sets score and question counters to begin at 0
 * These variables are used in the runGame function */
let score = 0;
let questionCounter = 0;

let acceptingAnswers = true;
let availableQuestions = [];

// Displays a quote based on the user's score

// The questions for the quiz
let questions = [
    {
        question: 'Where does Bilbo Baggins live?',
        choice1: 'Rivendell',
        choice2: 'The Shire',
        choice3: 'Moria',
        choice4: 'Buckland',
        answer: 2,
    },
    {
        question: 'Who is the Lady of Lórien?',
        choice1: 'Eowyn',
        choice2: 'Arwen',
        choice3: 'Galadriel',
        choice4: 'Tauriel',
        answer: 3,
    },
    {
        question: 'Who is the heir of Gondor?',
        choice1: 'Aragorn',
        choice2: 'Faramir',
        choice3: 'Denethor',
        choice4: 'Éomer',
        answer: 1,
    },
    {
        question: 'Where does Theoden give his "Where is the horse and the rider?" speech?',
        choice1: 'Pelennor Fields',
        choice2: 'Helms Deep',
        choice3: 'Minas Tirith',
        choice4: 'Edoras',
        answer: 2,
    },
    {
        question: 'Who figures out the riddle to open the Door to the Mines of Moria?',
        choice1: 'Gandalf',
        choice2: 'Aragorn',
        choice3: 'Frodo',
        choice4: 'Gimli',
        answer: 3,
    },
    {
        question: 'Who says "I would have gone with you to the end, into the very fires of Mordor"?',
        choice1: 'Samwise',
        choice2: 'Legolas',
        choice3: 'Boromir',
        choice4: 'Aragorn',
        answer: 4,
    },
    {
        question: 'Where does Frodo go at the end of the series?',
        choice1: 'The Grey Havens',
        choice2: 'Numenor',
        choice3: 'The Undying Lands',
        choice4: 'Ithilien',
        answer: 3,
    },
    {
        question: 'How many Black Riders follow the Hobbits and Aragorn to Weathertop?',
        choice1: '5',
        choice2: '3',
        choice3: '6',
        choice4: '4',
        answer: 1,
    },
    {
        question: 'What gift does Gimli ask of Galadriel?',
        choice1: 'A new axe',
        choice2: 'Three strands of her hair',
        choice3: 'An Elfstone',
        choice4: 'Lembas bread',
        answer: 2,
    },
    {
        question: 'Who commands the Army of the Dead?',
        choice1: 'Saruman',
        choice2: 'Grima Wormtongue',
        choice3: 'Aragorn',
        choice4: 'Isildur',
        answer: 3,
    },
    {
        question: 'Who says "I promised Gandalf I would keep you safe, and safe is where I will keep you"?',
        choice1: 'Samwise',
        choice2: 'Strider',
        choice3: 'Legolas',
        choice4: 'Treebeard',
        answer: 4,
    }
]

/* Unchanging constants */
const MAX_QUESTIONS = 11;

function runGame() {
    questionCounter = 0;
    score = 0;

    // [...] spread operator - gets all the values from the questions variable
    availableQuestions = [...questions]

    // Calls this function to move on to the next question
    getNewQuestion()
}

function getNewQuestion() {

    // Loads the results.html page once all questions have been answered
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/results.html')
    }

    // Question count tracker updates after each question 
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    
    // Takes the current question, divides it by the no of questions and multiplies it to
    // get the % of the bar
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    // dataset refers to the data-number from the game.html file
    // ensures it knows which choice we are clicking on
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // Calls the css to color the selected choice based on whether it is correct or incorrect
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        // Adds 10 points (declared in the incrementScore function) if the answer is correct
        if(classToApply === 'correct') {
            incrementScore();
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500)
    }) 
})

function incrementScore() {
    score += 10;
    scoreText.innerText = `${score}`
}
runGame();

// Results page quote choice

