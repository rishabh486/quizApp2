var readLineSync=require('readline-sync')
var userName=readLineSync.question("What's your name?")
console.log(" welcome " +userName+ " To The Ultimate Phineas And Ferb Quiz?")
var score=0

function play(question,answer){
var userAnswer=readLineSync.question(question)
if(userAnswer.toLowerCase()===answer.toLowerCase())
{
  console.log("right answer")
score++
}
else{
  console.log("wrong answer")
}
console.log("current score:",score)
console.log("**************")
}
var questions=[{
  question:"What relation is Phineas to Ferb?",
  answer:"step-brother"
},{question:"What is Phineas' surname?",
  answer:"flynn"},
  {question:"What species is Perry?",
  answer:"platypus"},
  {question:"Who is agent P",
  answer:"perry"},
  {question:"What's their sister called?",
  answer:"candace"}
]
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("your score is "+score)