import React from "react";
import { Link } from "react-router-dom";
// import './Vacancy.css';
function Vacancy(){
    return (
        <div>
            <h2 style={{textAlign:'center',marginLeft:'620px',marginTop:'40px'}}>Vacancies</h2>
            <div style={{textAlign:'center', marginTop:'40px',color:"green",fontWeight: 'bold'}}>
            

                <ul>
                    <Link to="/firstfloor" style={{color:'green'}}>1st Floor</Link>
                </ul>
                    <br></br>
                <ul>
                    <Link to="/secondfloor" style={{color:'green'}}>2nd Floor</Link>
                </ul>
                <br></br>
                <ul>
                    <Link to ="/thirdfloor" style={{color:'green'}}>3rd Floor</Link>
                </ul>
                <br></br>
                <ul>
                    <Link to ="/fourthfloor" style={{color:'green'}}>4th Floor</Link>
                </ul>

                <br></br>
                <ul>
                    <Link to ="/fifthfloor" style={{color:'green'}}>5th Floor</Link>
                </ul>
           </div>
           
    </div>
    )
}


export default Vacancy;