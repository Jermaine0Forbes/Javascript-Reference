import React, {  useState, useEffect } from 'react';
import {Button,Card} from 'react-bootstrap';

export const HoverSection = () => {

  const [hoverOn, setHoverOn] = useState(false);

  useEffect(() =>{
    let box = document.querySelector("#box-hover");
    if(hoverOn){
      box.classList.replace("bg-danger", "bg-success");
    }else{
      if (box.classList.contains("bg-success")) box.classList.replace("bg-success","bg-danger")
    }
  },[hoverOn])

  return (
    <Card className="hover-section">
        <h2> Here is an example of hover </h2>
        <div id="box-hover" onMouseOver={() => setHoverOn(true)}  onMouseOut={() => setHoverOn(false)} style={{ transition:"all 0.3s", height:"200px", width:"200px"}} className="box bg-danger mx-auto my-4">
        </div>
    </Card>
  )
}

export const ButtonEvent = () =>{

  const [counter,setCounter] = useState(0);

  useEffect(() => {
    if(counter === 0)
    return;

    document.querySelector("div.result").innerHTML = `you clicked ${counter} times!`;
  },[counter])

  return (
    <div className="App-event">
      <p>  Click here to see something cool</p>
      <Button variant="primary" onClick={() => setCounter(counter+1)}>Click on this</Button>
    </div>
  )
}
