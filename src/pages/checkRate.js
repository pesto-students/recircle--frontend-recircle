import {
    Box,
    Heading,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react";

function CheckRatePage() {
    return (
        <Box
            bg="white"
            color="gray.800"
            px={{ base: 4, md: 8, lg: 16 }}
            py={{ base: 8, md: 16 }}
        >
            <Heading
                as="h1"
                textAlign="center"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                mb={{ base: 8, md: 12 }}
            >
                Check Rate List
            </Heading>

            <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                textAlign="center"
                mb={{ base: 8, md: 12 }}
            >
                Here are the latest rates for your scrap items
            </Text>

            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Item Name</Th>
                        <Th>Rate per Kg</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Aluminum</Td>
                        <Td>₹20.00</Td>
                    </Tr>
                    <Tr>
                        <Td>Copper</Td>
                        <Td>₹30.00</Td>
                    </Tr>
                    <Tr>
                        <Td>Iron</Td>
                        <Td>₹10.00</Td>
                    </Tr>
                    <Tr>
                        <Td>Plastic</Td>
                        <Td>₹5.00</Td>
                    </Tr>
                    <Tr>
                        <Td>Paper</Td>
                        <Td>₹3.00</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    );
}

export default CheckRatePage;
