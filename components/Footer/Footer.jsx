import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
  return <div className="container my-4 position-sticky top-100">
    <div className="d-lg-flex justify-content-between align-items-center">
      <p className="f-16 text-gray text-center d-none d-lg-block m-0">2022 © Two Bit Media, All rights reserved.</p>
      <div className="d-block mt-3 mt-lg-0 d-md-flex justify-content-between align-items-center">
        <span role='button' className={`text-gray text-center mt-3 mt-md-0 d-block d-md-inline-block ` + (`${styles.footerItem}`)  }>Privacy Policy</span>
        <span role='button' className={`text-gray text-center mt-3 mt-md-0 d-block d-md-inline-block ` + (`${styles.footerItem}`)  }>Security</span>
        <span role='button' className={`text-gray text-center mt-3 mt-md-0 d-block d-md-inline-block ` + (`${styles.footerItem}`)  }>Cookie Policy</span>
        <span role='button' className={`text-gray text-center mt-3 mt-md-0 d-block d-md-inline-block ` + (`${styles.lastFooterItem}`)  }>Terms and Conditions</span>
      </div>
      <p className="f-16 text-gray text-center m-0 mt-3 d-block d-lg-none">2022 © Two Bit Media, All rights reserved.</p>
    </div>
  </div>;
};

export default Footer;
