import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="flex justify-center items-center h-auto relative w-full">
      <div className="contact-container lg:w-1/2 bg-slate-50 shadow-md justify-center">
        <h2 className="text-xl font-semibold">Send me a message</h2>
        <p>Feel free to get in touch with us!</p>
        <form id="form" className="mt-4">
          <div className="wrapper">
            <input type="text" placeholder="Your name" />
            <div className="gradient-bg"></div>
          </div>
          <div className="wrapper">
            <input type="email" placeholder="Email address" />
            <div className="gradient-bg"></div>
          </div>
          <div className="wrapper">
            <input type="text" placeholder="Subject" />
            <div className="gradient-bg"></div>
          </div>
          <div className="wrapper wrapper-big">
            <textarea placeholder="Message"></textarea>
            <div className="gradient-bg"></div>
          </div>
          <button className="text-black">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
