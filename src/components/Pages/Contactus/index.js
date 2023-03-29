import React from "react";
import emailjs from "@emailjs/browser";
import { Navbar } from "../../Organisms";

const ContactUS = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs.sendForm(
      "service_82z5mm8o",
      "template_objlr6f",
      e.target,
      "zqsJrew36wi8RpqYN"
    );
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <form onSubmit={sendEmail}>
        <div>
          <label>
            Name:
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" />
          </label>
        </div>
        <div>
          <label>
            Phone number:
            <input type="number" />
          </label>
          <div>
            <input type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUS;
