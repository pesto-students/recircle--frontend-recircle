import { Box, Flex, Heading, Image, Text, VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import Navbar from "../components/navbar";


function Event1Page() {
    return (
      <>
        <Navbar />
        <Heading as="h2" size="xl" mb="10" textAlign="center" bg="lightgreen" py="5">
  Volunteer with ReCircle!
</Heading>
        <Box px={[4, 8]} py={10}>
          <Flex justifyContent="center">
            <Box flex="1" ml="4" mr="10">
              <Image src="https://via.placeholder.com/700x500" alt="Event 1" borderRadius="10px" />
            </Box>
            <Box flex="1">
              <Text fontSize="md" mb="4" textAlign="left">
                Every individual, being a part of society, should have awareness & responsibility of giving back. Individuals have the power & potential to bring in change if channeled in the right direction. ReCircle helps you channel your potential towards a noble cause i.e donating and planting trees. Any individual who wishes to bring a change can join with ReCircle. Either you can donate a tree or you can donate your ‘Shram’ (efforts) towards tree plantation & nurturing by volunteering with ReCircle in Pune.<br></br>
                Since we started ReCircle in 2022, tens of thousands of volunteers have joined us and have contributed to forestation. All our volunteers share our common dream to make this earth a greener place. Individuals who have volunteered with ReCircle in Pune have planted thousands of trees so far. But we’re not going to stop here. With the continuous support from individuals from all over Pune, we are continuously growing & scaling up in our activities!
              </Text>
              <Text fontSize="2x1" mb="4" fontWeight="bold">
                Time and Date: Monday, 12th June 2023, 2:00 PM - 4:00 PM
              </Text>
            </Box>
          </Flex>
          <VStack spacing="4" mt="8" w="50%" mx="auto" bg="gray.100" p="6" borderRadius="md" marginLeft="1">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter your name" bg="whatsapp.100"/>
            </FormControl>
            <FormControl>
              <FormLabel>Contact Number</FormLabel>
              <Input type="tel" placeholder="Enter your contact number" bg="whatsapp.100"/>
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" bg="whatsapp.100"/>
            </FormControl>
            <Button colorScheme="green">Register</Button>
          </VStack>
        </Box>
      </>
    );
  }
  
  export default Event1Page;