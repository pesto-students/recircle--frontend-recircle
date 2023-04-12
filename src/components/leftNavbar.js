import { Box, Flex, Image, Text, UnorderedList, ListItem } from "@chakra-ui/react";

function LeftNavbar() {
  return (
    <Box bg="gray.100" w="20%" h="100vh" position="fixed" left={0}>
      <Flex direction="column" align="center" justify="center" p={4}>
        <Image src="https://via.placeholder.com/150" borderRadius="full" boxSize="150px" mb={4} />
        <Text fontWeight="bold" fontSize="lg" mb={4}>
          John Doe
        </Text>
        <UnorderedList textAlign="left">
          <ListItem>Dashboard</ListItem>
          <ListItem>Orders</ListItem>
          <ListItem>Profile</ListItem>
          <ListItem>Settings</ListItem>
        </UnorderedList>
      </Flex>
    </Box>
  );
}

export default LeftNavbar;