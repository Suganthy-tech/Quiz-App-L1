var readlineSync=require('readline-sync');
var score=0;
var questionlist=[
  {

question:"What is My Full Name?",
answer:"Suganthy Sathiya Narayanan"
},{
question:"How Old Am?",
answer:"24"
},{
question:"What is my favorite food?",
answer:"Biriyani"
},{
question:"Where do I live?",
answer:"Chennai"
}
];
 var username= readlineSync.question('What is your name?');

startQuiz();

function startQuiz(){
  console.log('Welcome ' +username+ '. Do you know Suganthy')
questionlist.forEach(res=>{
  askQuestion(res);
});
  console.log('Your score is:' + score);

}
function askQuestion(quizObject){
 var answer= readlineSync.question(quizObject.question)
  if(quizObject.answer===answer){
    score +=1;
    console.log('Right Answer!');
    console.log('Current Score: '+ score);
    console.log('------------------------ ');

  }else{
  //  score!==0? score-=1:"";
  console.log('Wrong Answer!');
    console.log('Current Score: '+ score);
    console.log('------------------------ ');

  }
}