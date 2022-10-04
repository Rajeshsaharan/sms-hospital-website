import React, { useEffect } from 'react'
import Login from './Login/Login';
import Home from './Home/Home';
import { useSelector } from 'react-redux'
function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  return (
    <>
      {isAuth ? <Home /> : <Login />}
    </>
  );
}

export default App;
