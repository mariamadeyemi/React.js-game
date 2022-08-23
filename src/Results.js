const Results = ({ youPick, youAlt, getRandomImg }) => {
    return ( 
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
}
 
export default Results;