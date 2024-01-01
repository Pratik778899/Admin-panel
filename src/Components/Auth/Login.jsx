import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { isLogged } from "../../Store/Action/Index";
import { useNavigate } from "react-router-dom";
import Lock from "../../Assets/lock.png";
import Loginimg from "../../Assets/login.png";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDataString = localStorage.getItem("userDatabase");
  const userData = userDataString ? JSON.parse(userDataString) : [];
  const [email, setEmail] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState(null);
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState("");
  const findUser = userData.some(user => user.email === email);

  const handleInputChanges = e => {
    setEmail(e.target.value);
  };

  const handleGenerateOTP = () => {
    if (email === "") {
      toast.error("Please enter your email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (findUser) {
      const generatedOTP = Math.floor(1000 + Math.random() * 9000);
      setGeneratedOTP(generatedOTP);
      setOtp("");
      setShowOTPInput(true);
      toast.success(`OTP: ${generatedOTP}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Email not found. Please sign up first!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleOTPInputChange = e => {
    setOtp(e.target.value);
  };

  const handleLogin = () => {
    if (otp === "") {
      toast.error("Please enter OTP!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (parseInt(otp) === generatedOTP) {
      localStorage.setItem("LoggedUser", JSON.stringify({ email, otp }));
      dispatch(isLogged(true));
      navigate("/");
      toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Invalid OTP. Please try again!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="glow-round"></div>
      <div className="login-img">
        <div className="glowLogin"></div>
        <img src={Loginimg} alt="login" className="login" />
      </div>
      <div className="lock-img">
        <div className="glowLock"></div>
        <img src={Lock} alt="lock" className="Lock" />
      </div>


      <div id="Login">
        <h2>Login Your Account Here</h2>
        <div id="Login-Content">
          <input
            type="email"
            placeholder="Enter Your Mail Here"
            value={email}
            onChange={handleInputChanges}
            id="email"
          />
          {!showOTPInput ? (
            <button className="button" onClick={handleGenerateOTP}>
              Generate OTP
            </button>
          ) : (
            <div className="otp-input">
              <input
                type="text"
                maxLength="4"
                onChange={handleOTPInputChange}
                className="otp-box"
                placeholder="Enter OTP"
              />
              <button onClick={handleGenerateOTP} className="button">
                Resend OTP
              </button>
              <button className="button" onClick={handleLogin}>
                Login
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="glow-round-right"></div>
    </>
  );
};

export default Login;
