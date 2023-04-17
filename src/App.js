import logo from './logo.svg';
import './App.css';
import Authetificationform from './Authetificationform';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUpPage from './SignUpPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route>
          <Route path="/" element={<Authetificationform />} />
          <Route path="/signup" element={<SignUpPage />} />
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
