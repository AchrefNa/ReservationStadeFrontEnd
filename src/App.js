import React from "react";

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import Navigation from "./navigation/Navigation";

import { Container } from '@chakra-ui/react'
import StadiumReservation from "./components/StadiumReservation";
import PaymentPage from "./components/PaymentPage";

const App = () => {
  return (
    <div>
      <Navigation />

      <Container maxW='container.lg' px='6'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/reservation/:id" element={<StadiumReservation />} />
          <Route path="/payment/:reservationId" element={<PaymentPage />} />
          
          
            
          
        </Routes>
        
        </Container>
        
    </div>
  );
};

export default App;
