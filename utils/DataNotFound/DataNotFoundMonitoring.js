import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiTwotoneSnippets } from 'react-icons/ai';

const DataNotFoundMonitoring = () => {
  return (
    <React.Fragment>
      <Flex w="full " justify="center" p="10">
        <Box>
          <VStack>
            <Icon as={AiTwotoneSnippets} fontSize="3xl" color="ims-red" />
            <Text fontWeight="semibold">Data Not Found</Text>
          </VStack>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default DataNotFoundMonitoring;
