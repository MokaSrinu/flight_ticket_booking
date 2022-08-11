import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/login';
import { Navbar } from './components/Navbar';
import { Register } from './components/register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
