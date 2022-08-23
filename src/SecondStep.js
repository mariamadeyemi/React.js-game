
const SecondStep = ( { result } ) => {
const btnClick = () => window.location.reload();


    return ( 
        <div className="result">
 <h1>{result}</h1>
 <button className="result-btn" onClick={btnClick}>PLAY AGAIN</button>
        </div>


     );
}
 
export default SecondStep;