import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
