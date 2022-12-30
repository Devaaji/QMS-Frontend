import { useQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useRemotePoint01Pengukuran01 = ({ limitIndex, pageIndex }) => {
  const uri = 'dashboard_point_01';

  const { data, ...others } = useQuery(
    ['pengukuran_point1_01', pageIndex],
    () =>
      postFetcher(uri, {
        limit: limitIndex,
        page: pageIndex,
      })
  );

  return { data, ...others };
};

export default useRemotePoint01Pengukuran01;
