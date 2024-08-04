import React, { useRef } from "react";
import "./ContactFormStyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import cartoon from "../assets/pic6.png";
import env from "react-dotenv";

export default function ContactForm({ id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        env.REACT_APP_SERVICE_ID,
        env.REACT_APP_TEMPLATE_ID,
        e.target,
        "jfNP2XeOXjOi5MI3P"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Kindly refresh the page.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="contact-window" id={id} style={{ backdropFilter:"blur(3px)",
      webkitBackdropFilter: "blur(5px)",}}>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      <div className="contact-container">
        <img
          src={cartoon}
          alt="Deepa Jha"
          className="contact-wrapper-left"
        ></img>
        <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email ID"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            column="15"
            placeholder="Share your thoughts and insights here; your feedback means a lot."
            required
          />
          <button className="btn" id="submitBtn" type="submit" value="Send" style={{background:'#7722e7',borderColor:"#7722e7"}}>
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
