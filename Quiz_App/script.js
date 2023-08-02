const quizData = [
    {
        question: "1] Which type of JavaScript language is ___",
        a: "A] Object-Oriented",
        b: "B] Object-Based",
        c: "C] Assembly-language",
        d: "D] High-level",
        correct: "b",
    },
    {
        question: "2] Which one of the following also known as Conditional Expression:",
        a: "A] Alternative to if-else",
        b: "B] Switch statement",
        c: "C] If-then-else statement",
        d: "D] immediate if",
        correct: "d",
    },
    {    
        question: "3] The function and var are known as:",
        a: "A] Keywords",
        b: "B] Data types",
        c: "C] Declaration statements",
        d: "D] Prototypes",
        correct: "c",
    },
    {
        question: "4] If a function which does not return a value is known as _____",
        a: "A] Static function",
        b: "B] Method",
        c: "C] Procedures",
        d: "D] Dynamic function",
        correct: "c",
    },
    {
        question: "5] Which one of the following is the correct way for calling the JavaScript code?",
        a: "A] Preprocessor",
        b: "B] Triggering Event",
        c: "C] RMI",
        d: "D] Function/Method",
        correct: "d",
    },
    {
        question: "6] Which of the following number object function returns the value of the number?",
        a: "A] toString()",
        b: "B] valueOf()",
        c: "C] toLocaleString()",
        d: "D] toPrecision() ",
        correct: "b",
    },
    {

        question: "7] In JavaScript the x===y statement implies that:",

        a: "A] Both x and y are equal in value, type and reference address as well.",
        b: "B] Both are x and y are equal in value only.",
        c: "C] Both are equal in the value and data type.",
        d: "D] Both are not same at all.",
        correct: "c",
    },
    {

        question: "8]  Which one of the following operator returns false if both values are equal?",

        a: "A] !",
        b: "B] !==",
        c: "C] !=",
        d: "D] All of the above",
        correct: "c",
    },
    {

        question: "9] Which one of the following symbol is used for creating comments in the javascript:",

        a: "A] \\",
        b: "B] //",
        c: "C] \* *\ ",
        d: "D]  \* */",
        correct: "b",
    },
    {

        question: "10] A set of unordered properties that, has a name and value is called______",
      
        a: "A] String",
        b: "B] Array",
        c: "C] Serialized Object",
        d: "D] Object",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2><br>  OUT OF 10 QUESTIONS / CORRECT SCORE IS ${score}</h2>
           <button onclick="location.reload()">RELOAD</button>
           `
       }
    }
})