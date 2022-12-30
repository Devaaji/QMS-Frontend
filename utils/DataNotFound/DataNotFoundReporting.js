import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiTwotoneSnippets } from "react-icons/ai";

const DataNotFoundReporting = () => {
  return (
    <React.Fragment>
      <Flex w="full " justify="center" p="10">
        <Box>
          <VStack>
            <Icon as={AiTwotoneSnippets} fontSize="3xl" color="ims-red" />
            <Text fontSize="lg" fontWeight="bold">
              Report
            </Text>
            <Text fontWeight="semibold">
              Hasil Penelitian Tidak Ditemukan, Silahkan Check Monitoring hasil
              penelitian
            </Text>
          </VStack>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default DataNotFoundReporting;
