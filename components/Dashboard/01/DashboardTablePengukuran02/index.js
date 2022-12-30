import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import useStorePagination from '../../../../store/useStorePagination';
import useRemotePoint02Pengukuran01 from '../../../hooks/remote/useRemotePoint02Pengukuran01';
import DashboardPagination from '../../DashboardPagination';

const DashboardTablePengukuran02 = () => {
  const [pagePoint02, setPagePoint02] = useStorePagination((state) => [
    state.pagePoint02,
    state.setPagePoint02,
  ]);

  const { data: dataPengkuranPoint02 } = useRemotePoint02Pengukuran01({
    limitIndex: 10,
    pageIndex: pagePoint02,
  });

  const handlePageClick = (page) => {
    setPagePoint02(page);
  };

  return (
    <>
      <TableContainer mt="2" borderWidth={1} rounded="md">
        <Table size="sm" variant="striped">
          <Thead>
            <Tr>
              <Th>No Product</Th>
              <Th>Dimensi</Th>
              <Th>
                <Flex as="span" direction="column">
                  <Box textAlign="center">Dimensi</Box>
                  <Box as="span">
                    <Flex as="span" justify="space-between">
                      <Box as="span">min</Box>
                      <Box as="span">max</Box>
                    </Flex>
                  </Box>
                </Flex>
              </Th>
              <Th isNumeric>Nilai Actual</Th>
              <Th isNumeric>Deviasi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataPengkuranPoint02?.data?.map((point02, i) => (
              <Tr key={i}>
                <Td>{point02.total_product}</Td>
                <Td>{point02.p2_dimension}</Td>
                <Td>
                  <Flex direction="column">
                    <Box>
                      <Flex justify="space-between">
                        <Box>{point02.p2_dimension_min}</Box>
                        <Box>{point02.p2_dimension_max}</Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Td>
                <Td isNumeric>{point02.p2_actual}</Td>
                <Td
                  isNumeric
                  color={point02.p2_deviasi?.startsWith('-') ? 'red' : 'green'}
                >
                  {point02.p2_deviasi}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justify="end" borderTopWidth={1} mt="2">
        <DashboardPagination
          current={pagePoint02}
          total={dataPengkuranPoint02 ? dataPengkuranPoint02.totalPage : 0}
          onPageClick={handlePageClick}
        />
      </Flex>
    </>
  );
};

export default DashboardTablePengukuran02;
