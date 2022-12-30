import { useQuery } from '@tanstack/react-query';
import { getFetcher } from '../../../libs/axios';

const useRemoteGetDataFTP = () => {
  const uri = 'item_01';

  const { data, ...others } = useQuery(
    ['GetFTP_item_01'],
    () => getFetcher(uri),
    {
      refetchInterval: 15000,
    }
  );

  return { data, ...others };
};

export default useRemoteGetDataFTP;
