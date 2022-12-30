import { useQuery } from "@tanstack/react-query";
import { postFetcher } from "../../../libs/axios";

const useRemoteData01Reporting = ({ limitIndex, pageIndex }) => {
  const uri = "reports_01";

  const { data, ...others } = useQuery(
    ["item-reports-01", pageIndex],
    () =>
      postFetcher(uri, {
        limit: limitIndex,
        page: pageIndex,
      })
  );

  return { data, ...others };
};

export default useRemoteData01Reporting;
