var start =document.getElementsById("Start");
var score =document.getElementsById("Score");
var question = document.getElementById("question");
var timer = document.getElementById("timer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

//question 1
var question = [
    {
        question: "what does HTML stand for?",
        choiceA: "who cares",
        choiceB: "i dont know", 
        choiceC:"hyper something",
        choiceD:"i know"
       
    }, 
    {
        question: "what does HTML stand for?",
        choiceA: "who cares",
        choiceB: "i dont know", 
        choiceC:"hyper something",
        choiceD:"i know"
       
    },
    {
        question: "what does HTML stand for?",
        choiceA: "who cares",
        choiceB: "i dont know", 
        choiceC:"hyper something",
        choiceD:"i know"
    },
]
var lastQuestionIndex = question.length-1;
var runningQuestionIndex =0;

function renderQuestion(){
    question.innerHTML = "<p>" + q.question+ "</P>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    runningQuestionIndex = 0;
    renderQuestion()
}