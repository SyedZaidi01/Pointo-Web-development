import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../../public/json/hizmetlerimizaboutus.json";
import Image from "react-bootstrap/Image";
import { useRouter } from "next/router";
import DetailPage from "../../components/DetailPage/DetailPage";
import Widget from "../../components/Common/Widget";
import Layout from "../../components/Layout/Layout";
import { route } from "next/dist/next-server/server/router";
import DefaultErrorPage from 'next/error'

const AboutUsDetailPage = () => {
  const router = useRouter();
  const queryValue = router.query["slug"];
  const detailData = data.filter((data) => {
    return data.url === queryValue ? data : "";
  })[0];

   if (detailData) {
    return (
      <Layout>
        <DetailPage detail pageTitle={detailData.titlePage}>
          <div className="about-us-sub-components">
            <Widget className="container" light>

              <Row>
                <Col md={{span:12}}>
                  <Image src= {detailData.src}/>
                  <h1>{detailData.titlePage}</h1>         
                  <p>{detailData.firstPara}</p>       
                </Col>
              </Row>




              <h3>{detailData.secondHeading}</h3>
              <p>{detailData.secondPara}</p>
              <h3>{detailData.thirdHeading}</h3>
              <p>{detailData.thirdPara}</p>
              <h3>{detailData.fourthHeading}</h3>
              <p>{detailData.fourthPara}</p>
            </Widget>
          </div>
        </DetailPage>
      </Layout>
    );
   } else {
    return <DefaultErrorPage statusCode={404}/>
   }
};

export default AboutUsDetailPage;
