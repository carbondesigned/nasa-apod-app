import React from "react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import { useDates } from "../hooks/fetchDates";
import Photo from "../components/Photo";

interface Props {}

const All: NextPage = (props: Props) => {
  const { data, isLoading, error } = useDates();
  return (
    <Layout>
      <div className="grid grid-cols-auto md:grid-rows-2 grid-flow-col gap-4 p-4">
        {data &&
          data.length > 0 &&
          data?.map((date) => <Photo key={date.title} date={date} grid />)}
      </div>
    </Layout>
  );
};

export default All;
