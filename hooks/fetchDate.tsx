import { useQuery } from "react-query";
import api from "../axiosStore";

export interface DateImageType {
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
  url: string;
}
const fetchDate = async (date: any) => {
  const { data } = await api.get(``, { params: { date: date } });
  return data;
};

const useDate = (date: any) => {
  return useQuery<DateImageType, Error>("today", () => fetchDate(date));
};

export { useDate, fetchDate };
