import { useQuery } from 'react-query';
import api from '../axiosStore';

interface TodayImageType {
  media_type: string;
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
  url: string;
}
const fetchToday = async () => {
  const { data } = await api.get(``);
  return data;
};

const useToday = () => {
  return useQuery<TodayImageType, Error>('today', fetchToday, {
    refetchOnWindowFocus: false,
    staleTime: 24 * 60 * 60 * 1000, // 1 day
  });
};

export { useToday, fetchToday };
