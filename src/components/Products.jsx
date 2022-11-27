import React from "react";
import "./products.css";
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation();
  return (
    <div className="products flex justify-center items-center h-auto relative w-full z-0">
      <div class="section over-hide">
        <div class="">
          <div class="row justify-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section text-center py-5 py-md-0 overflow-hidden">
                <input
                  class="pricing"
                  type="checkbox"
                  id="pricing"
                  name="pricing"
                />
                <label for="pricing">
                  <span class="block-diff">
                    {t("vouchers")}
                    <span class="float-right">{t("licences")}</span>
                  </span>
                </label>
                <div class="card-3d-wrap xl:w-1/5 mx-auto sm:w-full">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="pricing-wrap">
                        <h4 class="mb-5">{t("vouchers")}</h4>
                        <h2 class="mb-2">
                          <sup>$</sup>10 {t("to")} <sup>$</sup>100
                        </h2>
                        <p class="mb-4">E-Gift Cards</p>
                        <p class="mb-1">
                          <i class="uil uil-location-pin-alt size-22"></i>
                        </p>
                        <p class="mb-4">& Vouchers</p>
                        <a href="#0" class="link">
                          {t("explore")}
                        </a>
                        <div class="img-wrap img-2">
                          <img
                            src="https://scontent.falg3-2.fna.fbcdn.net/v/t1.6435-9/52345681_10156606559473124_7930833184248299520_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGe0-2Nt_QV0cEbOPNyQIxWNLe9T-IxH9Q0t71P4jEf1D21ySymopvS-Y07EjLYztOmHF7D1Xw7l0iySjF1vG2U&_nc_ohc=APhhBJfnjewAX9DSlVe&_nc_ht=scontent.falg3-2.fna&oh=00_AfCO12H8B-AR85IIGeJfv7SAuhL0lm-RrBVmWMWLAd_zAQ&oe=63AA2824"
                            alt=""
                          />
                        </div>
                        <div class="img-wrap img-1">
                          <img
                            src="https://m.media-amazon.com/images/I/71VLL2iB8oL._SX522_.jpg"
                            alt=""
                          />
                        </div>
                        <div class="img-wrap img-3">
                          <img
                            src="https://assets.codepen.io/1462889/water.png"
                            alt=""
                          />
                        </div>
                        <div class="img-wrap img-6">
                          <img
                            src="https://m.media-amazon.com/images/I/818Xr8h2C4L._SX522_.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="pricing-wrap text-black">
                        <h4 class="mb-5 text-black">Licences & Codes</h4>
                        <h2 class="mb-2">
                          365<sup>{t("days")}</sup>
                        </h2>
                        <p class="mb-4">{t("single_device")}</p>
                        <p class="mb-1">
                          <i class="uil uil-location-pin-alt size-22"></i>
                        </p>
                        <p class="mb-4">
                          {t("or")} {t("multiple")}
                        </p>
                        <a href="#0" class="link">
                          {t("explore")}
                        </a>
                        <div class="img-wrap img-2">
                          <img
                            src="https://www.bleepstatic.com/content/hl-images/2022/10/05/windows-11-header.jpg"
                            alt=""
                          />
                        </div>
                        <div class="img-wrap img-4">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg"
                            alt=""
                          />
                        </div>
                        <div class="img-wrap img-5">
                          <img
                            src="https://cdn.worldvectorlogo.com/logos/steam-2.svg"
                            alt=""
                          />
                        </div>
                        <div class="img-wrap img-7">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/de/5/56/Kaspersky_anti_virus_logo.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
