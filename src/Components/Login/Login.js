import React from "react";
import { useForm } from "react-hook-form";
import firebase from "./firebase";
import './Login.css'




const Login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();

  // ReCaptcha Function
  const setupReCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "reCaptcha container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("it is captcha");
          loginDataSubmit();
        },
        defaultCountry: "IND",
      }
    );
  };

  const loginDataSubmit = (data) => {
    setupReCaptcha();
    const phoneNumber = "+91" + data.phoneNumber;
    console.log(data.phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        const verificationCode = prompt('Enter your OTP');
        confirmationResult.confirm(verificationCode)
          .then((result) => {
            const user = result.user;
          }).catch((error) => {

          })
        console.log('OTP send')
      }
      )
      .catch((error) => {
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="login-box">
          <div className="login-logo">
            <div className="input-area">
              <img src="https://ps.w.org/login-with-phone-number/assets/icon-256x256.png?rev=2353900" alt="" />
              <form className="form-group" onSubmit={handleSubmit(loginDataSubmit)}>
                <input
                  className="form-control number p-1 mt-3"
                  placeholder="number"
                  type="number"
                  {...register("phoneNumber")}
                />

                <input
                  className="btn btn-success d-flex mt-2 mx-auto"
                  type="submit"
                />
                <div id="reCaptcha container">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
