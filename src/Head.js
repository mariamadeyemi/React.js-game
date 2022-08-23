import logo from "./images/logo.svg";

const Head = () => {
    return ( 
        <div className="head-title">
            <img src={logo} className="logo-img" alt="logo-img" />
            <div className="score-box">
            <p className="score-title">SCORE <br /> <span className="score-num">0</span></p>
            </div>
            
        </div>
     );
}
 
export default Head;