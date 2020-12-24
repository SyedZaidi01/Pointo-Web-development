import React from "react";
import Widget from "../../Common/Widget";
import { Image } from 'react-bootstrap';

const ContactInformation = () => {
    return (
        <Widget id="contact-informations" light container>
            <h4>İletişim Bilgilerimiz</h4>
            <h6>Aşağıdaki bilgiler aracılığıyla bizimle her an destek kurabilirsiniz.</h6>

            <div className="contact-item">
                <Image className="image-horizontal" width="45px" src="/icons/communications.png" />

                <h6>Telefon</h6>

                <span>0312 312 1212</span>
                <br />
                <span>0505 505 5050</span>
            </div>


            <div className="contact-item">
                <Image className="image-horizontal" width="45px" src="/icons/email.png" />

                <h6>E-posta Adresimiz</h6>

                <span>0312 312 1212</span>
                <br />
                <span>0505 505 5050</span>
            </div>


            <div className="contact-item">
                <Image width="45px" src="/icons/professions-and-jobs.png" />

                <h6>Canlı Destek</h6>

                <span>0312 312 1212</span>
                <br />
                <span>0505 505 5050</span>
            </div>


            <div className="contact-item">
                <Image width="45px" src="/icons/maps-and-location.png" />

                <h6>Adresimiz</h6>

                <span>0312 312 1212</span>
                <br />
                <span>0505 505 5050</span>
            </div>
        </Widget>


    )
};

export default ContactInformation;