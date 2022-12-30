import { useQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useRemotePoint03Pengukuran01 = ({ limitIndex, pageIndex }) => {
  const uri = 'dashboard_point_03';

  const { data, ...others } = useQuery(
    ['pengukuran_point3_01', pageIndex],
    () =>
      postFetcher(uri, {
        limit: limitIndex,
        page: pageIndex,
      })
  );

  return { data, ...others };
};

export default useRemotePoint03Pengukuran01;
