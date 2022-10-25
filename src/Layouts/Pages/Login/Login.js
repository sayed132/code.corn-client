import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import './Login.css';

const Login = () => {
  const {  signIn, setLoading, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
}

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(userInfo.email, userInfo.password)
      .then((result) => {
        toast.success("success");
        console.log(location.state.from);
        navigate(location?.state?.from?.pathname);
      })
      .catch((err) => {
        console.log(err);
        setErrors({ ...errors, general: err.message });
      })
      .finally(() => {
        setLoading(false);
    });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const lengthError = password.length < 6;
    const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
    const noCapitalLetterError = !/[A-Z]{1,}/.test(password);

    if (lengthError) {
      setErrors({ ...errors, password: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          // value={userInfo.email}
          onChange={handleEmailChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="password"
            // value={userInfo.password}
            onChange={handlePasswordChange}
          />
          <div className="absolute right-5 top-5" onClick={() => setShowPass(!showPass)}>
            {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <button>Login</button>
        {errors.general && <p className="error-message">{errors.general}</p>}
        <p>
          Don't have an account? <Link to="/register">Sign up first</Link>
        </p>
      </form>

      <button onClick={handleGoogleSignIn}>Google</button>
    </div>
  );
};

export default Login;