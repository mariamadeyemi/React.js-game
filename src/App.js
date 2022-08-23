//import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Head from "./Head";
import Rules from "./Rules";
import StepOne from "./StepOne";
import scissors from "./images/icon-scissors.svg";
import paper from "./images/icon-paper.svg";
import rock from "./images/icon-rock.svg";
import SecondStep from "./SecondStep";
import { useState } from "react";
import triangle from "./images/bg-triangle.svg";


function App() {
  const [isShow, setIsShow] = useState(false);
  const [result, setResult] = useState("");
  const [game, setGame] = useState(
    <div className ="game-section-container" style={{backgroundImage: `url(${triangle})`, backgroundRepeat: "no-repeat", backgroundSize: "contain"}} onClick = {handleClick}>
    
   <div className="paper-img" id= {paper}><img src = {paper} className="pic-paper" alt="paper-img" id= {paper} /></div>
   <div className="scissors-img" id= {scissors}><img src = {scissors} className="pic-scissors" alt="scissors-img" id= {scissors} /> </div>
   <div className="rock-img" id= {rock}><img src = {rock} className="pic-rock" alt="rock-img" id= {rock} /></div>
   
    </div>
    );

    
    function handleClick (event) {
      
      let youPickImg = event.target.id;
      let youPick = youPickImg;
      let youAlt = event.target.alt;
      console.log(youPick);

      const randomImage = [paper, scissors, rock]

      console.log(randomImage);
    
       let getRandomImgPosition = Math.floor(Math.random() * randomImage.length);
    
       let getRandomImg = randomImage[getRandomImgPosition];
      console.log(getRandomImg === youPick);
      
      setGame(
        <div className="step-two-container">
        <div className="you-picked">
         <img src={youPick} className="paper-img2" alt= {youAlt} /> 
        <p className="you-txt">YOU PICKED</p>
        </div>
        
        <div className="house-picked">
        {/* <div className="house-img"></div> */}
         <img src = {getRandomImg} className="scissors-img2" alt="scissors-img" /> 
        <p className="house-txt">THE HOUSE PICKED</p>
        </div>
        </div>
        );

        if (youPick === getRandomImg) {
           setResult("DRAW");
        } else if (getRandomImg === randomImage[2] && youPick === randomImage[0]) {
           setResult("YOU WIN");
        } else if (youPick === randomImage[2] && getRandomImg === randomImage[0]) {
           setResult("YOU LOSE");
        } else if (youPick === randomImage[0] && getRandomImg === randomImage[1]) {
           setResult("YOU LOSE");
        } else if (youPick === randomImage[1] && getRandomImg === randomImage[0]) {
          setResult("YOU WIN");
       } else if (youPick === randomImage[2] && getRandomImg === randomImage[1]) {
        setResult("YOU WIN");
     } else if (youPick === randomImage[1] && getRandomImg === randomImage[2]) {
      setResult("YOU LOSE");
   }
   setIsShow(true); 
}

 
  return (
    // <Router>
<div className= "App">
  <Head />
   <StepOne 
    game= {game}
  />
  
  {isShow ? <SecondStep  result= {result} /> : null } 
   <Rules />
   </div>
    /* </Router> */
   
  );
}

export default App;
