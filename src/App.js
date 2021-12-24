import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './Components/Welcome/Welcome';


function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route index path='/' element={<Welcome />} />
            </Routes>
            <Modal />
        </Router>
  );
}

export default App;
