import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import useRemotePoint01Pengukuran01 from '../../../hooks/remote/useRemotePoint01Pengukuran01';
import { Box } from '@chakra-ui/react';
import useStorePagination from '../../../../store/useStorePagination';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChartActivity01 = () => {
  const pagePoint01 = useStorePagination((state) => state.pagePoint01);

  const { data: dataPengkuranPoint01 } = useRemotePoint01Pengukuran01({
    limitIndex: 10,
    pageIndex: pagePoint01,
  });

  const labels = dataPengkuranPoint01?.data?.map(
    (product) => product.total_product
  );

  const dimension = dataPengkuranPoint01?.data?.map(
    (product) => product.p1_dimension
  );
  const minDimension = dataPengkuranPoint01?.data?.map(
    (product) => product.p1_dimension_min
  );
  const maxDimension = dataPengkuranPoint01?.data?.map(
    (product) => product.p1_dimension_max
  );
  const actual = dataPengkuranPoint01?.data?.map(
    (product) => product.p1_actual
  );
  const deviasi = dataPengkuranPoint01?.data?.map(
    (product) => product.p1_deviasi
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Line Chart Point Pengukuran 1',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        id: 1,
        label: 'Dimensi',
        data: dimension,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        id: 2,
        label: 'Dimensi Minimum',
        data: minDimension,
        borderColor: 'RGB(243 150 35)',
        backgroundColor: 'RGB(231 144 36)',
      },
      {
        id: 3,
        label: 'Dimensi Maximum',
        data: maxDimension,
        borderColor: 'RGB(150 152 154)',
        backgroundColor: 'RGB(128 129 130)',
      },
      {
        id: 4,
        label: 'Actual',
        data: actual,
        borderColor: 'RGB(243 198 42)',
        backgroundColor: 'RGB(190 145 34)',
      },
    ],
  };

  return (
    <Box mt="10">
      <Line datasetIdKey="id" options={options} data={data} />
    </Box>
  );
};

export default DashboardChartActivity01;
