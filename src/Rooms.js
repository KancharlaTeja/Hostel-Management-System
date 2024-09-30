import React from "react";
import './Rooms.css';
import { useNavigate } from "react-router-dom";


function Rooms() {
    const navigate = useNavigate();

    function handleRooms(roomId)
        {
            navigate(`/Rooms/${roomId}`, { state: { from: "Rooms" } });
        }

  
    return (
        <div className="container">
            <h2 style={{color:'red',marginTop:'0px'}}>Hostel Rooms</h2> 
            <table>
                <thead>
                    <tr>
                        <th colSpan="5" style={{textAlign: 'center', color:'green'}}>One Share</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(101)}}className="room-button">101</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(102)}} className="room-button">102</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(103)}} className="room-button">103</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(104)}} className="room-button">104</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(105)}} className="room-button">105</button></td>
                    </tr>
                </tbody>
</table>
<table>
                <thead>
                    <tr>
                        <th colSpan="4" style={{textAlign: 'center',color:'green'}}>Two Share</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(201)}} className="room-button">201</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(202)}} className="room-button">202</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(203)}} className="room-button">203</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(204)}} className="room-button">204</button></td>
                    </tr>
                </tbody>
</table>

            <table>
                <thead>
                    <tr>
                        <th colSpan="5" style={{textAlign: 'center',color:'green'}}>Three Share</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(301)}} className="room-button">301</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(302)}} className="room-button">302</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(303)}} className="room-button">303</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(304)}} className="room-button">304</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(305)}} className="room-button">305</button></td>
                    </tr>
                </tbody>
            </table>


            <table>
                <thead>
                    <tr>
                        <th colSpan="3" style={{textAlign: 'center',color:'green'}}>Four Share</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(401)}} className="room-button">401</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(402)}} className="room-button">402</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(403)}} className="room-button">403</button></td>
                    </tr>
                </tbody>
            </table>


            <table>
                <thead>
                    <tr>
                        <th colSpan="4" style={{textAlign: 'center',color:'green'}}>Five Share</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(501)}} className="room-button">501</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(502)}} className="room-button">502</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(503)}} className="room-button">503</button></td>
                        <td style={{ textAlign: 'center' }}><button onClick={()=>{handleRooms(504)}} className="room-button">504</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Rooms;
