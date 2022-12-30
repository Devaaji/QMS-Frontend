import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  GridItem,
  Text,
  useBoolean,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import DashboardPagination from '../components/Dashboard/DashboardPagination';
import useRemoteData01Monitoring from '../components/hooks/remote/useRemoteData01Monitoring';
import TableCardMonitoring01 from '../components/Table/TableCardMonitoring01';
import HeaderMonitoring01 from '../components/Header/HeaderMonitoring01';
import DataNotFoundMonitoring from '../utils/DataNotFound/DataNotFoundMonitoring';
import useAxios from '../components/hooks/useAxios';
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';

const Monitoring01 = () => {
  const toast = useToast();
  const [dataLimit, setDataLimit] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoadingGetFTP, setIsLoadingGetFTP] = useBoolean();

  const [isGetFTP, getFTPItem01] = useAxios(
    {
      url: '/item_01',
      method: 'GET',
    },
    { manual: true }
  );
  const isFTP = isGetFTP.loading;

  const {
    data: dataMonitoring01,
    isLoading,
    isSuccess,
  } = useRemoteData01Monitoring({
    limitIndex: dataLimit,
    pageIndex: pageIndex,
    isFTP,
  });

  const handleGETFTP = () => {
    setIsLoadingGetFTP.on();
    getFTPItem01()
      .then((res) => {
        toast({
          title: 'Successfully',
          description: 'GET DATA FTP ',
          status: 'success',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
        });
        setIsLoadingGetFTP.off();
      })
      .catch((error) => {
        toast({
          title: 'Error Load Data',
          description: 'Please Check in your browser and try again',
          status: 'error',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
        });
        setIsLoadingGetFTP.off();
      });
  };

  useEffect(() => {
    setPageIndex(1);
  }, [dataLimit]);

  const handlePageClick = (page) => {
    setPageIndex(page);
  };

  const oddDataMapper =
    dataMonitoring01?.status === 200
      ? dataMonitoring01?.data?.filter((_, index) => {
          return index % 2 !== 1;
        })
      : '';

  return (
    <VStack h="85vh" overflow="auto" align="stretch" p="6" spacing="3">
      <Head>
        <title>Monitoring Hasil Pengukuran 01 | QMS</title>
      </Head>
      <Box
        py={{ base: '4', md: '4', lg: '3' }}
        bg={useColorModeValue('white', 'gray.800')}
        position="sticky"
        zIndex={10}
        top="-6"
      >
        <HeaderMonitoring01
          isLoadingFTP={isLoadingGetFTP}
          onClickFTP={handleGETFTP}
        />
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
                Submit
              </Text>
            </GridItem>
          </Flex>
        </Flex>
      </Box>
      {isLoading && <Box>Loading.... </Box>}
      {dataMonitoring01?.messages === 'Data Not Found!' ? (
        <DataNotFoundMonitoring />
      ) : (
        <>
          {isSuccess &&
            dataMonitoring01?.data.map((item, index) => (
              <TableCardMonitoring01
                item={item}
                key={index}
                odds={oddDataMapper}
              />
            ))}
        </>
      )}
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
          total={dataMonitoring01 ? dataMonitoring01.totalPage : 0}
          onPageClick={handlePageClick}
        />
      </Flex>
    </VStack>
  );
};

Monitoring01.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export const getServerSideProps = async (context) =>
  getServerSidePropsWithAuth(context);

export default Monitoring01;
