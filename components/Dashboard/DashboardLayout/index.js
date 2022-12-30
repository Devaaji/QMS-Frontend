import { Flex } from "@chakra-ui/react";
import DashboardProvider from "../../../context/dashboard/DashboardProvider";
import generateSidebarItems from "../../../utils/sidebar";
import DashboardMain from "../DashboardMain";
import DashboardSidebar from "../DashboardSidebar";

const DashboardLayout = ({ children }) => {
  let sidebarItems = generateSidebarItems();

  return (
    <Flex overflow="hidden">
      <DashboardProvider>
        <DashboardSidebar items={sidebarItems} />
        <DashboardMain>{children}</DashboardMain>
      </DashboardProvider>
    </Flex>
  );
};

export default DashboardLayout;
