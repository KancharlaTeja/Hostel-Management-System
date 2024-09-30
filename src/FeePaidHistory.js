import axios from 'axios';
import React, { useEffect, useState } from 'react';

function FeePaidHistory() {
  const [passData, setStudents] = useState([]);

  useEffect(() => {
    async function fetchFeeData() {
      try {
        const response = await axios.post("http://localhost:1324/fee-history");
        const responseData = response.data;

        if (responseData.status === 'success') {
          const transformedData = responseData.msg.map(stu => ({
            name: stu.name,
            email:stu.email,
            phone: stu.phone,
            paidDate: stu.date,
          }));

          setStudents(transformedData);
        } else {
          alert("Something went wrong with the response.");
        }
      } catch (err) {
        alert("Error fetching data: " + err.message);
      }
    }

    fetchFeeData();
  }, []);

  return (
    <div className='container' style={{ padding: '20px' }}>
      <h2 style={{color:'red',marginTop:'0px'}}>Fee Paid History</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',  // Adjust height to auto to avoid overlap
        width: '60%'
      }}>
        <table style={{ backgroundColor: 'lightcyan', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'center', backgroundColor: 'lightgrey', borderColor: 'white' }}>Name</th>
              
              <th style={{ textAlign: 'center', backgroundColor: 'lightgrey', borderColor: 'white' }}>Email</th>
              <th style={{ textAlign: 'center', backgroundColor: 'lightgrey', borderColor: 'white' }}>Phone</th>
              <th style={{ textAlign: 'center', backgroundColor: 'lightgrey', borderColor: 'white' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {passData.map((stu, ind) => (
              <tr key={ind}>
                <td style={{ textAlign: 'center' }}>{stu.name}</td>
                <td style={{ textAlign: 'center' }}>{stu.email}</td>
                <td style={{ textAlign: 'center' }}>{stu.phone}</td>
                <td style={{ textAlign: 'center' }}>{stu.paidDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeePaidHistory;
