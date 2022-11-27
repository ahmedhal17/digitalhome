import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import "./nav.css";

const languages = [
  {
    code: "fr",
    lang_name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    lang_name: "English",
    country_code: "gb",
  },
];

function Nav() {
  const currentLanguageCode = cookies.get("i18next") || "en";

  const { t } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [togglelangMenu, setTogglelangMenu] = useState(false);
  const Menu = () => (
    <div className="items-center sticky top-0 capitalize font-bold justify-around w-1/2 h-36 lg:flex">
      <p>
        <a href="/" onClick={() => setToggleMenu(false)}>
          {t("home")}
        </a>
      </p>
      <p>
        <a href="/products" onClick={() => setToggleMenu(false)}>
          {t("products")}
        </a>
      </p>
      <p>
        <a href="/about" onClick={() => setToggleMenu(false)}>
          {t("about")}
        </a>
      </p>

      <p>
        <a href="/contact" onClick={() => setToggleMenu(false)}>
          {t("contact")}
        </a>
      </p>
    </div>
  );

  return (
    <div className="dt__navbar">
      <div className="dt__navbar-links">
        <a href="/" className="dt__navbar-links_logo">
          <img src={Logo} alt="logo" />
        </a>
        <div className="dt__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dt__navbar-offer">
        <a href="/signin">
          <button type="button">{t("signin")}</button>
        </a>
      </div>
      <div className="dt__navbar-lang_menu">
        {togglelangMenu ? (
          <BiChevronDown
            color="#042c54"
            size={27}
            onClick={() => setTogglelangMenu(false)}
          />
        ) : (
          <BsGlobe
            color="#042c54"
            size={27}
            onClick={() => setTogglelangMenu(true)}
          />
        )}
        {togglelangMenu && (
          <div className="dt__navbar-dropdown scale-up-center">
            <ul className="dt__navbar-menu_container-links">
              {languages.map(({ code, lang_name, country_code }) => (
                <li key={country_code}>
                  <p>
                    <button
                      className="languages-btn_secondary"
                      onClick={() =>
                        i18next.changeLanguage(code) | setTogglelangMenu(false)
                      }
                      disabled={code === currentLanguageCode}
                    >
                      {lang_name}
                    </button>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="dt__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="dt__navbar-menu_container scale-up-center">
            <div className="dt__navbar-menu_container-links">
              <Menu />
              <div className="dt__navbar-menu_container-offer">
                <a href="/signin">
                  <button type="button" onClick={() => setToggleMenu(false)}>
                    {" "}
                    Sign in
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
