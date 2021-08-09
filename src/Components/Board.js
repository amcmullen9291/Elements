import React from 'react';

export default function Board() {

  // const [ round, setRound1 ] = useState({
  // });

  var score = 0;
  
  function correctAnswer(e){
    e.preventDefault();
    let total = document.getElementById('score');
    score += 50;
    total.innerHTML = score;

  }

  function wrongAnswer(e){
    e.preventDefault();
    alert("Nope!");
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
  let answer = "FE"
  let answer1 = document.getElementById(`${newList[0]}`);
  let answer2 = document.getElementById(`${newList[1]}`);
  let answer3 = document.getElementById(`${newList[2]}`);
  let answer4 = document.getElementById(`${newList[3]}`);
  let answer5 = document.getElementById(`${newList[4]}`);
  let area1 = document.getElementById('area1');
  area1.append(answer1);
  area1.append(answer2);
  area1.append(answer3);
  area1.append(answer4);
  area1.append(answer5);
  let correctAnswer = document.getElementById('rightanswer');
  correctAnswer.innerHTML = answer
  }






  return (
      <>
    <div id="main">
      <p>HOWDY</p>
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
    <button onClick={nextQuestion}>Next Question</button>

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
