import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainDashboard.css';

function MainDashboard()
 {
      const getTimeAndDate = () => {
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000;
        return new Date(now.getTime() + istOffset).toISOString();
      };

  const [currentDateTime, setCurrentDateTime] = useState(getTimeAndDate());
  const [students, setStudents] = useState([]);
  const [updateData, setUpdateData] = useState({ name: '',email:'', phone: '', PaidMonth: '', dueDate: '', paid: '', aadhar: '' ,amount:''});
  const [flag, setFlag] = useState(false);
  const addFiveMinutes = (dateString) => {
    const date = new Date(dateString);
    date.setMinutes(date.getMinutes() + 2);
    return date.toISOString();
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(getTimeAndDate());
      // console.log(currentDateTime);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on component unmount
  }, [currentDateTime]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:1324/main-dashboard");
        const responseData = response.data;
        if (responseData.status === 'success') {
          const transformedData = responseData.msg.map(student => ({
            name: student.name,
            email:student.email,
            phone: student.phone,
            PaidMonth: student.lastpaid,
            dueDate: student.lastpaid === student.due ? addFiveMinutes(student.due) : student.due,
            paid: student.paid,
            aadhar: student.aadhar,
            amount:student.amount
          }));
          setStudents(transformedData);
          console.log('teja', transformedData);
        } else if (responseData.status === 'nodata') {
          alert('Failed Teja...!');
        }
      } catch (err) {
        alert("Database error");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (flag) {
      const updateDashboard = async () => {
        try {
          const studentU = updateData;

          const response = await axios.post("http://localhost:1324/dashboardupdate", {
            name: studentU.name,
            email:studentU.email,
            phone: studentU.phone,
            PaidMonth: studentU.PaidMonth,
            dueDate: studentU.dueDate,
            paid: studentU.paid,
            aadhar: studentU.aadhar,
            timec: currentDateTime
          });
          const responseData = response.data;
          if (responseData.status === 'success') {
            const transformedData = responseData.msg.map(student => ({
              name: student.name,
              email:student.email,
              phone: student.phone,
              PaidMonth: student.lastpaid,
              dueDate: student.due,
              paid: student.paid,
              aadhar: student.aadhar
            }));
            setStudents(transformedData);
          } else if (responseData.status === 'sorry') {
            alert("No documents were updated");
          }
        } catch (err) {
          alert("Database error");
        }
        setFlag(false);  // Reset flag after update
      };
      updateDashboard();
    }
  }, [flag, updateData, currentDateTime]);





  const handleButtonClick = async (index) => {
    const updatedStudents = students.map((student, i) => {
      if (i === index) {
        const newDueDate = addFiveMinutes(student.dueDate);
        const updatedStudent = {
          name: student.name,
          email:student.email,
          phone: student.phone,
          PaidMonth: student.dueDate,
          dueDate: newDueDate,
          paid: false,
          aadhar: student.aadhar
        };
        setUpdateData(updatedStudent);
        setFlag(true);
        return updatedStudent;
      }
      return student;
    });
    setStudents(updatedStudents);
  };
 
  
  return (
    <div className='container'>
      <h2 style={{marginTop:'0px'}}>Main Dashboard</h2>
      <table style={{ backgroundColor: 'lightcyan' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'center', backgroundColor: 'lightgrey', color: 'black', border: '1px solid white' }}>Name</th>
            <th style={{ textAlign: 'center', backgroundColor: 'lightgrey', color: 'black', border: '1px solid white' }}>Phone</th>
            <th style={{ textAlign: 'center', backgroundColor: 'lightgrey', color: 'black', border: '1px solid white' }}>Last Paid Date</th>
            <th style={{ textAlign: 'center', backgroundColor: 'lightgrey', color: 'black', border: '1px solid white' }}>Due Date</th>
            <th style={{ textAlign: 'center', backgroundColor: 'lightgrey', color: 'black', border: '1px solid white' }}>Status</th>
            <th style={{ textAlign: 'center', backgroundColor: 'lightgrey', color: 'black', border: '1px solid white' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students
            .map((student, index) => {
              const isDue = Date.parse(currentDateTime) >= Date.parse(student.dueDate);
              

              return (
                <tr key={index}>
                  <td style={{ textAlign: 'center' }}>{student.name}</td>
                  <td style={{ textAlign: 'center' }}>{student.phone}</td>
                  <td style={{ textAlign: 'center' }}>{student.PaidMonth}</td>
                  <td style={{ textAlign: 'center' }}>{student.dueDate}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span style={{
                      backgroundColor: isDue ? 'red' : 'green',
                      color: 'white',
                      padding: '5px 5px',
                      borderRadius: '3px',
                      display: 'inline-block',
                      textAlign: 'center',
                      width: '50%'
                    }}>
                      {isDue ? "Due" : "Paid"}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => handleButtonClick(index)}
                      style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '5px 10px',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: isDue ? 'pointer' : 'not-allowed',
                        opacity: isDue ? 1 : 0.6
                      }}
                      disabled={!isDue}  // Disable the button if it's not active
                    >
                      Mark as Paid
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default MainDashboard;