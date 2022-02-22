import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";

import AppRouter from "./component/AppRouter";
import { AuthContext } from "./context";


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
