import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import * as regular from '@fortawesome/free-regular-svg-icons';
import * as socialIcons from "@fortawesome/free-brands-svg-icons/";
import Link from "next/link";

// const SocialMediaIcon = props => {
//     const {
//         icon,
//         ...others
//     } = props;
//     return <FontAwesomeIcon icon={icon} {...others} />
// };

const SocialMediaIcons = (props) => {
  const { size, ...others } = props;
  return (
    <Fragment>
      <Link href="https://www.instagram.com/pointocomtr/">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faInstagram}
          size={size ? size : "lg"}
          {...others}
        />
      </Link>

      <Link href="https://www.facebook.com/pointocomtr">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faFacebook}
          size={size ? size : "lg"}
          {...others}
        />
      </Link>

      <Link href="https://twitter.com/pointocomtr">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faTwitter}
          size={size ? size : "lg"}
          {...others}
        />
      </Link>

      <Link href="https://www.linkedin.com/company/pointo1">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faLinkedin}
          size={size ? size : "lg"}
          {...others}
        />
      </Link>
    </Fragment>
  );
};

export default SocialMediaIcons;
