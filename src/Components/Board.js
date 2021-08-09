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
  }


  return (
      <>
    <div id="main">
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
    <div id="button1"><br/></div>
    <div id="button2"><br/></div>
    <div id="button3"><br/></div>
    <div id="button4"><br/></div>
    <div id="button5"><br/></div>
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
    <button onClick={nextQuestion}>Next Question</button>
    </>
  )
}
