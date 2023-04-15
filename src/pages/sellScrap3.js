import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Checkbox,
  CheckboxGroup,
  VStack,
  HStack,
  Text,
  Button,
  Spacer,
  Flex,
  Box,
  Progress,
  Textarea,
  Link
} from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Page3 = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const handleSelectedItems = (items) => {
    setSelectedItems(items);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    console.log(selectedItems, selectedDate, selectedTime); // Send the selected items, date, and time to the backend or store it in state.
    // Add your code to navigate to the next page.
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/sellscrap2/`);
  };


  return (
    <><Flex direction="column" align="center">
          <Navbar />
          {/* Main content */}
          <Box w="70%" h="70px" bg="#38A327" borderRadius={15} p={1} mb={4}>
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
          <Progress value={60} size="md" borderRadius={10} colorScheme="green" w="70%" />

          {/* Select Address and PickUp Time */}
          <Box mt={10} w="80%" bg={'lightgray'} borderRadius={15}>
            <Box >
              <Text fontSize="xl" fontWeight="bold" my={4}>
                Please enter your address
              </Text>
              </Box>
              <VStack align="flex-start"alignItems="center" spacing={5}>
                  <Textarea placeholder="Enter your address" size="sm" resize="none" w="100%" h="100px" bg="#9ECCA3"/>
                  <Box alignItems="start"  mt={-500} p={3} borderRadius={15}>
                      <Text fontSize="md" fontWeight="bold"  mb={2}  w={700}>
                          Select a date for scrap pickup
                      </Text>
                      <Text fontSize="small" fontWeight="semibold" fontStyle={'italic'} mb={2}  w={700}>
                          Prefered timings (9AM - 7 PM)
                      </Text>
                      <DatePicker  selected={selectedDate} onChange={handleDateChange} dateFormat="dd/MM/yyyy" />
                  </Box>
                  {/* <Box mb={3}>
                      <Text fontSize="md" fontWeight="semibold" mb={4}>
                          Select Time
                      </Text>
                      <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
                  </Box> */}
              </VStack>
          </Box>

          {/* Buttons */}
          <HStack mt={8}>
              <Button colorScheme="green" onClick={handleBack}>
                  Back
              </Button>
              <Spacer />
              <Button colorScheme="green" onClick={handleSubmit}>
                  Continue
                  <Link href="/sellScrap4" marginRight="10px" color="black" fontWeight="normal">.
            </Link>
              </Button>
          </HStack>
      </Flex><Footer /></>
  );
};

export default Page3;