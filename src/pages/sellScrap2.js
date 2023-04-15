import { useState } from 'react';
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
  Link
} from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Page2 = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (items) => {
    setSelectedItems(items);
  };

  const handleSubmit = () => {
    console.log(selectedItems); // Send the selected items to the backend or store it in state.
    // Add your code to navigate to the next page.
  };

  return (
    <>
        <Navbar/>
      {/* Main content */}
      <Flex justify="center" alignItems="center" h="100vh" ml={100} mt={59} p={10} mb={300} mr={90}>
        <VStack spacing={4} alignItems="flex-start" mb={200}>
        <Flex direction="column" width={1000} mt={200}>
  <Box w="100%" h="70px" bg="#38A327" borderRadius={15} p={1} mb={4} mt={200}>
    {/* <Text fontSize="xl" fontWeight="semibold">Progress Tracker</Text> */}
    <Flex justify="space-between" mt={2}>
      <Box flex="1">
        <Text fontSize="xl" fontWeight="bold">Select Scrap</Text>
      </Box>
      <Box flex="1">
        <Text fontSize="xl" fontWeight="bold">PickUp Date</Text>
      </Box>
      <Box flex="1">
        <Text fontSize="xl" fontWeight="bold">Confirm</Text>
      </Box>
    </Flex>
  </Box>
  <Progress
    value={30}
    size="md"
    borderRadius={10}
    colorScheme="green"
    w="100%"
  />
</Flex>
            {/* Progress Bar */}
          
          <Text fontSize="30" fontWeight="bold">
            Select the materials you want to sell:
          </Text>
          <Text fontSize="20" fontStyle="italic">
            Prices may fluctuate because of the recycling industry
          </Text>
          <CheckboxGroup
            colorScheme="green"
            value={selectedItems}
            onChange={handleSelectedItems}
          >
            {/* Paper */}
            <VStack alignItems="flex-start">
              <Text fontSize="lg" fontWeight="bold">
                Paper:
              </Text>
              <HStack spacing={4}>
  <Box bg="#D9D9D9" p={3.5} borderRadius={10}>
    <Checkbox value="newspaper" colorScheme="green">Newspaper</Checkbox>
  </Box>
  <Box bg="lightgrey" p={3.5} borderRadius={10}>
    <Checkbox value="books" colorScheme="green">Books</Checkbox>
  </Box>
  <Box bg="lightgrey" p={3.5} borderRadius={10}>
    <Checkbox value="carton" colorScheme="green">Carton</Checkbox>
  </Box>
  <Box bg="lightgrey" p={3.5} borderRadius={10}>
    <Checkbox value="magazines" colorScheme="green">Magazines</Checkbox>
  </Box>
  <Box bg="lightgrey" p={1.8} borderRadius={10}>
    <Checkbox value="white_paper" colorScheme="green">White Paper</Checkbox>
  </Box>
  <Box bg="lightgrey" p={1.8} borderRadius={10}>
    <Checkbox value="record_paper" colorScheme="green">Record Paper</Checkbox>
  </Box>
  <Box bg="lightgrey" p={1.8} borderRadius={10}>
    <Checkbox value="grey_board" colorScheme="green">Grey Board</Checkbox>
  </Box>
</HStack>
            </VStack>

          {/* Plastic */}
<VStack alignItems="flex-start">
  <Text fontSize="lg" fontWeight="bold">
    Plastic:
  </Text>
  <HStack spacing={4}>
    <Box bgColor="lightgray" borderRadius={10} p={5}>
      <Checkbox value="bumper">Bumper</Checkbox>
    </Box>
    <Box bgColor="lightgray" borderRadius={10} p={2}>
      <Checkbox value="plastic_jar_15ltr">Plastic Jar 15ltr</Checkbox>
    </Box>
    <Box bgColor="lightgray" borderRadius={10} p={5}>
      <Checkbox value="fiber">Fiber</Checkbox>
    </Box>
    <Box bgColor="lightgray" borderRadius={10} p={2}>
      <Checkbox value="soft_plastics">Soft Plastics</Checkbox>
    </Box>
    <Box bgColor="lightgray" borderRadius={10} p={2}>
      <Checkbox value="mix_plastics">Mix Plastics</Checkbox>
    </Box>
    <Box bgColor="lightgray" borderRadius={10} p={2}>
      <Checkbox value="plastic_jar_5ltr">Plastic Jar 5ltr</Checkbox>
    </Box>
    <Box bgColor="lightgray" borderRadius={10} p={2}>
      <Checkbox value="plastic_bori">Plastic Bori</Checkbox>
    </Box>
  </HStack>
</VStack>

            {/* Metals */}
<VStack alignItems="flex-start">
  <Text fontSize="lg" fontWeight="bold">
    Metals:
  </Text>
  <HStack spacing={4}>
    <Box
      bgColor="lightgrey"
      borderRadius={10}
      p={4}
    >
      <Checkbox value="Copper">Copper</Checkbox>
    </Box>
    <Box
      bgColor="lightgrey"
      borderRadius={10}
      p={4}
    >
      <Checkbox value="Brass">Brass</Checkbox>
    </Box>
    <Box
      bgColor="lightgrey"
      borderRadius={10}
      p={1}
    >
      <Checkbox value="Beverage cans">Beverage cans</Checkbox>
    </Box>
    <Box
      bgColor="lightgrey"
      borderRadius={10}
      p={4}
    >
      <Checkbox value="Aluminium">Aluminium</Checkbox>
    </Box>
    <Box
      bgColor="lightgrey"
      borderRadius={10}
      p={1}
    >
      <Checkbox value="Casting aluminium">Casting aluminium</Checkbox>
    </Box>
    <Box
      bgColor="lightgrey"
      borderRadius={10}
      p={3}
    >
      <Checkbox value="Iron">Iron</Checkbox>
    </Box>
    <Box
      bgColor="lightgrey"
      borderRadius={10}
      p={3}
    >
      <Checkbox value="Steel">Steel</Checkbox>
    </Box>
    <Box
      bgColor="lightgrey"
      borderRadius={10}
      p={3}
    >
      <Checkbox value="Tin">Tin</Checkbox>
    </Box>
  </HStack>
</VStack>

        {/* E-waste */}
<VStack alignItems="flex-start">
  <Text fontSize="lg" fontWeight="bold">
    E-waste:
  </Text>
  <HStack spacing={4}>
    <Box bg="lightgrey" borderRadius="10" p="3">
      <Checkbox value="Computer screens">Computer screens</Checkbox>
    </Box>
    <Box bg="lightgrey" borderRadius="10" p="3">
      <Checkbox value="Keyboards mouse">Keyboards mouse</Checkbox>
    </Box>
    <Box bg="lightgrey" borderRadius="10" p="3">
      <Checkbox value="Phones">Phones</Checkbox>
    </Box>
  </HStack>
</VStack>

       {/* Other */}
       <VStack alignItems="flex-start">
          <Text fontSize="lg" fontWeight="bold">
            Other:
          </Text>
          <HStack spacing={4}>
            <Box bg="lightgrey" borderRadius={10} p={3}>
              <Checkbox value="Beer bottles">Beer bottles</Checkbox>
            </Box>
            <Box bg="lightgrey" borderRadius={10} p={3}>
              <Checkbox value="Broken glass">Broken glass</Checkbox>
            </Box>
            <Box bg="lightgrey" borderRadius={10} p={3}>
              <Checkbox value="Tyres">Tyres</Checkbox>
            </Box>
            <Box bg="lightgrey" borderRadius={10} p={3}>
              <Checkbox value="Mix waste">Mix waste</Checkbox>
            </Box>
          </HStack>
        </VStack>
      </CheckboxGroup>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft:"400"}}>
      <Button colorScheme="green" size="lg">
        Continue
        <Link href="/sellScrap3" marginRight="10px" color="black" fontWeight="normal">.
            </Link>
      </Button>
    </div>
    </VStack>
  </Flex>
  <Footer />
</>
);
};

export default Page2;