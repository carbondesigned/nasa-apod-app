import type { NextPage } from "next";
import Head from "next/head";
import TodayPhoto from "../components/TodayPhoto";
import Button from "../components/Button";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>APOD - App</title>
        <meta
          name="description"
          content="View Astronomy Picture of the Day by Nasa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="z-10">
          <div>
            <span className="uppercase text-gray-400">
              Astronomy Picture of the Day
            </span>
            <h1 className="text-4xl">Welcome to APOD</h1>
          </div>
          <ul className="flex flex-col gap-4 py-6">
            <li>
              <Button center primary link href={"/today"}>
                View Today&apos;s Picture
              </Button>
            </li>
            <li>
              <Button center primary link href={"/all"}>
                View All
              </Button>
            </li>
            <li>
              <Button center secondary>
                About
              </Button>
            </li>
          </ul>
        </div>
      </Layout>
      <TodayPhoto menu />
    </div>
  );
};

export default Home;
