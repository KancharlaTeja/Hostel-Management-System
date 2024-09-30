import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import './RoomDetails.css'
function RoomDetails() {
    const [user_names, update_user_names] = useState([]);
    const currentURL = useLocation();
    const { roomId } = useParams();
    const [user, updateUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function handleRoomData() {
            try {
                const response = await axios.post(`http://localhost:1324/Rooms/${roomId}`)
                const responseData = response.data;
                if (responseData.status === 'success') {
                    updateUser([responseData.msg])

                    let User_names = responseData.msg.map(user => user.name)
                    if (roomId.toString()[0] === '5') {
                        while (User_names.length < 5) {
                            User_names.push("Vacancy")
                        }
                    }

                    else if (roomId.toString()[0] === '4') {
                        while (User_names.length < 4) {
                            User_names.push("Vacancy")
                        }
                    }

                    else if (roomId.toString()[0] === '3') {
                        while (User_names.length < 3) {
                            User_names.push("Vacancy")
                        }
                    }
                    else if (roomId.toString()[0] === '2') {
                        while (User_names.length < 2) {
                            User_names.push("Vacancy")
                        }
                    }
                    else if (roomId.toString()[0] === '1') {
                        while (User_names.length < 1) {
                            User_names.push("Vacancy")
                        }
                    }



                    update_user_names(User_names);
                }
                else if (responseData.status === 'nouser') {

                }
                else {
                    alert("Failed Teja")
                }
            }
            catch (err) {
                alert("Error Teja....")
            }
        }
        handleRoomData();
    }, [roomId])



    function handleBack() {
        
        const URL_1 = currentURL.state?.from || "unknown";
        if(URL_1 === 'Vacancy1st'){
            navigate('/firstfloor')
        }
        else if(URL_1 === 'Vacancy2nd'){
            navigate('/secondfloor')
        }
        else if(URL_1 === 'Vacancy3rd'){
            navigate('/thirdfloor')
        }
        else if(URL_1 === 'Vacancy4th'){
            navigate('/fourthfloor')
        }
        else if(URL_1 === 'Vacancy5th'){
            navigate('/fifthfloor')
        }
        else{
            navigate('/Rooms')
        }
        
    }

    let content;
    switch (roomId.toString()[0]) {
        case '1':
            content = (

                <div style={{
                    width: "100%",
                    marginTop: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        maxWidth: "1200px"
                    }}>
                        {user_names.map((content, subIndex) => (
                            <div key={subIndex} style={{ 
                                borderColor: content === 'Vacancy' ? 'red' : 'green', 
                                border: content === 'Vacancy' ? '2px solid red' : '2px solid green', 
                                backgroundColor: content === 'Vacancy' ? 'white' : 'lightgreen',
                                width: "25%",
                                margin: "10px",
                                height: "300px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxSizing: "border-box",
                                borderTopLeftRadius: "10%",
                                borderBottomRightRadius: "10%"
                            }}>
                                <h1 style={{ 
                                    fontSize: content === 'Vacancy' ? '25px' : '40px', 
                                    color: content === 'Vacancy' ? 'green' : 'blue' 
                                }}>
                                    {content}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
                
            );
            break;

        case '2':
            content = (

                <div style={{
                    width: "100%",
                    marginTop: "90px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        maxWidth: "1200px"
                    }}>

                        {user_names.map((content, subIndex) => (
                            <div  key={subIndex} style={{ borderColor: content === 'Vacancy' ? 'lightred' : 'green', border: content === 'Vacancy' ? '2px solid red' : '2px solid green', backgroundColor: content === 'Vacancy' ? 'white' : 'lightgreen',
                                width: "50%",
                                margin: "10px",
                                height: "300px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxSizing: "border-box",
                                borderTopLeftRadius: "10%",
                                borderBottomRightRadius: "10%"
                             }}>
                                <h1 style={{ fontSize: content === 'Vacancy' ? '40px' : '50px', color: content === 'Vacancy' ? 'green' : 'blue ' }}>
                                    {content}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>

            );
            break;

        case '3':
            content = (
            <div style={{
                width: "100%",
                marginTop: "90px",
                display: "flex",
                justifyContent: "center"
            }}>
                <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        maxWidth: "1200px"
                    }}>

                    {user_names.map((content, subIndex) => (
                        <div key={subIndex} style={{ borderColor: content === 'Vacancy' ? 'lightred' : 'green', border: content === 'Vacancy' ? '2px solid red' : '2px solid green', backgroundColor: content === 'Vacancy' ? 'white' : 'lightgreen',
                            width: "30%",
                                margin: "10px",
                                height: "300px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxSizing: "border-box",
                                borderTopLeftRadius: "10%",
                                borderBottomRightRadius: "10%"
                         }}>
                            <h1 style={{ fontSize: content === 'Vacancy' ? '25px' : '40px', color: content === 'Vacancy' ? 'green' : 'blue' }}>
                                {content}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>);
            break;
        case '4':
            content = (
                <div style={{
                    width: "100%",
                    marginTop: "90px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        maxWidth: "1200px"
                    }}>
                        {user_names.map((student, index) => (
                            <div key={index} style={{
                                borderColor: student === 'Vacancy' ? 'lightred' : 'green', border: student === 'Vacancy' ? '2px solid red' : '2px solid green', backgroundColor: student === 'Vacancy' ? 'white' : 'lightgreen',
                                width: "25%",
                                margin: "10px",
                                height: "300px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxSizing: "border-box",
                                borderTopLeftRadius: "10%",
                                borderBottomRightRadius: "10%"
                            }}>
                                <h1 style={{ fontSize: student === 'Vacancy' ? '25px' : '40px', color: student === 'Vacancy' ? 'green' : 'blue ' }}>
                                    {student}</h1>
                            </div>
                        ))}
                    </div>

                </div>

            );
            break;
        case '5':
            content = (
                <div style={{
                    width: "100%",
                    marginTop: "90px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        maxWidth: "1200px"
                    }}>

                        {user_names.map((content, subIndex) => (
                            <div className="child" key={subIndex} style={{ borderColor: content === 'Vacancy' ? 'lightred' : 'green', border: content === 'Vacancy' ? '2px solid red' : '2px solid green', backgroundColor: content === 'Vacancy' ? 'white' : 'lightgreen',
                                width: "18%",
                                margin: "10px",
                                height: "300px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxSizing: "border-box",
                                borderTopLeftRadius: "10%",
                                borderBottomRightRadius: "10%"
                             }}>
                                <h1 style={{ fontSize: content === 'Vacancy' ? '25px' : '40px', color: content === 'Vacancy' ? 'green' : 'blue ' }}>
                                    {content}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>

            )
            break;
        default:
            content = (user);
    }

    return (
        <div>

            <h2>Room {roomId} Details</h2>
            <button onClick={handleBack} style={{ position: 'absolute', top: '20px', right: '20px', marginTop: '75px', marginRight: '20px' }}>
                Exit
            </button>
            {content}


        </div>
    )
}

export default RoomDetails;




