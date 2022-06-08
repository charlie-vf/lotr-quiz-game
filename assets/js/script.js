// Content of main game div
const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

// Results page
const finalScore = document.getElementById('final-score');
const finalScoreQuote = document.getElementById('results-quote');

const MAX_QUESTIONS = 11;

// Used to decide which quote the user receives on the results page
let minScore = 60;

let currentQuestion = {};

// Sets score and question counters to begin at 0
// These variables are used in the runGame function
let score = 0;
let questionCounter = 0;

let acceptingAnswers = true;
let availableQuestions = [];

// Array of questions for the quiz

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

// Begins game

function runGame() {
    questionCounter = 0;
    score = 0;

    // [...] spread operator - gets all the values from the questions variable
    availableQuestions = [...questions]

    // Calls this function to move on to the next question
    getNewQuestion()
}

function getNewQuestion() {

    // Shows the results of the quiz once the final question has been answered, alongside a quote
    // If all questions answered - displays Results area
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        document.getElementById('game-page').classList.add('hide');
        document.getElementById('results-page').classList.remove('hide');
        finalScore.innerText = `${score}`;
    
        // Results Quote selector based on score
        if(score <= minScore) {
            finalScoreQuote.innerText = `Fool of a Took!`
        }

        else if(score > minScore) {
            finalScoreQuote.innerText = `Not bad for a pointy-eared Elvish princeling!`
        }
    }
    // Otherwise, continues displaying new questions
    else {
        document.getElementById('results-page').classList.add('hide');
        document.getElementById('game-page').classList.remove('hide')
    }

    // Question count tracker updates after each question
    // Tutorial for tracker: https://www.youtube.com/watch?v=4bctmtuZVcM&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=7
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    
    // Takes the current question, divides it by the no of questions and multiplies it to get the % of the bar
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    // options is a created array from the choice-text in the game.html file
    // dataset refers to the data-number from the game.html file
    // choice refers to the choice lists from the questions array
    // declares which choice the user is selecting
    // tutorial for forEach: https://www.w3schools.com/jsref/jsref_forEach.asp
    // this video helped with displaying questions: https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=4
    options.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
}

options.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // Calls the css to color the selected choice based on whether it is correct or incorrect
        let answerAccuracy = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        // Adds 10 points (declared in the incrementScore function below) if the answer is correct
        if(answerAccuracy === 'correct') {
            incrementScore();
        }

        // Displays the css for correct or incorrect
        selectedChoice.parentElement.classList.add(answerAccuracy);

        // Allows 500ms after selecting an answer so user can see the result before calling the getNewQuestion function
        // Removes css for correct or incorrect until new answer selected
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(answerAccuracy);
            getNewQuestion();
        }, 500)
    }) 
})

// Adds 10 each time the user selects the correct answer

function incrementScore() {
    score += 10;
    scoreText.innerText = `${score}`
}

runGame();
