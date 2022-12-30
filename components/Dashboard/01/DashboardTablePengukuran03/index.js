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
import useRemotePoint03Pengukuran01 from '../../../hooks/remote/useRemotePoint03Pengukuran01';
import DashboardPagination from '../../DashboardPagination';

const DashboardTablePengukuran03 = () => {
  const [pagePoint03, setPagePoint03] = useStorePagination((state) => [
    state.pagePoint03,
    state.setPagePoint03,
  ]);

  const { data: dataPengkuranPoint03 } = useRemotePoint03Pengukuran01({
    limitIndex: 10,
    pageIndex: pagePoint03,
  });

  const handlePageClick = (page) => {
    setPagePoint03(page);
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
            {dataPengkuranPoint03?.data.map((point03, i) => (
              <Tr key={i}>
                <Td>{point03.total_product}</Td>
                <Td>{point03.p3_dimension}</Td>
                <Td>
                  <Flex direction="column">
                    <Box>
                      <Flex justify="space-between">
                        <Box>{point03.p3_dimension_min}</Box>
                        <Box>{point03.p3_dimension_max}</Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Td>
                <Td isNumeric>{point03.p3_actual}</Td>
                <Td
                  isNumeric
                  color={point03.p3_deviasi?.startsWith('-') ? 'red' : 'green'}
                >
                  {point03.p3_deviasi}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justify="end" borderTopWidth={1} mt="2">
        <DashboardPagination
          current={pagePoint03}
          total={dataPengkuranPoint03 ? dataPengkuranPoint03.totalPage : 0}
          onPageClick={handlePageClick}
        />
      </Flex>
    </>
  );
};

export default DashboardTablePengukuran03;
