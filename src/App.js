import './App.css';

// Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Welcome from './Components/Welcome/Welcome';
import Navbar from './Components/Navbar/Navbar';
import Play from './Components/Play/Play';
import Clicking from './Components/Clicking/Clicking';


function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route index path='/' element={<Welcome />} />
                <Route index path='/play' element={<Play />} />
                <Route index path='/clicking' element={<Clicking />}/>
            </Routes>
        </Router>
  );
}

export default App;
