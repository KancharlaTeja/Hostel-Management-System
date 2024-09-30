import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ThirdFloor() {
    const navigate = useNavigate();
    const rooms = [301, 302, 303, 304, 305];
    console.log(rooms);
    const [finalrooms, updateFinalRooms] = useState([]);

    useEffect(() => {
        async function Fetch3rdfloor() {
            try{
                const response = await axios.post("http://localhost:1324/thirdfloor");
                const responseData = response.data;
                if(responseData.status === 'success'){
                    
                     updateFinalRooms(responseData.msg);
                  }
                else if(responseData.status === 'fill'){
                    alert("filled")

                }
                else{
                    alert('sory')
                }
            }
            catch(err){
                alert('error')
            }
            
        }
        Fetch3rdfloor();

    }, []);

    function handleFirst(roomNo) {
        navigate(`/Rooms/${roomNo}`, { state: { from: "Vacancy3rd" } });
    }
    function handleBack() {
        navigate('/Vacancy')
    }
    return (
        <>
            <h2>3rd Floor Vacancies</h2>
            
            {finalrooms.map((roomNo, index) => (
                <div key={index} style={{ textAlign: 'center', marginTop: '50px' }}>
                    <button 
                        onClick={() => handleFirst(roomNo)} 
                        style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}
                    >
                        {roomNo}
                    </button>

                </div>
            ))}
              <button onClick={handleBack} style={{ position: 'absolute', top: '20px', right: '20px', marginTop: '75px', marginRight: '20px' }}>
                Exit
            </button>
        </>
    );
}

export default ThirdFloor;
