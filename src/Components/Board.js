import React, { useState } from 'react';
// import Marquee from "react-fast-marquee";
import Questions from './Questions';
import Marquee from 'react-double-marquee';

export default function Board() {

  // const [ round, setRound1 ] = useState({
  // });
const [Question, setQuestions ] = useState(Questions)
  var score = 0;
  
  function correctAnswer(e){
    e.preventDefault();
    let total = document.getElementById('score');
    score += 50;
    total.innerHTML = score;
    let challenge = document.getElementById('YourQuestion');
    challenge.innerHTML = "";

    let questionbutton = document.getElementById('QuestionButton');
    questionbutton.disabled = false;

    let button1 = document.getElementById('rightanswer');
    let button2 = document.getElementById('answer2');
    let button3 = document.getElementById('answer3');
    let button4 = document.getElementById('answer4');
    let button5 = document.getElementById('answer5');

  button1.disabled = true;
  button2.disabled = true;
  button3.disabled = true;
  button4.disabled = true;
  button5.disabled = true;
  }

  function wrongAnswer(e){
    e.preventDefault();
    let total = document.getElementById('score');
    score -= 50;
    total.innerHTML = score;
    alert("Nope!");
    let button1 = document.getElementById('rightanswer');
    let button2 = document.getElementById('answer2');
    let button3 = document.getElementById('answer3');
    let button4 = document.getElementById('answer4');
    let button5 = document.getElementById('answer5');

  button1.disabled = true;
  button2.disabled = true;
  button3.disabled = true;
  button4.disabled = true;
  button5.disabled = true;

  let challenge2 = document.getElementById('YourQuestion');
  challenge2.innerHTML = "";

  let questionbutton2 = document.getElementById('QuestionButton');
  questionbutton2.disabled = false;
  }



var i = 1;
  function nextQuestion(){
    const answers = ["rightanswer", "answer2", "answer3", "answer4", "answer5"]
    const newList = []; 
i = 1;
console.log(answers);
while(i < answers.length){
  // console.log("length:", answers.length)
let randNum =  Math.floor(Math.random() * answers.length-1) + 1;
newList.push(answers[randNum]);
answers.splice([randNum], 1)  
}
if(answers.length === 1){
    newList.push(answers[0])
  }
console.log("new list:", newList);
  let randomQuestion = Math.floor(Math.random() * Questions.length-1) + 1;
  let question = Questions[randomQuestion];
  console.log("Question:", question.question)
  let challenge = document.getElementById('YourQuestion');
  let words = question.question;
  challenge.append(words);
  let answer = question.answer;
  let answer1 = document.getElementById(`${newList[0]}`);
  let answer2 = document.getElementById(`${newList[1]}`);
  let answer3 = document.getElementById(`${newList[2]}`);
  let answer4 = document.getElementById(`${newList[3]}`);
  let answer5 = document.getElementById(`${newList[4]}`);
  let area1 = document.getElementById('area1');

  answer1.innerHTML = question.placebo1;
  console.log("answer1:", question.placebo1) //remove
  answer2.innerHTML = question.placebo2;
  console.log("answer2:", question.placebo2) //remove
  answer3.innerHTML = question.placebo5;
  console.log("answer5:", question.placebo5) //remove
  answer4.innerHTML = question.placebo4;
  console.log("answer4:", question.placebo4) //remove
  answer5.innerHTML = question.placebo3;
  console.log("answer3:", question.placebo3) //remove

  area1.append(answer1);
  area1.append(answer2);
  area1.append(answer3);
  area1.append(answer4);
  area1.append(answer5);
  let correctAnswer = document.getElementById('rightanswer');
  correctAnswer.innerHTML = answer
    let questionbutton = document.getElementById('QuestionButton');
    questionbutton.disabled = true;
    let button1 = document.getElementById('rightanswer');
    let button2 = document.getElementById('answer2');
    let button3 = document.getElementById('answer3');
    let button4 = document.getElementById('answer4');
    let button5 = document.getElementById('answer5');

  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
  button4.disabled = false;
  button5.disabled = false;

  }






  return (
      <>
    <div id="main">
      <Marquee>
        <center><p id="YourQuestion"></p></center>
      </Marquee>
      <img alt="Elements" id="mainBoard" className="table" src={`${process.env.PUBLIC_URL}/elementTable_Background.png`}/>
    <sidenav id="sidenav">
    <div>
        <center><div id="scoreHeading">SCOREBOARD</div></center>
        <hr/>
        <hr/>
        <center><div id="score">{score}</div></center>
        <hr/>
    </div>
    <center>
    <div id="area1"><br/></div>
    <div id="area2"><br/></div>
    <div id="area3"><br/></div>
    <div id="area4"><br/></div>
    <div id="area5"><br/></div>
    <br/>
    <hr/>
    <button id="QuestionButton" onClick={nextQuestion}>Next Question</button>

    </center>
    </sidenav>
    </div>
    <button className="answerButton"  id="rightanswer" onClick={correctAnswer}>correctAnswer</button>
    <button className="answerButton" id="answer2" onClick={wrongAnswer}>Answer2</button>
    <button className="answerButton" id="answer3" onClick={wrongAnswer}>Answer3</button>
    <button className="answerButton" id="answer4" onClick={wrongAnswer}>Answer4</button>
    <button className="answerButton"id="answer5"  onClick={wrongAnswer}>Answer5</button>
    <br/>
    <hr/>
    </>
  )
}
