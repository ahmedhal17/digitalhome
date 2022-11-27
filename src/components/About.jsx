import React from "react";
import "./about.css";
import $ from "jquery";
import Logo from "../assets/logo_sm.png";

function About() {
  (function () {
    const selectors = {
      nav: "[data-features-nav]",
      tabs: "[data-features-tabs]",
      active: ".__active",
    };
    const newLocal = "__active";
    const classes = {
      active: newLocal,
    };
    $("a", selectors.nav).on("click", function () {
      let $this = $(this)[0];
      $(selectors.active, selectors.nav).removeClass(classes.active);
      $($this).addClass(classes.active);
      $("div", selectors.tabs).removeClass(classes.active);
      $($this.hash, selectors.tabs).addClass(classes.active);
      return false;
    });
  })();

  $("#feature_icon .btn-with-icon").on("click", function () {
    $(".wave-anim")
      .addClass("visible")
      .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd", function () {
        $(".wave-anim").removeClass("visible");
      })();
  });
  return (
    <div className="main_about flex justify-center items-center h-auto relative w-full">
      <div className="second_wrapper_about my-auto m-auto w-2/3 h-[calc(100vh - 10vh)] mx-auto justify-center items-center">
        <div className="box foo">
          <div className="features-content h-full flex">
            <div data-features-tabs className="features-content-col">
              <div
                id="feature-1"
                className="features-textblock animated fadeIn __active"
              >
                <h2>One Shop, One Supplier</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div
                id="feature-2"
                className="features-textblock animated fadeIn"
              >
                <h2>Scale your business</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div
                id="feature-3"
                className="features-textblock animated fadeIn"
              >
                <h2>Become Official POS</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div
                id="feature-4"
                className="features-textblock animated fadeIn"
              >
                <h2>Rich Catalogue</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div
                id="feature-5"
                className="features-textblock animated fadeIn"
              >
                <h2>Huge Network</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div
                id="feature-6"
                className="features-textblock animated fadeIn"
              >
                <h2>Invest Right</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="features-content-col">
              <div
                data-features-nav
                className="features-graph justify-center text-center items-center"
              >
                <div className="button-holder">
                  <a
                    href="#feature-1"
                    id="feature_icon"
                    className="icon-features-1 btn-with-icon __active"
                  >
                    <span className="sq-bt-label label-top-left justify-center">
                      Supplier
                    </span>
                  </a>
                  <a
                    href="#feature-2"
                    className="icon-features-2 btn-with-icon"
                  >
                    <span className="sq-bt-label label-top">Scale</span>
                  </a>
                  <a
                    href="#feature-3"
                    className="icon-features-3 btn-with-icon"
                  >
                    <span className="sq-bt-label label-top-right">POS</span>
                  </a>
                </div>
                <div className="animation-holder">
                  <span className="flash-oval">
                    <img src={Logo} alt="Digital Home" />
                    <div className="wave hidden wave-anim"></div>
                    <div className="wave2 hidden wave-anim"></div>
                    <div className="wave3 hidden wave-anim"></div>
                    <div className="wave4 hidden wave-anim"></div>
                  </span>
                </div>
                <div className="button-holder">
                  <a
                    href="#feature-4"
                    className="icon-features-4 btn-with-icon "
                  >
                    <span className="sq-bt-label label-bottom-left">
                      Catalog
                    </span>
                  </a>
                  <a
                    href="#feature-5"
                    className="icon-features-5 btn-with-icon"
                  >
                    <span className="sq-bt-label label-bottom">Network</span>
                  </a>
                  <a
                    href="#feature-6"
                    className="icon-features-6 btn-with-icon"
                  >
                    <span className="sq-bt-label label-bottom-right">
                      Target
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
