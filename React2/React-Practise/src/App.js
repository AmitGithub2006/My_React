import './App.css';
import React, {useState} from 'react';
import ProductList from './cart/ProductList';
import Navbar from './cart/Navbar';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import UserContext from "./UserContext"
import Login from './cart/Login';

function App() {

  const [name, setName] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(true);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <UserContext.Provider value={{ name: name, setName: setName }}>
          <Navbar loggedInUser={loggedInUser} />
          <Routes>
            <Route
              path="/"
              element={<Login setLoggedInUser={setLoggedInUser} />}
            />
            <Route
              path="/product"
              element={<ProductList setLoggedInUser={setLoggedInUser} />}
            />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
