const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};

/* Sets score and question counters to begin at 0 */
let score = 0;
let questionCounter = 0;

let acceptingAnswers = true;
let availableQuestions = [];

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