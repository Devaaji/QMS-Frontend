import React from 'react';
import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useDashboard } from '../../../context/dashboard/DashboardProvider';
import { HiMoon, HiSun } from 'react-icons/hi';
import DashboardUserNavbar from '../DashboardUserNavbar';
import LogoQMS from '../../core/LogoQMS';

const DashboardNavbar = () => {
  const { isDesktopSidebarOpened, onSidebarToggle } = useDashboard();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      p="4"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      alignItems={{
        base: 'stretch',
        md: isDesktopSidebarOpened ? 'stretch' : 'center',
        lg: 'center',
      }}
      direction={{
        base: 'column',
        md: isDesktopSidebarOpened ? 'column' : 'row',
        lg: 'row',
      }}
    >
      <HStack w="full">
        <Flex w="full">
          <Flex alignItems="center">
            <IconButton
              icon={<FiMenu />}
              variant="ghost"
              onClick={onSidebarToggle}
              aria-label="Menu"
            />
          </Flex>
          <Center px="5">
            <LogoQMS multiplySize={0.6} />
          </Center>
          <Spacer />
          <Box display={{ base: 'block', md: 'block', xl: 'none' }}>
            <Text>Logo</Text>
          </Box>
          <Spacer />
          <HStack spacing={3}>
            <Box onClick={toggleColorMode}>
              <IconButton
                variant="ghost"
                fontSize="xl"
                rounded="full"
                color="gray"
                icon={
                  colorMode === 'light' ? <HiSun /> : <HiMoon color="yellow" />
                }
                aria-label="Notifications"
              />
            </Box>
            <DashboardUserNavbar />
          </HStack>
        </Flex>
      </HStack>
    </Stack>
  );
};

export default DashboardNavbar;
