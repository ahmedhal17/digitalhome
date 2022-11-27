import React from "react";
import "./bottombar.css";
import AccountIcon from "../assets/account_icon.png";
import Gifts from "../assets/gifts_icon.png";
import Insights from "../assets/insights_icon.png";
import Notifications from "../assets/notifications.png";
import { useTranslation } from "react-i18next";

function BottomBar() {
  const { t } = useTranslation();
  return (
    <div className="bottombar flex justify-center border-t-2 before:w-1/2 before:h-5 before:absolute before:left-0 mx-auto w-full bottom-0 top-[100vh] sticky py-5 bg-[rgba(255,255,255,0.5)]">
      <div className="bottombar_wrapper">
        <a
          href="/account"
          className="flex flex-col justify-center w-1/5 items-center"
        >
          <img src={AccountIcon} alt="" className="w-[33px] h-[34px]" />
          <span className="center mt-2 text-md font-semibold">
            {t("account")}
          </span>
        </a>

        <a
          href="/gifts"
          className="flex flex-col justify-center w-1/5 items-center"
        >
          <img src={Gifts} alt="" className="w-[33px] h-[34px]" />
          <span className="center mt-2 text-md font-semibold">
            {t("gifts")}
          </span>
        </a>

        <a
          href="/insights"
          className="flex flex-col justify-center  w-1/5 items-center"
        >
          <img src={Insights} alt="" className="w-[33px] h-[34px]" />
          <span className="center mt-2 text-md font-semibold">
            {t("insights")}
          </span>
        </a>

        <a
          href="/notifications"
          className="flex flex-col justify-center w-1/5 items-center"
        >
          <img src={Notifications} alt="" className="w-[33px] h-[34px]" />
          <span className="center mt-2 text-md font-semibold">
            {t("notifications")}
          </span>
        </a>
      </div>
    </div>
  );
}

export default BottomBar;
