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
                    mt={-4}
                    maxWidth="100%"
                />
                <Box
                    position="absolute"
                    top="80%"
                    left="30%"
                    transform="translate(-50%, -50%)"
                    bg="#9ECCA3"
                    color="green"
                    p={4}
                    w={{ base: "270px", sm: "300px", md: "380px", lg: "450px" }}
                    h={{ base: "170px", sm: "auto", md: "auto", lg: "170px" }}
                    borderRadius="lg"
                >
                    <Flex direction="column" align="center" justify="center">
                        <Heading size="lg" mb={6} >Better Recycling</Heading>
                        <Text mb={4} textAlign={"left"} color="black">Sell scrap within minutes from your doorstep, and be a part of better recycling practices</Text>
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
                <Accordion allowMultiple>
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
                        Do's: 
		Do your best to prevent glass from breaking. Not only is broken glass dangerous for you, but it has little recycling value. If glass breaks, wrap it in a plastic bag before throwing away so sanitation workers won’t get injured handling it.
		One way to reuse glass bottles is to turn them into planters that water themselves. <br/>
Dont's:
       If you recycle a broken bottle, the resulting glass will likely not be made into a new glass bottle.
	   Many recyclers ask that you clean your glass before recycling it. If the glass has residue–such as sugar, for example–it becomes sticky and can attract bugs.
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
                        Do's:
		Make a Plastic Bottle Planter,
		Start a Herb Garden With Empty 2-Liter Bottles,
		Make a Beach Bucket From Laundry Detergent Containers,
		Reuse Soda Bottles by Creating a Vertical Garden.<br/>
Dont's:
        Plastic that isn't recycled is either put in landfills, incinerated or finds its way into the oceans.
		The average time it takes a plastic bottle to decompose is 450 years.
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
                        Do's:
		If you bring a mixed load to a scrap metal buyer you may be paid for the value of the least valuable metal in the load or you may be asked to separate the metals first.
		When collect scrap metal or cleaning it make sure you wear appropriate protection such as gloves, boots and protective glasses, especially if you are using tools. <br/>
Dont's:
        Make sure you make yourself aware of the relevant state and local council laws and regulations. You might see some form of hard rubbish someone has thrown out or left on their nature strip for collection and think you could sell the metal parts. 
        However, if taking items that are left out for hard rubbish collection is prohibited in your area you could end up facing a hefty fine.
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
                        Do's:  
      Not every component of an electronic needs to be recycled. A large number of substances commonly found in electronic devices are completely harmless. <br/>
 Dont's:
       Do not dismantle your electronic Products on your own
	   Do not throw electronics in bins having "Do not Dispose" sign.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                {/* <Heading>Our Services</Heading> */}
            </Flex>
            <Footer position="auto" bottom="-10" left="0" right="0" />
        </>
    );
}

export default Home;