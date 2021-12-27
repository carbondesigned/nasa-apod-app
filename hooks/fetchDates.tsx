import axios from "axios";
import { useQuery } from "react-query";
import api from "../axiosStore";

interface DatesImageType {
  map(arg0: (img: any) => JSX.Element): import("react").ReactNode;
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
  url: string;
}
const fetchDates = async () => {
  const { data } = await api.get(``, {
    params: {
      start_date: "2021-12-10",
    },
  });
  return data;
};

const useDates = () => {
  return useQuery<DatesImageType[], Error>("today", fetchDates);
};

export { useDates, fetchDates };
