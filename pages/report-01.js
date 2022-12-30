import {
  Box,
  Flex,
  GridItem,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import DashboardPagination from '../components/Dashboard/DashboardPagination';
import useRemoteData01Reporting from '../components/hooks/remote/useRemoteData01Reporting';
import TableCardReport01 from '../components/Table/TableCardReport01';
import DataNotFoundReporting from '../utils/DataNotFound/DataNotFoundReporting';
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';

const Report01 = () => {
  const [dataLimit, setDataLimit] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  const { data: dataReports01, isSuccess } = useRemoteData01Reporting({
    limitIndex: dataLimit,
    pageIndex: pageIndex,
  });

  useEffect(() => {
    setPageIndex(1);
  }, [dataLimit]);

  const handlePageClick = (page) => {
    setPageIndex(page);
  };

  const oddDataMapper =
    dataReports01?.status === 200
      ? dataReports01?.data?.filter((_, index) => {
          return index % 2 !== 1;
        })
      : '';

  return (
    <React.Fragment>
      {dataReports01?.messages === 'Data Not Found!' ? (
        <DataNotFoundReporting />
      ) : (
        <VStack h="85vh" overflow="auto" align="stretch" p="6" spacing="3">
          <Head>
            <title>Report Hasil Pengukuran 01 | QMS</title>
          </Head>
          <Box
            py={{ base: '4', md: '4', lg: '3' }}
            bg={useColorModeValue('white', 'gray.800')}
            position="sticky"
            zIndex={10}
            top="-6"
          >
            <Flex w="full">
              <Flex w="35%">
                <GridItem textAlign="center" alignSelf="center" w="35%">
                  <Text fontSize="x-small" fontWeight="semibold">
                    No Operasi
                  </Text>
                </GridItem>
                <GridItem textAlign="center" alignSelf="center" w="25%">
                  <Text fontSize="x-small" fontWeight="semibold">
                    Tanggal & Waktu Start
                  </Text>
                </GridItem>
                <GridItem textAlign="center" alignSelf="center" w="25%">
                  <Text fontSize="x-small" fontWeight="semibold">
                    Cycle Time
                  </Text>
                </GridItem>
                <GridItem textAlign="center" alignSelf="center" w="15%">
                  <Text fontSize="x-small" fontWeight="semibold">
                    No Product
                  </Text>
                </GridItem>
              </Flex>
              <Flex w="65%">
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontWeight="semibold" fontSize="x-small">
                    Point Pengukuran
                  </Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontWeight="semibold" fontSize="x-small">
                    Dimensi
                  </Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontWeight="semibold" fontSize="x-small">
                    Toleransi
                  </Text>
                </GridItem>
                <GridItem textAlign="center" w="20%">
                  <Text fontWeight="semibold" fontSize="x-small">
                    Dimensi
                  </Text>
                  <Flex>
                    <Text
                      w="full"
                      textAlign="center"
                      fontWeight="semibold"
                      fontSize="x-small"
                    >
                      Min
                    </Text>
                    <Text
                      w="full"
                      textAlign="center"
                      fontWeight="semibold"
                      fontSize="x-small"
                    >
                      Max
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontWeight="semibold" fontSize="x-small">
                    Nilai Actual
                  </Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontWeight="semibold" fontSize="x-small">
                    Deviasi
                  </Text>
                </GridItem>
                <GridItem textAlign="center" w="20%" alignSelf="center">
                  <Text fontWeight="semibold" fontSize="x-small">
                    Desicion
                  </Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center" pr="4">
                  <Text fontWeight="semibold" fontSize="x-small">
                    Result
                  </Text>
                </GridItem>
              </Flex>
            </Flex>
          </Box>
          {isSuccess &&
            dataReports01?.data.map((item, index) => (
              <TableCardReport01 item={item} key={index} odds={oddDataMapper} />
            ))}
          <Flex
            flexDir={{ base: 'column', md: 'row', xl: 'row' }}
            justifyContent="space-between"
            borderTopWidth="1px"
            alignItems="center"
            py="2"
          >
            <Box display="flex" alignItems="center"></Box>
            <DashboardPagination
              current={pageIndex}
              total={dataReports01 ? dataReports01.totalPage : 0}
              onPageClick={handlePageClick}
            />
          </Flex>
        </VStack>
      )}
    </React.Fragment>
  );
};

Report01.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export const getServerSideProps = async (context) =>
  getServerSidePropsWithAuth(context);

export default Report01;
