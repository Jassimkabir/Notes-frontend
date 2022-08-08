import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from './store/index';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const { authStore } = useStore();
  const { getUser, user } = authStore;

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Navigate to='/home' /> : <Login />} />
        <Route
          path='/home'
          element={user ? <Home user={user} /> : <Navigate to='/' />}
        />
      </Routes>
    </BrowserRouter>
  );
});

export default App;
