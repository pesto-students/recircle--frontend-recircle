import { Box, Flex, Text, Heading, Button, VStack, Divider, Wrap, WrapItem, Center, Grid } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";

const BuyerProfile = () => {
  const [acceptedSellers, setAcceptedSellers] = useState([]);
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

  const AcceptedOrders = ({ orders }) => {
    const [completedOrders, setCompletedOrders] = useState([]);
    
    const handleCompleted = (order) => {
      setCompletedOrders([...completedOrders, order]);
    };
  
    const handleDelete = (order) => {
      setAcceptedSellers(acceptedSellers.filter((id) => id !== order.id));
    };
  
    return (
      <Box p={4} borderWidth="1px" borderRadius="md" flexShrink={0} width={{ base: "full", md: "300px" }}>
        <Heading size="md">Accepted Orders</Heading>
        <Divider my={2} />
        {orders.length === 0 ? (
          <Text>No orders accepted yet</Text>
        ) : (
          <VStack align="start" spacing={2}>
            {orders.map((order, index) => (
              <Box key={index} p={2} borderWidth="1px" borderRadius="md">
                <Text>{order.name}</Text>
                <Text fontSize="sm">{order.mobile}</Text>
                <Text fontSize="sm">{order.address}</Text>
                <Divider my={2} />
                <Wrap>
                  {order.items.map((item) => (
                    <WrapItem key={item}>
                      <Text>{item}</Text>
                    </WrapItem>
                  ))}
                </Wrap>
                <Divider my={2} />
                <Flex>
                  <Button colorScheme="green" mr={2} onClick={() => handleCompleted(order)}>
                    Completed
                  </Button>
                  <Button colorScheme="red" onClick={() => handleDelete(order)}>
                    Delete
                  </Button>
                </Flex>
                {/* <CompletedOrders orders={CompletedOrders} /> */}
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    );
  };

  const SellerInfo = ({ seller, onAccept }) => {
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
          <Button colorScheme="green" mr={2} onClick={onAccept}>
            Accept
          </Button>
          <Button colorScheme="red">Decline</Button>
        </Flex>
      </Box>
    );
  };

  const handleAccept = (id) => {
    setAcceptedSellers([...acceptedSellers, id]);
    alert("Order accepted!");
  };

  const CompletedOrders = ({ orders }) => {
    return (
      <Box p={4} borderWidth="1px" borderRadius="md" flexShrink={0} width={{ base: "full", md: "300px" }}>
        <Heading size="md">Completed Orders</Heading>
        <Divider my={2} />
        {Array.isArray(orders) && orders.length === 0 ? (
          <Text>No completed orders yet</Text>
        ) : (
          <VStack align="start" spacing={2}>
            {Array.isArray(orders) && orders.map((order, index) => (
              <Box key={index} p={2} borderWidth="1px" borderRadius="md">
                <Text>{order.name}</Text>
                <Text fontSize="sm">{order.mobile}</Text>
                <Text fontSize="sm">{order.address}</Text>
                <Divider my={2} />
                <Wrap>
                  {order.items.map((item) => (
                    <WrapItem key={item}>
                      <Text>{item}</Text>
                    </WrapItem>
                  ))}
                </Wrap>
                <Divider my={2} />
                <Flex>
                  <Button colorScheme="green" mr={2}>
                    Completed
                  </Button>
                  <Button colorScheme="red">Delete</Button>
                </Flex>
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    );
  };
  return (
    <>
      <Navbar />
      <Flex>
        <AcceptedOrders orders={sellers.filter((seller) => acceptedSellers.includes(seller.id))} />
        <Box flexGrow={1}>
          <Heading size="lg">Listed Items</Heading>
          <div>
            <Center>
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                  xl: "repeat(3, 1fr)",
                }}
                gap={6}
                marginX={{ base: 2, md: 8, xl: 24 }}
                marginTop={6}
              >
                {sellers
                  .filter((seller) => !acceptedSellers.includes(seller.id))
                  .map((seller) => (
                    <SellerInfo
                      key={seller.id}
                      seller={seller}
                      bg={"lightgrey"}
                      onAccept={() => handleAccept(seller.id)}
                    />
                  ))}
              </Grid>
            </Center>
          </div>
          <CompletedOrders orders={CompletedOrders} />
        </Box>
      </Flex>
      <Footer />
    </>
  );}
 
export default BuyerProfile;