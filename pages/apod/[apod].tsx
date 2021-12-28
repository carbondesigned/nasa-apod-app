import React from "react";
import Layout from "../../components/Layout";
import SelectedPhoto from "../../components/SelectedPhoto";
import { useAppContext } from "../../contexts/appContext";

interface Props {}

const Apod = (props: Props) => {
  const { selectedDate } = useAppContext();
  return <SelectedPhoto />;
};

export default Apod;
