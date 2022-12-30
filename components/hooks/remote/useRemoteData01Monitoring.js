import { useQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';
import useActionGlobal from '../../../store/useActionGlobal';

const useRemoteData01Monitoring = ({ limitIndex, pageIndex, isFTP }) => {
  const info = useActionGlobal((state) => state.infoStatus);
  const uri = 'item_01';

  const { data, ...others } = useQuery(
    ['item-monitoring-01', info, pageIndex, isFTP],
    () =>
      postFetcher(uri, {
        limit: limitIndex,
        page: pageIndex,
      })
  );

  return { data, ...others };
};

export default useRemoteData01Monitoring;
