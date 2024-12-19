import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const Login = React.lazy(() => import("./auth/Login"));
const Register = React.lazy(() => import("./auth/Register"));
const Home = React.lazy(() => import("./page/Home"));
const Details = React.lazy(() => import("./page/Details"));

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  
  return (
    <div>
      {!isAuthPage && <Header />}
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Details />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
      
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
