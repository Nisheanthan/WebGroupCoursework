var quiz = [
    {
        question : "Which of the following country won Football world Cup maximum times?",
        choiceA : "Germany",
        choiceB : "Italy",
        choiceC : "Brazil",
        correct : "C"
    },{
        question : "Who among the following player scores highest number of goals in Footbal World Cup?",
        choiceA : "Klose",
        choiceB : "Pele",
        choiceC : "Meradona",
        correct : "A"
    },{
        question : "Which of the following term is recognised as an early form of football by FIFA?",
        choiceA : "Inuit",
        choiceB : "Episkyros",
        choiceC : "kemari",
        correct : "B"
    },
    {
        question : "Which of the following country hosted the first Football World Cup?",
        choiceA : "Uruguay",
        choiceB : "Argentina",
        choiceC : "Brazil",
        correct : "A"
    },
    {
        question : "Who among the following scored the first goal in World Cup history?",
        choiceA : "Johino",
        choiceB : "Pele",
        choiceC : "Lucien",
        correct : "C"
    },
    {
        question : "Which of following team do not play in stripes?",
        choiceA : "Newcastle",
        choiceB : "Southampton",
        choiceC : "Tottenham Hotspur",
        correct : "C"
    },
    {
        question : "When was the first FIFA World Cup inaugurated?",
        choiceA : "1932",
        choiceB : "1930",
        choiceC : "1931",
        correct : "B"
    },
    {
        question : "Which country became the first nation to win the Football World Cup?",
        choiceA : "Uruguay",
        choiceB : "Germany",
        choiceC : "Argentina",
        correct : "A"
    },
    {
        question : "Who among the following achieved the first World Cup hat-trick?",
        choiceA : "Bert",
        choiceB : "Lucien",
        choiceC : "Pele",
        correct : "A"
    },
    {
        question : "When was first official international football match was played?",
        choiceA : "1929",
        choiceB : "1872",
        choiceC : "1902",
        correct : "B"
    }
];

const lastQuestion = quiz.length - 1;
const questionTime = 10; // 10s
const gaugeWidth = 150; // timer gauge - 150px
const gaugeUnit = gaugeWidth / questionTime;

var runningQuestion = 0;
var count = 10;
var correct = 0;
var inCorrect = 0;
var totalTime = 0;

var runner;
var instruction;

console.log('Welcome To Football Quiz Page');

// start quiz
function startQuiz(){
    console.log('Starting Quiz');
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("instruction").style.display = "block";
        
    instructor(10);
    
    setTimeout(function(){
        console.log('Quiz Started')
        getQuestion();
        getProgressBar();
        startTimer();
        runner = setInterval(startTimer,1000);
        clearInterval(instruction);
    },10000);   
}

function instructor(duration) {
    var timer = duration - 1;
    instruction = setInterval(function () {
        var seconds = parseInt(timer);
        document.getElementById('seconds').textContent = seconds + " seconds!";
        if(seconds > 0) {
            timer--;
            if (timer < 0) {
                timer = duration;
            }
            if (seconds == 1){
                document.getElementById('seconds').textContent = seconds + " second!";
            }
        }else {
            document.getElementById("quiz").style.display = "block";
            document.getElementById("instruction").style.display = "none";
            console.log('Instruction Given')
        }
    }, 1000);

}
// Start Timer
function startTimer(){
    if(count <= questionTime && count>=0){
        document.getElementById("counter").innerHTML = count;
        document.getElementById("counter").style.color = "black";
        document.getElementById("timeBar").style.width = count * gaugeUnit + "px";
        if (count <= 3) {
           document.getElementById("timeBar").style.backgroundColor = "#B22222";
        } else if(count <= 5){
            document.getElementById("timeBar").style.backgroundColor = "#DAA520";
        }else {
            document.getElementById("timeBar").style.backgroundColor = "#008000";
        }
        count--;
        totalTime++;
    }else{
        count = 10;
        // change progressBar color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            getQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(runner);
            getScore();
        }
    }
    //console.log('check 2 ' + (count - 1));
}
// get a question
function getQuestion(){
    var q = quiz[runningQuestion];
    
    document.getElementById("qDisplay").innerHTML = "<p>"+ q.question +"</p>";
    document.getElementById("A").innerHTML = q.choiceA;
    document.getElementById("B").innerHTML = q.choiceB;
    document.getElementById("C").innerHTML = q.choiceC;
}
// get progressBar
function getProgressBar(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        document.getElementById("progressBar").innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
// checkAnwer
function checkAnswer(answer){
    if( answer == quiz[runningQuestion].correct){
        // answer is correct
        correct++;
        // change progressBar color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        inCorrect++;
        // change progressBar color to red
        answerIsWrong();
    }
    count = 10;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        getQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(runner);
        getScore();
    }
}

// if answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// if answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// get score
function getScore(){
    var timeTaken = totalTime - quiz.length; // since questions are displayed 1sec later, we are reducing that time get accurate time taken
    console.log('quiz ended');
    console.log('number of correct answer: ' + correct);
    console.log('number of in-correct answer: ' + inCorrect);
    console.log('total time taken: ' + timeTaken); 
    console.log(quiz.length);

    var score = 100*(((correct*2) - inCorrect)/(quiz.length*2));
    var scorePerCent = Math.round(score) ;
    // var answered = (quiz.length) - (correct+inCorrect);
    displayScore(scorePerCent,correct,inCorrect,timeTaken);
    
}

function displayScore(scorePerCent,correct,inCorrect,timeTaken){
    var answered = correct+inCorrect;
    document.getElementById("scoreContainer").style.display = "block";
    document.getElementById("scoreContainer").style.backgroundColor = (scorePerCent >= 50) ? "green" : "red";
    document.getElementById("percentage").innerHTML = scorePerCent;
    document.getElementById("answered").innerHTML = answered;
    document.getElementById("correct").innerHTML = correct;
    document.getElementById("incorrect").innerHTML = inCorrect;
    document.getElementById("timeTaken").innerHTML = timeTaken;
}

function changeFontSize(pixels) {
    var textSize = document.body.style.fontSize;
    if (textSize == "") {
        document.body.style.fontSize = "1.0em";
    }

    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + pixels + "em";
}
