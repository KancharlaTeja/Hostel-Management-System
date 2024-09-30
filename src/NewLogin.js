import React, {  useState } from 'react';

import axios from 'axios';
import './NewLogin.css'; // Import the CSS file for styles

function NewLogin() 
{
      const [formData, setFormData] = useState({
        name: '',
        email:'',
        aadhar: '',
        phone: '',
        dateofjoining: '',
        roomShare: '',
        roomNo:'',
        amount: '',
        location: ''
      });
  
 


 


        const regName = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
        const regAadhar = /^\d{12}$/;
        const regPhone = /^\d{10}$/;
        const regAmount = /^\d+$/;
        const regLocation = /^[A-Za-z\s]+$/;

  
        const handleChange = (e) => {
          
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });

        };

  
  function Validate(){
    const check_data = formData;
    
    const hostelRooms = {'1':['101','102','103','104','105'],
      '2':['201','202','203','204'],
      '3':['301','302','303','304','305'],
      '4':['401','402','403'],
      '5':['501','502','503','504','505']
     }

     if(!regName.test(check_data.name))
     {
      alert("Hello Mr.\n               User name must follow this format 'First Last'\n               Ex:'Teja Kancharla' ");
      return false;
     }

     if(!regAadhar.test(check_data.aadhar))
     {
      alert("Hello Mr.\n               The Aadhaar number must contain exactly 12 digits.");
      return false;
     }

     if(!regPhone.test(check_data.phone))
     {
      alert("Hello Mr.\n               Phone number must contains exactly 10 digits.");
      return false;
     }
   

     if(!regAmount.test(check_data.amount))
     {
     alert("Hello Mr.\n               Amount contains only Numbers");
      return false;

     }
     if(!regLocation.test(check_data.location))
     {
      alert("Hello Mr.\n               Location conatins only alphabets");
      return false;
     }

     if(!hostelRooms[check_data.roomShare].includes(check_data.roomNo)){
        
          alert(`Hello Mr.\n               Available Rooms in ${check_data.roomShare} Share was [${hostelRooms[check_data.roomShare]}]` )
        return false;
        
      }
      return true;
    }






  async function handleSubmit(e)
  {
    e.preventDefault();

    if(!Validate()){
      return;
    }

      try
      {
        // Combine the selected date with the current time
        const selectedDate = new Date(formData.dateofjoining);
        const currentTime = new Date();
  
        selectedDate.setHours(currentTime.getHours());
        selectedDate.setMinutes(currentTime.getMinutes());
        selectedDate.setSeconds(currentTime.getSeconds());
        selectedDate.setMilliseconds(currentTime.getMilliseconds());
        const istOffset = 5.5 * 60 * 60 * 1000;
        const finalDate = new Date(selectedDate.getTime()+istOffset).toISOString();
        // Update the form data with the new date
        const updatedFormData = {
          ...formData,
          dateofjoining: finalDate // Convert date to ISO format
        };
  
            const response = await axios.post("http://localhost:1324/new-login",{
                name: updatedFormData.name,
                email:updatedFormData.email,
                aadhar: updatedFormData.aadhar,
                phone: updatedFormData.phone,
                dateofjoining: updatedFormData.dateofjoining,
                roomShare: updatedFormData.roomShare,
                roomNo:updatedFormData.roomNo,
                amount: updatedFormData.amount,
                location: updatedFormData.location
            });


            const responseData = response.data;
            if(responseData.status ==='duplicate'){
              alert("Hey Admin...!\n                       This Aadhar num is already there in our hostel")
            }
            else if (responseData.status === 'success')
              {
              
                 alert("User Added Successfully");
              }
            
            else if(responseData.status==='alreadyuser')
            {
             
              alert(`Hey.... Mr.\n               Room ${responseData.msg} was currently unavailable`);
            }
            else{
              alert('error')
            }
            
          }
        catch(err)
        {
          alert("error coming teja");
        }
  }

  return (
    <div class='container'>
    <h2 style={{color:'red',marginTop:'0px'}}>Student New Login</h2>
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="aadhar">Aadhaar Number </label>
          <input
            type="text"
            id="aadhar"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateofjoining">Joining Date </label>
          <input
            type="date"
            id="dateofjoining"
            name="dateofjoining"
            value={formData.dateofjoining}
            onChange={handleChange}
            required
          />
        </div>

          <div className="form-group">
            <label htmlFor="roomShare">Room Share </label>
            <select
              id="roomShare"
              name="roomShare"
              value={formData.roomShare}
              onChange={handleChange}
              required
            >
              <option value="select room share"> select room share</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
        </div>

        <div className="form-group">
          <label htmlFor="roomNo">roomNo </label>
          <input
            type="text"
            id="roomNo"
            name="roomNo"
            value={formData.roomNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-container">
            <button type="submit">Submit</button>
          </div>
      </form>
    </div>
    </div>
  );
}

export default NewLogin;
