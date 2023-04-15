import React from 'react';
import { Box, Flex, Text, Stack, Divider, useColorModeValue, Progress, Heading, Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Page4 = () => {
  const location = useLocation();
  const { selectedItems, address, latitude, longitude, pickupDate } = location.state || {};

  return (
    <>
    <Flex direction="column" align="center"></Flex><Navbar />
    <Box w="70%" h="70px" bg="#38A327" borderRadius={15} p={1} mb={4} ml={200} >
              {/* <Text fontSize="xl" fontWeight="semibold">Progress Tracker</Text> */}
              <Flex justify="space-between" mt={2}>
                  <Box flex="1">
                      <Text fontSize="xl" fontWeight="bold">
                          Select Scrap
                      </Text>
                  </Box>
                  <Box flex="1">
                      <Text fontSize="xl" fontWeight="bold">
                          PickUp Date
                      </Text>
                  </Box>
                  <Box flex="1">
                      <Text fontSize="xl" fontWeight="bold">
                          Confirm
                      </Text>
                  </Box>
              </Flex>
          </Box>
          <Progress value={100} size="md" borderRadius={10} colorScheme="green" w="70%" ml={200} mb={5}/>
          <Heading mr={600} fontSize={40} pb={5}>Pickup Confirmation</Heading>
    <Box p={4} minH="calc(100vh - 200px)"  bg="#9ECCA3" borderRadius={10} w="70%" ml={200}>
          <Box mb={4}  borderRadius={15}>
              <Text fontSize="2xl" fontWeight="bold" >
                  Order Summary
              </Text>
          </Box>
          <Stack spacing={4}>
              <Box bg="#D9D9D9" borderRadius={15}>
                  <Text fontSize="lg" fontWeight="bold" mr={700}>
                      Scrap Items:
                  </Text>
                  <Divider mt={2} mb={4} />
                  {selectedItems ? (
                      <Stack spacing={2}>
                          {selectedItems.map((item) => (
                              <Box key={item.id}>
                                  <Flex justify="space-between">
                                      <Text>{item.name}</Text>
                                      <Text>{item.price}</Text>
                                  </Flex>
                                  <Divider my={2} />
                              </Box>
                          ))}
                      </Stack>
                  ) : (
                      <Text mr={600} pb={3}>No scrap items selected</Text>
                  )}
              </Box>
              <Box bg="#D9D9D9" borderRadius={15}>
                  <Text fontSize="lg" fontWeight="bold" mr={680}>
                      Home Address:
                  </Text>
                  <Divider mt={2} mb={4} />
                  {address ? (
                      <>
                          <Text mb={2}>{address}</Text>
                          <Box
                              w="100%"
                              h="200px"
                              bgColor={("gray.100", "gray.800")}
                              borderRadius={10}
                              overflow="hidden"
                          >
                          </Box>
                      </>
                  ) : (
                      <Text pb={4} mr={600}>No home address provided</Text>
                  )}
              </Box>
              <Box bg="#D9D9D9" borderRadius={15}>
                  <Text fontSize="lg" fontWeight="bold" mr={680}>
                      Pick-Up Date:
                  </Text>
                  <Divider mt={2} mb={4} />
                  <Text mr={680}>{pickupDate || 'No date selected'}</Text>
              </Box>
          </Stack>
          <Button bg="#38A327" mt={5} width={300} borderRadius={10}>
                  Confirm
              </Button>
      </Box>
      <Footer/>
      </>
  );
};

export default Page4;