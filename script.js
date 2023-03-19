const quizData = [
    {
        question: "Who is the father of C language?",
        a: "Steve Jobs",
        b: "James Gosling",
        c: "Dennis Ritchie",
        d: "Rasmus Lerdorf",
        correct: "c",
    },
    {
        question: "Which keyword is used for function in Python language?",
        a: "Function",
        b: "def",
        c: "Fun",
        d: "Define",
        correct: "b",
    },
    {
        question: "HTML stands for __________",
        a: "HyperText Markup Language",
        b: "HyperText Machine Language",
        c: "HyperText Marking Language",
        d: "HighText Marking Language",
        correct: "a",
    },
    {
        question: "JSX stands for _____.",
        a: "JSON",
        b: "JSON XML",
        c: "JavaScript XML",
        d: "JavaScript and AngularJS",
        correct: "c",
    },
    {
        question: "JavaScript is the programming language of the _____.",
        a: "Desktop",
        b: "Mobile",
        c: "Web",
        d: "Server",
        correct: "c",
    }
]

const quiz = document.getElementById("quiz")
const questionE1 = document.getElementById("question")
const answersE1 = document.querySelectorAll(".answer")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score=0


loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionE1.innerText = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d

}

function deselectAnswers(){
    answersE1.forEach(answerE1 => answerE1.checked = false)
}

function getSelected(){
    let answer
    answersE1.forEach(answerE1 => {
        if(answerE1.checked){
            answer = answerE1.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++

        if(currentQuiz< quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answerd ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick = "location.reload()">Reload</button>
            `
        }
    }
})