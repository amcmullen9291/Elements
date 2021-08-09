import React from 'react';
import Score from './Score';

export default function Board() {
  return (
      <>
    <div id="main">
      <img alt="Elements" id="mainBoard" className="table" src={`${process.env.PUBLIC_URL}/elementTable_Background.png`}/>
    <sidenav id="sidenav">
    <Score/>
    <center><button className="answerButton">Question</button><br/>
    <button className="answerButton">Question</button><br/>
    <button className="answerButton">Question</button><br/>
    <button className="answerButton">Question</button><br/>
    <button className="answerButton">Question</button><br/>
    </center>
    </sidenav>
    </div>
    </>
  )
}
