import { NextPage } from "next";
import React from "react";
import TodayPhoto from "../components/TodayPhoto";
import Layout from "../components/Layout";
import SliderImages from "../components/SliderImages";
import Head from "next/head";
import SideArrow from "../components/SideArrow";
import { useDates } from "../hooks/fetchDates";
import LoadingSpinner from "../components/LoadingSpinner";

interface Props {}

const Today: NextPage = (props: Props) => {
  const { data: dates, isLoading, error } = useDates();
  console.log(isLoading);
  return (
    <>
      <Head>
        <title>APOD - Today</title>
        <meta
          name="description"
          content="View Astronomy Picture of the Day by Nasa"
        />
        <link
          rel="stylesheet"
          href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css"
          integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM="
          crossOrigin="anonymous"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <LoadingSpinner />}
      {error && <p>Error: {error.message}</p>}
      {dates && !isLoading && (
        <Layout>
          <SideArrow />
          <div className="bg-gray-900 h-screen grid place-items-center">
            <SliderImages dates={dates} />
          </div>
        </Layout>
      )}
    </>
  );
};

export default Today;
