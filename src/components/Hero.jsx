import React from "react";
import "./hero.css";
import HeroImg from "../assets/hero.png";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero h-auto flex items-center w-full justify-between">
      <div className="hero_wrapper slider flex w-full items-center justify-around">
        <div className="first_slide w-1/3">
          <h1 className="text-[96px] font-semibold w-full leading-[120px] whitespace-nowrap ">
            {t("about_dh1")}
            <br />
            <span>{t("about_dh2")}</span>
          </h1>
          <div className="buttons flex items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="explore bg-[#f75260] rounded-full w-1/2 h-10 text-white mr-2"
            >
              {t("explore")}
            </motion.button>
            <a href="/howto" className="flex items-center font-semibold ">
              <IoMdArrowDroprightCircle className="text-xl font-semibold text-gray-400 mr-1" />
              {t("works")}
            </a>
          </div>
        </div>
        <img src={HeroImg} alt="Digital Home" className="h-auto w-2/5" />
      </div>
    </div>
  );
}

export default Hero;
