import Layout from "../components/Layout/Layout";
import Slider from "../components/Home/Slider/Slider";
import OurCustomers from "../components/Home/OurCustomers/OurCustomers";
import React from "react";
import WeAraAddingValueToYourBrand from "../components/Home/WeAraAddingValueToYourBrand/WeAraAddingValueToYourBrand";
import WhyPointo from "../components/Home/WhyPointo/WhyPointo";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <WeAraAddingValueToYourBrand />
      <WhyPointo />
      <OurCustomers />
    </Layout>
  );
}
