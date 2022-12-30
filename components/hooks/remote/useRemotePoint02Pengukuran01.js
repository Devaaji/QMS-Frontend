import { useQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useRemotePoint02Pengukuran01 = ({ limitIndex, pageIndex }) => {
  const uri = 'dashboard_point_02';

  const { data, ...others } = useQuery(
    ['pengukuran_point2_01', pageIndex],
    () =>
      postFetcher(uri, {
        limit: limitIndex,
        page: pageIndex,
      })
  );

  return { data, ...others };
};

export default useRemotePoint02Pengukuran01;
