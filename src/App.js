import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from './Components/Welcome/Welcome';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route index path='/' element={<Welcome />} />
            </Routes>
        </Router>
  );
}

export default App;
