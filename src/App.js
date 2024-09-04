import './App.css';
import Login from './login';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Success from './Success';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/success' element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
