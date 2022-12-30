import React from 'react';
import { Button, Flex, HStack, useBoolean, useToast } from '@chakra-ui/react';
import { AiFillDatabase, AiOutlineCloudServer } from 'react-icons/ai';
import useAxios from '../../hooks/useAxios';

const HeaderMonitoring01 = ({ isLoadingFTP, onClickFTP }) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useBoolean();

  const [, getDATtoCSV] = useAxios(
    {
      url: '/move_item_02',
      method: 'GET',
    },
    { manual: true }
  );

  const handleGetDATtoCSV = () => {
    setIsLoading.on();
    getDATtoCSV()
      .then((res) => {
        toast({
          title: 'Successfully',
          description: 'Please Check Data Move DAT to CSV',
          status: 'success',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
        });
        setIsLoading.off();
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
        setIsLoading.off();
      });
  };

  return (
    <React.Fragment>
      <Flex justify="end" py="1">
        <HStack spacing={4}>
          <Button
            isLoading={isLoadingFTP}
            onClick={onClickFTP}
            leftIcon={<AiOutlineCloudServer />}
            colorScheme="teal"
            size="sm"
          >
            GET FTP
          </Button>
          <Button
            onClick={handleGetDATtoCSV}
            leftIcon={<AiFillDatabase />}
            colorScheme="teal"
            size="sm"
            isLoading={isLoading}
            loadingText="Loading"
          >
            DAT to CSV
          </Button>
        </HStack>
      </Flex>
    </React.Fragment>
  );
};

export default HeaderMonitoring01;
