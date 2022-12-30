import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import DashboardTablePengukuran01 from '../01/DashboardTablePengukuran01';
import DashboardTablePengukuran02 from '../01/DashboardTablePengukuran02';
import DashboardChartActivity01 from '../01/DashboardChartActivity01';
import DashboardChartActivity02 from '../01/DashboardChartActivity02';
import DashboardTablePengukuran03 from '../01/DashboardTablePengukuran03';
import DashboardChartActivity03 from '../01/DashboardChartActivity03';

const DashboardTableActivity = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Point Pengukuran 1 (Toleransi 0,1)</Tab>
          <Tab>Point Pengukuran 2 (Toleransi 0,05)</Tab>
          <Tab>Point Pengukuran 3 (Toleransi 0,05)</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <DashboardTablePengukuran01 />
            <DashboardChartActivity01 />
          </TabPanel>
          <TabPanel>
            <DashboardTablePengukuran02 />
            <DashboardChartActivity02 />
          </TabPanel>
          <TabPanel>
            <DashboardTablePengukuran03 />
            <DashboardChartActivity03 />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default DashboardTableActivity;
