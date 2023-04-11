import { Box, Flex, Text, Heading, Button, VStack, Divider, Wrap, WrapItem, Center, Grid } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LeftNavbar from "../components/leftNavbar";

const SellerInfo = ({ seller }) => {
    return (
      <Box p={4} borderWidth="1px" borderRadius="md">
        <Heading size="md">{seller.name}</Heading>
        <Text fontSize="sm">{seller.mobile}</Text>
        <Divider my={2} />
        <Heading size="sm">Scrap Items</Heading>
        <VStack align="start">
          {seller.items.map((item) => (
            <Box key={item} p={2} borderWidth="1px" borderRadius="md">
              <Text>{item}</Text>
            </Box>
          ))}
        </VStack>
        <Divider my={2} />
        <Flex align="center">
          <FaMapMarkerAlt />
          <Text ml={2}>{seller.address}</Text>
        </Flex>
        <Flex mt={4}>
          <Button colorScheme="green" mr={2}>
            Accept
          </Button>
          <Button colorScheme="red">Decline</Button>
        </Flex>
      </Box>
    );
  };

const BuyerProfile = () => {
  const sellers = [
    {
      id: 1,
      name: "John Doe",
      mobile: "9876543210",
      items: ["Aluminum Cans", "Old newspapers", "Scrap metal"],
      address: "123 Kothrud, Pune",
    },
    {
      id: 2,
      name: "Jane Smith",
      mobile: "984545453",
      items: ["Cardboard boxes", "Plastic bottles"],
      address: "456 JM Road, Pune",
    },
    {
        id: 3,
        name: "Harshvardhan Deshmukh",
        mobile: "9876543333",
        items: ["Aluminum Cans", "Old newspapers", "Scrap metal"],
        address: "SB Road, Pune",
      },
      {
        id: 4,
        name: "Janvhi Kapoor",
        mobile: "9876543333",
        items: ["Cardboard boxes", "Plastic bottles"],
        address: "Koregaon Park, Pune",
      },
  ];

  return (
    <>
    <Navbar></Navbar>
    {/* <LeftNavbar></LeftNavbar> */}
    <Heading size="lg">Listed Items</Heading>
    <div>
  <Center>
    <Grid 
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
      gap={6}
      marginX={{ base: 2, md: 8, xl: 24 }}
      marginTop={6}
    >
      {sellers.map((seller) => (
        <SellerInfo key={seller.id} seller={seller} bg={"lightgrey"} />
      ))}
    </Grid>
  </Center>
</div>
      <Footer></Footer></>
  );
};

export default BuyerProfile;