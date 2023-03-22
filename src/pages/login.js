import { Flex, Box, FormControl, FormLabel, Input, Button, Card, Text } from "@chakra-ui/react";

function LoginPage() {
    return (
        <Flex height="100vh">
            <Box
                w="50%"
                bg="white"
                display={{ base: "none", md: "block" }}
                my="150px"

            >
                <Text fontSize="5xl" fontFamily="sans-serif" fontWeight="extrabold" color={'green'}>
                    Welcome to,
                    <br></br>
                    ReCircle
                </Text>
                <Text fontSize="xl" fontFamily="sans-serif" fontStyle="italic" fontWeight="bold" color={'green'} mt="30px">
                    Sell your scrap in minutes.
                </Text>
            </Box>
            <Box
                w={{ base: "100%", md: "55%" }}
                bg="green.500"
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                px={{ base: 4, md: 12, lg: 24, xl: 48 }}
            >
                <Card maxW={{ base: "100%", sm: "80%", md: "100%" }} px={10} py={10} w="500px">
                    <Box textAlign={{ base: "center", md: "left" }} color="#38A327" fontSize="xl" fontFamily="sans-serif" fontWeight="bold">
                        <h1>Login</h1>
                    </Box>
                    <Box my={4} textAlign={{ base: "center", md: "left" }} color="#38A327">
                        <form>
                            <FormControl w='300px' borderColor="#38A327" focusBorderColor="#38A327">
                                <FormLabel>Username</FormLabel>
                                <Input type="text" placeholder="Enter your username" />
                            </FormControl>

                            <FormControl mt={6} w='300px' borderColor="#38A327" focusBorderColor="#38A327">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder="Enter your password" />
                            </FormControl>

                            <Button colorScheme="whatsapp" variant="outline" mt={8} w="150px">
                                Sign In
                            </Button>
                        </form>
                    </Box>
                </Card>
            </Box>
        </Flex>
    );
}

export default LoginPage;
