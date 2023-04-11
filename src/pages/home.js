import { Image, Box, Flex, Text, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import myImage from "../assets/scrap1.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
    return (
        <>
            <Navbar />
            <Box position="relative" h={450}>
                <Image
                    src={myImage}
                    alt="My Image"
                    h={450}
                    mt={-8}
                    maxWidth="100%"
                />
                <Box
                    position="absolute"
                    top="75%"
                    left="30%"
                    transform="translate(-50%, -50%)"
                    bg="whatsapp.300"
                    color="green"
                    p={6}
                    w={{ base: "270px", sm: "300px", md: "380px", lg: "450px" }}
                    h={{ base: "170px", sm: "auto", md: "auto", lg: "170px" }}
                    borderRadius="lg"
                >
                    <Flex direction="column" align="center" justify="center">
                        <Heading size="lg" mb={6} >Better Recycling</Heading>
                        <Text mb={4} textAlign={"left"} color="black">Sell scrap within miutes from your doorstep, and be a part of better recycling pracices</Text>
                    </Flex>
                </Box>
            </Box>
            <Flex
                direction="column"
                align="center"
                justify="center"
                w="100%"
                mb={20}
                p={8}
            >
                <Heading size="lg" mb={12} mt={4} color={'green'}>Recycling Basics</Heading>
                <Accordion allowToggle bg={"faintgrey"}>
                    <AccordionItem w={{ base: "300px", sm: "350px", md: "500px", lg: "900px" }} mb={5}>
                        <h2>
                            <AccordionButton _hover={{ backgroundColor: "none" }}>
                                <Box as="span" flex='1' textAlign='left' color="green">
                                    Glass
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign={'left'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem w={{ base: "300px", sm: "300px", md: "300px", lg: "900px" }} mb={5}>
                        <h2>
                            <AccordionButton _hover={{ backgroundColor: "none" }}>
                                <Box as="span" flex='1' textAlign='left' color="green">
                                    Plastic
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign={'left'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem w={{ base: "300px", sm: "300px", md: "300px", lg: "900px" }} mb={5}>
                        <h2>
                            <AccordionButton _hover={{ backgroundColor: "none" }}>
                                <Box as="span" flex='1' textAlign='left' color="green">
                                    Metal
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign={'left'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem w={{ base: "300px", sm: "300px", md: "300px", lg: "900px" }} mb={5}>
                        <h2>
                            <AccordionButton _hover={{ backgroundColor: "none" }}>
                                <Box as="span" flex='1' textAlign='left' color="green">
                                    E-Waste
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign={'left'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Heading>Our Services</Heading>
            </Flex>
            <Footer position="auto" bottom="-10" left="0" right="0" />
        </>
    );
}

export default Home;