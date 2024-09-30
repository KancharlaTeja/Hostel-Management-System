import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Firstfloor() {
    const navigate = useNavigate();
    const rooms = [101, 102, 103, 104, 105];
    console.log(rooms);
    const [finalrooms, updateFinalRooms] = useState([]);

    useEffect(() => {
        async function Fetch1stfloor() {
            try {
                
                const response = await axios.post("http://localhost:1324/firstfloor");
                const responseData = response.data;
                
                if (responseData.status === 'success') {
                   
                    updateFinalRooms(responseData.msg);
                } else {
                    alert("Error receiving data");
                }
            } catch (err) {
                alert('Error occurred');
                console.error(err);
            }
        }
        Fetch1stfloor();
    }, []);

    function handleFirst(roomNo) {
        navigate(`/Rooms/${roomNo}`, { state: { from: "Vacancy1st" } });
    }
    function handleBack() {
        navigate('/Vacancy')
    }
    return (
        <>
            <h2>1st Floor Vacancies</h2>
            {finalrooms.map((roomNo, index) => (
                <div key={index} style={{ textAlign: 'center', marginTop: '50px' }}>
                    <button 
                        onClick={() => handleFirst(roomNo)} 
                        style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}
                    >
                        {roomNo}
                    </button>
                </div>
            ))}  <button onClick={handleBack} style={{ position: 'absolute', top: '20px', right: '20px', marginTop: '75px', marginRight: '20px' }}>
            Exit
        </button>
        </>
    );
}

export default Firstfloor;
