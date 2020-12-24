import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Link from 'next/link'
import Head from "next/head";
import Layout from "../../components/Layout/Layout";

const Post = () => {
  const router = useRouter();
  const { detail } = router.query;

  return (
    <Layout>
      detail page
    </Layout>
  );
};

export default Post;
