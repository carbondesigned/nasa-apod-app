import React from "react";
import SelectedPhoto from "../../components/SelectedPhoto";
import { useAppContext } from "../../contexts/appContext";

interface Props {}

const Apod = (props: Props) => {
  const { selectedDate } = useAppContext();
  return (
    <div>
      <SelectedPhoto />
    </div>
  );
};

export default Apod;
