import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import DetailPage from "../../components/DetailPage/DetailPage";
import Layout from "../../components/Layout/Layout";

const Iletisim = () => {

    return (
        <Layout>
            <DetailPage pageTitle="İletişim">
                <ContactUs />
            </DetailPage>
        </Layout>
    )
};

export default Iletisim;