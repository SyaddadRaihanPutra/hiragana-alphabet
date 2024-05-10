import React from "react";
import Instagram from "../../public/img/instagram.svg";

export default function Footer() {
  return (
    <div>
      <footer className="footer flex-between">
        <h3 className="footer__logo">
          <span>Hiragana</span> Alphabet
        </h3>
        <span><a href="https://syaddad.pages.dev" target="_blank" style={{color: '#b1454a', fontFamily: 'Poppins'}}>syaddad.dev</a></span>
        <ul className="footer__social">
          <li className="flex-center">
            <a href="https://instagram.com/syaddadrhnp_" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
