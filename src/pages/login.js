import { Flex, Box, FormControl, FormLabel, Input, Button, Card, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { DOMAIN } from "../constants";

function LoginPage() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${DOMAIN}/user/login`, formData);
            console.log(response.data);
            setFormData({
                name: '',
                email: '',
                password: '',
            });
            setErrorMessage('');
        } catch (error) {
            console.error(error.response.data);
            setErrorMessage(error.response.data.message);
        }
    };
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
                        <form onSubmit={handleSubmit}>
                            <FormControl w='300px' borderColor="#38A327" focusBorderColor="#38A327">
                                <FormLabel>Username</FormLabel>
                                <Input type="text" placeholder="Enter your username" name="username" value={formData.username} onChange={handleChange} />
                            </FormControl>

                            <FormControl mt={6} w='300px' borderColor="#38A327" focusBorderColor="#38A327">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange} />
                            </FormControl>
                            {errorMessage && <div>{errorMessage}</div>}
                            <Button colorScheme="whatsapp" variant="outline" mt={8} w="150px" type="submit">
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
