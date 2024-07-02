let questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { option: 'Hyperlinks and Text Markup Language', correct: true },
            { option: 'Hypertext Markup Language', correct: false },
            { option: 'Home Tool Markup Language', correct: false },
            // { correctOption: "Hypertext Markup Language" }
        ]
    },
    {
        question: 'Who is making the Web standards?',
        answers: [
            { option: 'Google', correct: false },
            { option: 'The World Wide Web Consortium', correct: true },
            { option: 'Microsoft', correct: false },
            // { correctOption: "The World Wide Web Consortium" }
        ]
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        answers: [
            { option: '< heading >', correct: false },
            { option: '< h6 >', correct: false },
            { option: '< h1 >', correct: true },
            // { correctOption: "<h1>" }
        ]
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        answers: [
            { option: '< linebreak >', correct: false },
            { option: '< br >', correct: true },
            { option: '< break >', correct: false },
            // { correctOption: "<br>" }
        ]
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        answers: [
            { option: '< body bg="yellow" >', correct : false  },
            { option: '< background>yellow</background >', correct : false  },
            { option: '< body style="background-color:yellow;" >', correct : true  },
            // { correctOption: '<body style="background-color:yellow;">' , correct : false }
        ]
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        answers: [
            { option: '< strong >' , correct : true},
            { option: '< b >', correct : false  },
            { option: '< i >', correct : false  },
            // { correctOption: '<strong>' }
        ]
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        answers: [
            { option: '< italic >', correct : false  },
            { option: '< i >' , correct : false },
            { option: '< em >' , correct : true},
            // { correctOption: "<em>" }
        ]
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        answers: [
            { option: '< a >http://www.w3schools.com</a>' , correct : true},
            { option: '< a href="http://www.w3schools.com">W3Schools< /a>' , correct : false },
            { option: '< a url="http://www.w3schools.com">W3Schools.com< /a>', correct : false  },
            // { correctOption: '<a href="http://www.w3schools.com">W3Schools</a>' }
        ]
    },
    {
        question: 'Which character is used to indicate an end tag?',
        answers: [
        {option: ' * ' , correct : false} ,
        {option: ' / ' , correct : true },
        {option: ' < ' , correct : false },
        // {correctOption: "/"}
        ]
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        answers: [
        {option: '< a href="url" target="new">', correct : false },
        {option: '< a href="url" new>', correct : false },
        {option: '< a href="url" target="_blank">', correct : true},
        // {correctOption: '<a href="url" target="_blank">'}
        ]
    },
    {
        question: 'Which of these elements are all <table> elements?',
        answers: [
        {option: '< table > < tr > < td >', correct : true} ,
        {option: '< table > < head > < tfoot >', correct : false },
        {option: '< table > < tr > < tt >', correct : false },
        // {correctOption: "<table> <tr> <td>"}
        ]
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        answers: [
        {option: 'True', correct : true},
        {option: 'False', correct : false },
        // {correctOption: "True"}
        ]
    },
];
let getques = document.getElementById('question')
let getans = document.getElementById('ans')
let getbtn = document.getElementById('next-btn')

let currntquesidx = 0;
let score = 0;

function startquiz() {
    currntquesidx = 0
    score = 0
    getbtn.innerHTML = 'NEXT';
    showques();
}

function showques() {
    resetstate();
    let currntques = questions[currntquesidx];
    let quesno = currntquesidx + 1;
    getques.innerHTML = quesno + ". " + currntques.question;

    currntques.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("btn");
        getans.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswers)
    });
}


function resetstate() {
    getbtn.style.display = "none";
    while (getans.firstChild) {
        getans.removeChild(getans.firstChild);
    }
}
function selectAnswers(e) {
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if (iscorrect) {
        selectedbtn.classList.add("correct")
        score++;
    } else {
        selectedbtn.classList.add("incorrect")
    }
    Array.from(getans.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    getbtn.style.display = "block"
}

function showscore() {
    resetstate();
    getques.innerHTML = ` YOU SCORED ${score} OUT OF ${questions.length}`;
    getbtn.innerHTML = "PLAY AGIN"
    getbtn.style.display = "block";
}
function handlenextbtn() {
    currntquesidx++;
    if (currntquesidx < questions.length) {
        showques();
    } else {
        showscore();
    }
}



getbtn.addEventListener("click", () => {
    if (currntquesidx < questions.length) {
        handlenextbtn();
    } else {
        startquiz();
    }
})
startquiz();


