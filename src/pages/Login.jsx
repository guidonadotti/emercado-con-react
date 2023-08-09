import React from "react";
import JAPlogo from "../img/login.png";
import LoginForm from "../components/LoginForm";
import useWindowTitle from "../hooks/useWindowTitle";

const Login = () => {
  useWindowTitle({ windowTitle: "Login" });
  return (
    <>
      <main className="mt-2">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={JAPlogo} alt="Banner Jóvenes a Programar" srcSet="" />
            </div>
          </div>
          <LoginForm />
        </div>
      </main>
    </>
  );
};

export default Login;
