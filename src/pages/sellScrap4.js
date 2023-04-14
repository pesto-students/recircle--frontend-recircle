import React from 'react';
import { Box, Flex, Text, Stack, Divider, useColorModeValue } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const Page4 = () => {
  const location = useLocation();
  const { selectedItems, address, latitude, longitude, pickupDate } = location.state || {};

  return (
    <Box p={4} minH="calc(100vh - 64px)">
      <Box mb={4}>
        <Text fontSize="xl" fontWeight="bold">
          Order Summary
        </Text>
      </Box>
      <Stack spacing={4}>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
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
            <Text>No scrap items selected</Text>
          )}
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
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
                <iframe
                  title="Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${latitude},${longitude}`}
                  allowFullScreen
                />
              </Box>
            </>
          ) : (
            <Text>No home address provided</Text>
          )}
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Pick-Up Date:
          </Text>
          <Divider mt={2} mb={4} />
          <Text>{pickupDate || 'No date selected'}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Page4;