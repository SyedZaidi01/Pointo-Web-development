import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';

import React, { Fragment } from "react";

import Widget from "../Common/Widget";

const DetailPage = props => {
  const { src, pageTitle, children, breadCrumbClass } = props;
  const title = pageTitle ? pageTitle : 'Detay Sayfası';
  const addBreadCrumbClass = breadCrumbClass ? breadCrumbClass : '';
  const router = useRouter();

  return (
    <Fragment>
      {
        pageTitle
          ? <Head> <title>{pageTitle} | Dijital Çözüm Ortağı</title> </Head>
          : <Head> <title>Pointo | Dijital Çözüm Ortağı</title> </Head>
      }

      <div
        className={"breadcrumb-area" + " " + addBreadCrumbClass}
        style={
          src
            ? { backgroundImage: `url(${src})` }
            : { backgroundImage: `url(/images/breadcrumb.jpg)` }
        }>

        <h4> {title} </h4>

        <Link href="/">Anasayfa</Link> - {' '}
        <Link href={router.pathname}>{title}</Link>
      </div>

      <Widget className="detail-page-container" light>
        {children}
      </Widget>

    </Fragment>
  );
};
export default DetailPage;
