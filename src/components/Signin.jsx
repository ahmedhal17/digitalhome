import React from "react";
import "./signin.css";
import { FaRegEnvelope, FaUnlockAlt } from "react-icons/fa";
import HeroImg from "../assets/hero.png";
import { useTranslation } from "react-i18next";

function SignIn() {
  const { t } = useTranslation();
  return (
    <div className="sign_container m-auto h-auto flex items-center w-full">
      <div id="signin" className="flex w-full ">
        <div
          className="signin-container flex w-3/5 rounded-[0.5rem] justify-center items-center m-auto shadow-md bg-slate-50"
          style={{
            backgroundImage: `url(${HeroImg})`,
            backgroundsize: "cover",
            backgroundPosition: "center right -50%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="input_container flex flex-col w-3/5 p-2 justify-center items-center">
            <h1 className="login_header">{t("Login_to_your_account")}</h1>
            <div className="borderline"></div>
            <div className="input">
              <FaRegEnvelope className="input_icon mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email.."
                className="p-0 m-0"
              />
            </div>
            <div className="input">
              <FaUnlockAlt className="input_icon  mr-2" />
              <input
                type="password"
                name="password"
                placeholder={t("password..")}
              />
            </div>
            <div className="checkbox_wrapper">
              <label className="label-checkbox">
                <input type="checkbox" name="remember" />
                {t("remember_me")}
              </label>
              <a className="forgot" href="/forgot">
                {t("forgot_password")}
              </a>
            </div>
            <a className="signinButton" href="/signup">
              {t("signin")}
            </a>
          </div>

          <div className="signup-wrap">
            <h2 className="signup-header">{t("hello_friend")}</h2>
            <div className="borderline"></div>
            <p className=" bg-white px-4 rounded-full">{t("join_us")}</p>
            <a className="signupButton" href="/signup">
              {t("signup")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
