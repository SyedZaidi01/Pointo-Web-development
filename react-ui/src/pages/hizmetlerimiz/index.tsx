import Widget from "../../components/Common/Widget";
import DetailPage from "../../components/DetailPage/DetailPage";
import Layout from "../../components/Layout/Layout";
import CardView from "../../components/HizmetlerimizComponents/CardView/CardView";
import DetailPageButton from "../../components/HizmetlerimizComponents/CardView/DetailPageButton";

const Hizmetlerimiz = () => {
  return (
    <Layout>
      <DetailPage pageTitle="Hizmetlerimiz">
        <Widget container detail>
          <DetailPageButton/>
          <CardView/>
        </Widget>
      </DetailPage>
    </Layout>
  );
};

export default Hizmetlerimiz;
