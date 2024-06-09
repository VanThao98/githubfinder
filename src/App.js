import './App.css';
import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './component/layout/Home';
function App() {
  return (
    <div className='App' >
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  )
}

export default App;