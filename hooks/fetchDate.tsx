import { useQuery } from 'react-query';
import api from '../axiosStore';

export interface DateImageType {
  media_type?: string;
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
  return useQuery<DateImageType, Error>('date', () => fetchDate(date), {
    refetchOnWindowFocus: false,
    staleTime: 24 * 60 * 60 * 1000, // 1 day
  });
};

export { useDate, fetchDate };
