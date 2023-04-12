import { Box, Flex, Heading, Image, Text, VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import Navbar from "../components/navbar";


function Event2Page() {
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
              On the auspicious day of Chhatrapati Shivaji Maharaj Jayanti, we have planned a cleaning drive during the trek to Sinhagad Fort for which all the cleaning kits will be provided by us.
              For each audience member who attends our event we will plant one tree on their behalf under Project 8 of ReCircle. 
              It’s going to be a great opportunity to talk about what the climate crisis means for this community, as well as the solutions and actions we can take to make a difference. We hope you’ll join us!
              <br></br>Pick up & Drop facility can be availed for a nominal amount of Rs.280 which includes complimentary Breakfast. (Limited Seats) 
              </Text>
              <Text fontSize="2x1" mb="4" fontWeight="bold">
                Time and Date: Monday, 18th February 2023, 9:00 AM - 12:00 PM
              </Text>
            </Box>
          </Flex>
          <VStack spacing="4" mt="8" w="50%" mx="auto" bg="gray.100" p="6" borderRadius="md" marginLeft="1">
            <Heading>Registration Form</Heading>
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
  
  export default Event2Page;