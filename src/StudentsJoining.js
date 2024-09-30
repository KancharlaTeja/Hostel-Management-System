import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentJoining.css';

function StudentsJoining() {
  const [formData, setFormData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoomShare, setSelectedRoomShare] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post('http://localhost:1324/students-joining');
        const responseData = response.data;
        if (responseData.status === 'success') {
          setFormData(responseData.msg);
        } else if (responseData.status === 'nodata') {
          // alert('No data available.');
        } else {
          alert('An unexpected error occurred.');
        }
      } catch (err) {
        alert('Error fetching data.');
      }
    }

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleRoomShareChange = (e) => {
    setSelectedRoomShare(e.target.value);
  };

  const filteredData = formData.filter((student) => {
    const matchesSearchQuery = student.name.toLowerCase().includes(searchQuery);
    const matchesRoomShare = selectedRoomShare === '' || String(student.roomShare) === selectedRoomShare;
    return matchesSearchQuery && matchesRoomShare;
  });

  return (
    <div className="container">
      <div className="header">
        <h2 style={{color:'red',marginTop:'0px'}}>Students Data</h2>
        <div className="filters">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <select
            value={selectedRoomShare}
            onChange={handleRoomShareChange}
            className="room-share-filter"
          >
            <option value="">Room Shares</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      {Array.isArray(filteredData) && filteredData.length > 0 ? (
        <table style={{backgroundColor:'lightcyan',borderColor:'3px solid black'}}>
          <thead >
            <tr >
              <th style={{textAlign:'center',backgroundColor:'lightgrey',color:'black', border: '1px solid white'}}>Name</th>
              <th style={{textAlign:'center',backgroundColor:'lightgrey',color:'black', border: '1px solid white'}}>Email</th>
              <th style={{textAlign:'center',backgroundColor:'lightgrey',color:'black', border: '1px solid white'}}>Aadhar</th>
              <th style={{textAlign:'center',backgroundColor:'lightgrey',color:'black', border: '1px solid white'}}>Phone</th>
              <th style={{textAlign:'center',backgroundColor:'lightgrey',color:'black', border: '1px solid white'}}>Date of Joining</th>
              <th style={{textAlign:'center',backgroundColor:'lightgrey',color:'black', border: '1px solid white'}}>Room Share</th>
              <th style={{textAlign:'center',backgroundColor:'lightgrey',color:'black', border: '1px solid white'}}>Room no</th>
              <th style={{textAlign:'center',backgroundColor:'lightgrey',color:'black', border: '1px solid white'}}>Amount</th>
              <th style={{textAlign:'center',backgroundColor:'lightgrey',color:'black', border: '1px solid white'}}>Location</th>
            </tr>
          </thead>
          <tbody>
  {filteredData.map((student) => {
    
    return (
      <tr key={student._id}>
        <td style={{ textAlign: 'center' }}>{student.name}</td>
        <td style={{ textAlign: 'center' }}>{student.email}</td>
        <td style={{ textAlign: 'center' }}>{student.aadhar}</td>
        <td style={{ textAlign: 'center' }}>{student.phone}</td>
        <td style={{ textAlign: 'center' }}>{student.dateofjoining}</td> {/* Displaying formatted date and time */}
        <td style={{ textAlign: 'center' }}>{student.roomShare}</td>
        <td style={{ textAlign: 'center' }}>{student.roomNo}</td>
        <td style={{ textAlign: 'center' }}>{student.amount}</td>
        <td style={{ textAlign: 'center' }}>{student.location}</td>
      </tr>
    );
  })}
</tbody>

        </table>
      ) : (
        <h3>No students found</h3>
      )}
    </div>
  );
}

export default StudentsJoining;
