
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentsJoining from './StudentsJoining';
import MainDashboard from './MainDashboard';
import FeePaidHistory from './FeePaidHistory';
import NewLogin from './NewLogin';
import Rooms from './Rooms';
import DefaultHeading from './defaultroute';
import RoomDetails from './RoomDetails';
import './App.css';
import Vacancy from './Vacancy';
import React from 'react';
import Firstfloor from './1stfloor';
import Secondfloor from './2ndfloor';
import ThirdFloor from './3rdfloor';
import FourthFloor from './4thfloor';
import FifthFloor from './5thfloor';

// import { createContext } from 'react';


// export const Datacontext = createContext({ passData: {} });

function App() {
  // const [passData, setPassData ] = useState({ name: '', phone: '', paidDate: '' });
  return (
    
      <Router>
        {/* <Datacontext.Provider value={{ passData , setPassData}}> */}
        <div className="App">
          <nav style={{backgroundColor:'lightgreen',marginTop:'20px'}}>
            <ul>
              <li>
                <Link to="/students-joining">People</Link>
              </li>

              <li>
                <Link to="/main-dashboard">Dashboard</Link>
              </li>

              <li>
                <Link to="/fee-paid-history">Fee Paid History</Link>
              </li>

              <li>
                <Link to="/new-login">New Login</Link>
              </li>

              <li>
                <Link to="/Rooms">Rooms</Link>
              </li>

              <li>
                <Link to="/Vacancy">Vacancy</Link>
              </li>

            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<DefaultHeading />} /> {/* Default route */}
            <Route path="/students-joining" element={<StudentsJoining />} />
            <Route path="/main-dashboard" element={<MainDashboard />} />
            <Route path="/fee-paid-history" element={<FeePaidHistory />} />
            <Route path="/new-login" element={<NewLogin/>}></Route>
            <Route path="/Rooms" element={<Rooms/>}></Route>
            <Route path='/Rooms/:roomId' element={<RoomDetails/>}></Route>
            <Route path='/Vacancy' element={<Vacancy/>}></Route>
            {/* <Route path="/dashboard-update" element={<MainDashboard />} /> */}
            <Route path="/firstfloor" element={<Firstfloor/>} />
            <Route path="/secondfloor" element={<Secondfloor/>} />
            <Route path="/thirdfloor" element={<ThirdFloor/>} />
            <Route path="/fourthfloor" element={<FourthFloor/>} />
            <Route path="/fifthfloor" element={<FifthFloor/>} />
          </Routes>
        </div>
        {/* </Datacontext.Provider> */}
      </Router>  
    
  );
}

export default App;
