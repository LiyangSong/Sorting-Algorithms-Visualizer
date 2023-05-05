import React from 'react';

export default function Footer() {
    return(
        <div className="footer">
            <p>A Project Developed by Keke, Liyang, and Yue in Summer 2023.</p>
            <Contact />
        </div>
  );
}

function Contact() {
    return (
      <div className="header_contact">
        <a href="mailto:xxxxxx@xxxxxxx.com" className="contact-link">
          Contact Me
        </a>
      </div>
    );
  }
