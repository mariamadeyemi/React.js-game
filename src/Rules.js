import modal from "./images/image-rules.svg";
import { useState } from "react";

const Rules = () => {


  
  const [ruleImg, setRuleImg] = useState("");
const handleRuleBtnClick = () => {
  setRuleImg(
<div className="modal-box"> 
<div className="modal-box-content">
  <h2>RULES</h2>
<span className="close" onClick={() => {
          setRuleImg(ruleImg);
        }}>&times;</span>
        <img src= {modal} alt="modal" className="modal-img" />
</div>
        </div>
  );
}

    return ( 
        <div className="rules-btn-container">
        <button className="rules-btn" onClick={handleRuleBtnClick}>RULES</button>
        {ruleImg}
       </div> 
     );
}
 
export default Rules;