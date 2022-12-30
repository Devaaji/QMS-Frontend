import React from 'react';
import { SimpleGrid, VStack } from '@chakra-ui/react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import DashboardTableActivity from '../components/Dashboard/DashboardTableActivity';
import Head from 'next/head';
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';

const HomePage = () => {
  return (
    <VStack align="stretch" py="6" px="4" spacing="6">
      <Head>
        <title>Dashboard M 6269 - 01 | QMS</title>
      </Head>
      <SimpleGrid columns={1}>
        <DashboardTableActivity />
      </SimpleGrid>
    </VStack>
  );
};

HomePage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export const getServerSideProps = async (context) =>
  getServerSidePropsWithAuth(context);

export default HomePage;
