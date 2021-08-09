import React from 'react';
import Score from './Score';

export default function Board() {

  let image = document.getElementById('mainBoard');

  if(image){
  image.style.maxWidth = '78%';
  image.style.height = 'auto';
  image.style.border = '10px solid yellow'
}
  return (
      <>
    <div id="main">
      <img alt="Elements" id="mainBoard" className="table" src={`${process.env.PUBLIC_URL}/elementTable_Background.png`}/>
    <sidenav id="sidenav">
    <Score/>
    <button>Question</button>
    <button>Question</button>
    <button>Question</button>
    </sidenav>
    </div>
    </>
  )
}
