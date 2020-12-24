import React, { Fragment } from "react";
import ContactInformation from "./ContactInformation/ContactInformation";
import ContactPage from "./ContactPage/ContactPage";
import GoogleMap from "./GoogleMap/GoogleMap";

const ContactUs = () => {
  return (
    <Fragment>
      {/* <ContactPage /> */}
      <ContactInformation />
      <GoogleMap/>

    </Fragment>
  );
};

export default ContactUs;
