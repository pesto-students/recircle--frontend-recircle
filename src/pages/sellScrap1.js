import { Box, Checkbox, Flex, Spacer, Heading, Button, Text, Link, Image } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function SellScrapPage1() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems((prevItems) => prevItems.filter((i) => i !== item));
    } else {
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
  };

  const isItemSelected = (item) => {
    return selectedItems.includes(item);
  };

  const handleContinue = () => {
    console.log(selectedItems);
    // Add code to continue to the next page
  };

  return (
    <>
      <Navbar />
      <Heading ml={60}>What would you like to sell?</Heading>
      <Flex>
       {/* Navbar */}
{/* Navbar */}
<Flex
  mt={-59.9}
  borderRadius={10}
  flexDir="column"
  bg="gray.200"
  h="100vh"
  w="20%"
  alignItems="center"
>
  {/* User Profile */}
  <Box my="auto" fontSize="30" fontStyle="extrabold" >My Profile</Box>
  <Image
    boxSize="150px"
    borderRadius="full"
    src="https://via.placeholder.com/150"
    alt="Profile Picture"
    mt="4"
  />
  <Box mt="4" w="100%" textAlign="left" ml={20}>
    <Link href="#" fontSize={25}>How it works</Link>
    <br/>
    <br/>
    <Link href="#" fontSize={25}>Share us</Link>
    <br/>
    <br/>
    <Link href="#" fontSize={25}>Scrap Impact</Link>
    <br/>
    <br/>
    <Link href="#" fontSize={25}>Profile</Link>
    <br/>
    <br/>
    <Link href="#" fontSize={25}>About Us</Link>
    <br/>
    <br/>
    <Link href="#" fontSize={25}>Logout</Link>
  </Box>
  <Spacer />
</Flex>

        {/* Center content */}
        <Flex h="100vh" alignItems="center" justifyContent="center" w="80%">
          <Box mb={50} mt={-100}>
            <Flex ml={33}>
              <Box borderWidth="1px" p="4" borderRadius="md" bg={"lightgreen"} m={10}>
                <Checkbox
                  size="lg"
                  isChecked={isItemSelected("Paper")}
                  onChange={() => handleItemClick("Paper")}
                  mr="4"
                  bg="lightgreen"
                  _checked={{ bg: "lightgreen" }}
                >
                  Paper
                </Checkbox>
                <Text fontSize="15" fontStyle="italic">Newspaper, cartons, books</Text>
              </Box>

              <Box borderWidth="1px" p="4" borderRadius="md" bg={"lightgreen"} m={10}>
                <Checkbox
                  size="lg"
                  isChecked={isItemSelected("Plastic")}
                  onChange={() => handleItemClick("Plastic")}
                  mr="4"
                  bg="lightgreen"
                  _checked={{ bg: "lightgreen" }}
                >
                  Plastic
                </Checkbox>
                <Text fontSize="15" fontStyle="italic">Oil container, Hard/Soft Plastics</Text>
              </Box>

              <Box borderWidth="1px" p="4" borderRadius="md" bg={"lightgreen"} m={10} >
                <Checkbox
                  size="lg"
                  isChecked={isItemSelected("Metal")}
                  onChange={() => handleItemClick("Metal")}
                  bg="lightgreen"
                  _checked={{ bg: "lightgreen" }}
                >
                  Metal
                </Checkbox>
                <Text fontSize="15" fontStyle="italic">Utensils, coolers, bed frames</Text>
              </Box>
            </Flex>

            <Flex mt="0" ml={40}  >
              <Box borderWidth="1px" p="4" borderRadius="md" bg={"lightgreen"} m={10}>
                <Checkbox
                  size="lg"
                  isChecked={isItemSelected("E-waste")}
                  onChange={() => handleItemClick("E-waste")}
                  mr="4"
                  bg="lightgreen"
                  _checked={{ bg: "lightgreen" }}
                >
                  E-waste
                </Checkbox>
                <Text fontSize="15" fontStyle="italic">Computer, Keyboards, machines</Text>
              </Box>

              <Box borderWidth="1px" p="4" borderRadius="md" bg={"lightgreen"} m={10}>
                <Checkbox
                  size="lg"
                  isChecked={isItemSelected("Other")}
                  onChange={() => handleItemClick("Other")}
                  bg="lightgreen"
                  _checked={{ bg: "lightgreen" }}
                >
                  Other
                </Checkbox>
                <Text fontSize="15" fontStyle="italic">Beer bottles, machines etc</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Box mt={-200}>
  {/* <ul >
    {selectedItems.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul> */}
<Button onClick={handleContinue}  bg={"lightgreen"} p={7} fontSize={30} ml={50} mr={-60}>Raise PickUp Request</Button>
</Box>
      <Footer />
    </>
  );
}

export default SellScrapPage1;   