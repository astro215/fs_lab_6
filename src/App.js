import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './component/Signup.js';
import Login from './component/Login.js';
import LandingPage from './component/LandingPage.js';


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<LandingPage />} />
            </Routes>
        </Router>
    </div>



  );
}

export default App;
