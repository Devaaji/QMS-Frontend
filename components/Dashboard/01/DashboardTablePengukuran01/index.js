import React from 'react';
import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import useRemotePoint01Pengukuran01 from '../../../hooks/remote/useRemotePoint01Pengukuran01';
import DashboardPagination from '../../DashboardPagination';
import useStorePagination from '../../../../store/useStorePagination';

const DashboardTablePengukuran01 = () => {
  const [pagePoint01, setPagePoint01] = useStorePagination((state) => [
    state.pagePoint01,
    state.setPagePoint01,
  ]);

  const { data: dataPengkuranPoint01 } = useRemotePoint01Pengukuran01({
    limitIndex: 10,
    pageIndex: pagePoint01,
  });

  const handlePageClick = (page) => {
    setPagePoint01(page);
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
            {dataPengkuranPoint01?.data?.map((point01, i) => (
              <Tr key={i}>
                <Td>{point01.total_product}</Td>
                <Td>{point01.p1_dimension}</Td>
                <Td>
                  <Flex direction="column">
                    <Box>
                      <Flex justify="space-between">
                        <Box>{point01.p1_dimension_min}</Box>
                        <Box>{point01.p1_dimension_max}</Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Td>
                <Td isNumeric>{point01.p1_actual}</Td>
                <Td
                  isNumeric
                  color={point01.p1_deviasi?.startsWith('-') ? 'red' : 'green'}
                >
                  {point01.p1_deviasi}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justify="end" borderTopWidth={1} mt="2">
        <DashboardPagination
          current={pagePoint01}
          total={dataPengkuranPoint01 ? dataPengkuranPoint01.totalPage : 0}
          onPageClick={handlePageClick}
        />
      </Flex>
    </>
  );
};

export default DashboardTablePengukuran01;
