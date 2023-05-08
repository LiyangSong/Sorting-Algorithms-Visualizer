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
        <a href="mailto:song.liy@northeastern.edu" className="footer_contact">
          Contact Us
        </a>
    );
  }
