import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Radio,
  RadioGroup,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import ModalAgreement from '../../../utils/modals/ModalAgreement';

const TableCardMonitoring01 = ({ item, odds }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const oddsColor = odds
    ?.filter((data) => data?.uid === item.uid)
    .map(() => useColorModeValue('#FBFBFB', 'gray.700'));

  const [isSaveButton, setIsSaveButton] = useState(true);

  const [isGoodPoint1, setIsGoodPoint1] = useState('0');
  const [isGoodPoint2, setIsGoodPoint2] = useState('0');
  const [isGoodPoint3, setIsGoodPoint3] = useState('0');

  useEffect(() => {
    if (isGoodPoint1 !== '0' && isGoodPoint2 !== '0' && isGoodPoint3 !== '0') {
      setIsSaveButton(false);
    }
  }, [isGoodPoint1, isGoodPoint2, isGoodPoint3]);

  return (
    <Box w="full">
      <Box
        bg={
          oddsColor?.[0]
            ? oddsColor?.[0]
            : useColorModeValue('#F0F7FF', 'gray.600')
        }
        rounded="xl"
        boxShadow="md"
        py="4"
        align="stretch"
      >
        <Flex w="full" px="2">
          <Flex w="35%">
            <GridItem textAlign="center" alignSelf="center" w="35%">
              <Text fontSize="x-small">{item.no_operasi}</Text>
            </GridItem>
            <GridItem textAlign="center" alignSelf="center" w="25%">
              <Text fontSize="x-small">
                {item.date} & {item.time_prod}
              </Text>
            </GridItem>
            <GridItem textAlign="center" alignSelf="center" w="25%">
              <Text fontSize="x-small">{item.cycle_time}</Text>
            </GridItem>
            <GridItem textAlign="center" alignSelf="center" w="15%">
              <Text fontSize="x-small">{item.total_product}</Text>
            </GridItem>
          </Flex>
          <Flex w="65%">
            <Flex w="full" direction="column">
              {/* 1 */}
              <Flex w="full">
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">1</Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p3_dimension}</Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p1_tolerance}</Text>
                </GridItem>
                <GridItem textAlign="center" w="20%" alignSelf="center">
                  <Flex>
                    <Text w="full" textAlign="center" fontSize="x-small">
                      {item.p3_dimension_min}
                    </Text>
                    <Text w="full" textAlign="center" fontSize="x-small">
                      {item.p3_dimension_max}
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p1_actual}</Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p1_deviasi}</Text>
                </GridItem>
                <GridItem textAlign="center" w="20%" alignSelf="center">
                  <RadioGroup
                    onChange={setIsGoodPoint1}
                    value={isGoodPoint1}
                    size="sm"
                    alignSelf="center"
                  >
                    <Center>
                      <Radio
                        colorScheme="green"
                        value="1"
                        fontSize="smaller"
                        mr="2"
                      >
                        <Text fontSize="x-small">Good</Text>
                      </Radio>
                      <Radio colorScheme="red" value="2">
                        <Text fontSize="x-small">Bad</Text>
                      </Radio>
                    </Center>
                  </RadioGroup>
                </GridItem>
                <GridItem
                  textAlign="center"
                  w="10%"
                  alignSelf="center"
                ></GridItem>
              </Flex>
              {/* 2 */}
              <Flex w="full">
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">2</Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p3_dimension}</Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p2_tolerance}</Text>
                </GridItem>
                <GridItem textAlign="center" w="20%" alignSelf="center">
                  <Flex>
                    <Text w="full" textAlign="center" fontSize="x-small">
                      {item.p3_dimension_min}
                    </Text>
                    <Text w="full" textAlign="center" fontSize="x-small">
                      {item.p3_dimension_max}
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p2_actual}</Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p2_deviasi}</Text>
                </GridItem>
                <GridItem textAlign="center" w="20%" alignSelf="center">
                  <RadioGroup
                    onChange={setIsGoodPoint2}
                    value={isGoodPoint2}
                    size="sm"
                    alignSelf="center"
                  >
                    <Center>
                      <Radio
                        colorScheme="green"
                        value="1"
                        fontSize="smaller"
                        mr="2"
                      >
                        <Text fontSize="x-small">Good</Text>
                      </Radio>
                      <Radio colorScheme="red" value="2">
                        <Text fontSize="x-small">Bad</Text>
                      </Radio>
                    </Center>
                  </RadioGroup>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Button
                    colorScheme="teal"
                    size="xs"
                    onClick={onOpen}
                    isDisabled={isSaveButton}
                  >
                    Save
                  </Button>
                </GridItem>
              </Flex>
              <ModalAgreement
                item={item}
                isOpen={isOpen}
                onClose={onClose}
                desicion1={isGoodPoint1}
                desicion2={isGoodPoint2}
                desicion3={isGoodPoint3}
              />
              {/* 3 */}
              <Flex w="full">
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">3</Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p3_dimension}</Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p3_tolerance}</Text>
                </GridItem>
                <GridItem textAlign="center" w="20%" alignSelf="center">
                  <Flex>
                    <Text w="full" textAlign="center" fontSize="x-small">
                      {item.p3_dimension_min}
                    </Text>
                    <Text w="full" textAlign="center" fontSize="x-small">
                      {item.p3_dimension_max}
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p3_actual}</Text>
                </GridItem>
                <GridItem textAlign="center" w="10%" alignSelf="center">
                  <Text fontSize="x-small">{item.p3_deviasi}</Text>
                </GridItem>
                <GridItem textAlign="center" w="20%" alignSelf="center">
                  <RadioGroup
                    onChange={setIsGoodPoint3}
                    value={isGoodPoint3}
                    size="sm"
                    alignSelf="center"
                  >
                    <Center>
                      <Radio
                        colorScheme="green"
                        value="1"
                        fontSize="smaller"
                        mr="2"
                      >
                        <Text fontSize="x-small">Good</Text>
                      </Radio>
                      <Radio colorScheme="red" value="2">
                        <Text fontSize="x-small">Bad</Text>
                      </Radio>
                    </Center>
                  </RadioGroup>
                </GridItem>
                <GridItem
                  textAlign="center"
                  w="10%"
                  alignSelf="center"
                ></GridItem>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default TableCardMonitoring01;
