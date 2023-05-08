import React from "react";
import "../styles files/login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
const client_id =
  "928488147008-b5nobd5nfm448iuodhlqg46tor6c7htm.apps.googleusercontent.com";
const SingnUp = () => {
  useEffect(() => {
    function start() {
      gapi.client
        .init({
          client_id: client_id,
          scope: "https://www.googleapis.com/auth/calendar",
        })
        .then(function () {
          console.log("Google API client initialized");
        });
    }
    gapi.load("client:auth2", start);
  });
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token :" + response.credential);
  }

  const navigate = useNavigate(); // access to the history object
  const [userInputs, setUserInputs] = useState({
    userName: "",
    userEmail: "",
    userPass: "",
    userConfirmPass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userInputs", JSON.stringify(userInputs));
    const savedUserInputs = JSON.parse(localStorage.getItem("userInputs"));
    console.log(savedUserInputs);
    navigate("/Home"); // redirect to the home page
  };

  const onChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  console.log(userInputs);
  const onSuccess = (res) => {
    console.log("Login success ! current user : ", res.profileObj);
    localStorage.setItem("userInputs", JSON.stringify(res.profileObj));
    navigate("/Home");
  };

  const onFailure = (res) => {
    console.log("Login Failed ! res: ", res);
  };
  return (
    <>
      <div className="half ">
        <div className="bg order-1 order-md-2 bgImage"></div>
        <div className="contents order-2 order-md-1">
          <div className="container pt-5 mb-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <div className="form-block">
                  <div className="text-center mb-5">
                    <h3>SIGN UP</h3>
                  </div>
                  <div className="text-center mb-3">
                    <GoogleLogin
                      clientId={client_id}
                      buttonText="Sign up with google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                  <form action="#" method="post" onSubmit={handleSubmit}>
                    {/* Your login form fields */}

                    <div
                      id="g_id_onload"
                      data-client_id="YOUR_GOOGLE_CLIENT_ID"
                      data-login_uri="https://your.domain/your_login_endpoint"
                      data-your_own_param_1_to_login="any_value"
                      data-your_own_param_2_to_login="any_value"
                    ></div>
                    <div className="input-container ">
                      <input
                        onChange={onChange}
                        name="userName"
                        type="text"
                        id="userName"
                        required
                        pattern="[A-Za-z]{5,20}"
                        className="form-input"
                      />
                      <label htmlFor="userName" className="label">
                        Name
                      </label>
                      <div className="underline"></div>
                    </div>
                    <span className="errorMessages">
                      Name must be at least 5 letters and not contain any
                      special characters
                    </span>

                    <div className="input-container mt-5 mb-1">
                      <input
                        onChange={onChange}
                        name="userEmail"
                        type="email"
                        id="userEmail"
                        required
                        className="form-input"
                      />
                      <label htmlFor="userEmail" className="label">
                        Email
                      </label>
                      <div className="underline"></div>
                    </div>
                    <span className="errorMessages">
                      Use a valid email address
                    </span>

                    <div className="input-container mt-5 mb-1">
                      <input
                        onChange={onChange}
                        name="userPass"
                        type="password"
                        id="userPass"
                        required
                        className="form-input"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
                        autoComplete="on"
                      />
                      <label htmlFor="userPass" className="label">
                        Password
                      </label>
                      <div className="underline"></div>
                    </div>
                    <span className="errorMessages ml-5">
                      password contains at least eight characters, including at
                      least one number and includes both lower and uppercase
                      letters and special characters
                    </span>

                    <div className="input-container mt-5 mb-1">
                      <input
                        onChange={onChange}
                        name="userConfirmPass"
                        type="password"
                        id="userConfirmPass"
                        required
                        className="form-input"
                        pattern={userInputs.userPass}
                        autoComplete="on"
                      />
                      <label htmlFor="userConfirmPass" className="label">
                        Confirm Password
                      </label>
                      <div className="underline"></div>
                    </div>
                    <span className="errorMessages">
                      password does not match
                    </span>

                    <button className="uiverse-btn mt-5" type="submit">
                      <span className="hover-underline-animation">
                        {" "}
                        Sign up
                      </span>
                      <svg
                        viewBox="0 0 46 16"
                        height="10"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                        id="arrow-horizontal"
                      >
                        <path
                          transform="translate(30)"
                          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                          data-name="Path 10"
                          id="Path_10"
                        ></path>
                      </svg>
                    </button>
                    <div className="d-sm-flex align-items-center">
                      <span className="ml-auto">
                        <p className="haveAccount">
                          If you already have an account, just{" "}
                          <Link to="/Login" className="haveAccountLink">
                            login.
                          </Link>{" "}
                        </p>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingnUp;