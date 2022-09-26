import React from "react";
import "./Contact.css";
import Typewriter from "typewriter-effect";
import Header from "../../components/Header/Header";
import the from "../../assets/videos/carte_thé.mp4";
import Background from "../../components/Background/Background";
import facebook from "../../assets/images/facebook.png";
import email from "../../assets/images/mail.png";
import instagram from "../../assets/images/instagram.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div>
        <Background />
      </div>

      <div className="contact-page">
        <Header video={the} />

        <h1 className="contact-title">Contact</h1>

        {/* <div className="contact2">
          <p className="contact_p">N'hésitez pas à me contacter :</p>
        </div> */}

        <Typewriter
          options={{
            wrapperClassName: "contactTypewriter",
            strings: "N'hésitez pas à me contacter :",
            autoStart: true,
            delay: 60,
          }}
        />

        <div className="contactReseau">
          <a
            className="facebook"
            href="https://www.facebook.com/profile.php?id=100085463681620"
          >
            <img className="facebookImage" src={facebook} alt="facebook" />
          </a>

          <div className="email">
            <img className="emailImage" src={email} alt="email" />
            <p>imagix44@free.fr</p>
          </div>

          <a className="insta" href="https://www.instagram.com/imagix44/">
            <img className="instaImage" src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
