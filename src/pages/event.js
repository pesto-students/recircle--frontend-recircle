
import { useState } from "react";
import { Box, SimpleGrid, Heading, Image, Text, Link } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function EventPage() {
  const [eventId, setEventId] = useState(null);

  const events = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/350x200",
      title: "Tree plantation",
      description: "Tree plantation on the occassion of World Tree Plantation Day.",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/350x200",
      title: "Fort Cleaning",
      description: "Sinhagad Fort cleaning event on the occassion of Chhatrapati Shivaji Maharaj Jayanti",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/350x200",
      title: "River Cleaning",
      description: "River cleaning post Ganpati Chaturthi",
    },
  ];

  function handleRegisterClick(id) {
    setEventId(id);
  }

  return (
    <>
      <Navbar />
      <Heading color="darkgreen" pb="20px">
        Upcoming Events
      </Heading>
      <div>
        <Box py={5} px={[4, 8]}>
          <SimpleGrid columns={[1, 2, 3]} spacing="40px">
            {events.map((event) => (
              <Box key={event.id}>
                <Image src={event.imageUrl} alt={event.title} borderRadius="10px" marginLeft={4} />
                <Box p="6">
                <Heading as="h4" size="md" marginRight={10}>
                {event.title}
                </Heading>
                <Text mt="2" color="gray.500">
                {event.description}
                </Text>
                {eventId === 1 && event.id === 1 ? (
                <Link href={`/event${eventId}`} mt="2" color="blue.500">
                    Register
                </Link>
                    ) : eventId === 2 && event.id === 2 ? (
                <Link href={`/event${eventId}`} mt="2" color="blue.500">
                Register
                </Link>
                    ) : eventId === 3 && event.id === 3 ? (
                <Link href={`/event${eventId}`} mt="2" color="blue.500">
                    Register
                </Link>
                ) : (
                <Link
                    href={`/events/${event.id}`}
                    onClick={() => handleRegisterClick(event.id)}
                    mt="2"
                    color="blue.500">
                    Register
                </Link>)}
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </div>
      <Footer position="auto" bottom="-10" left="0" right="0" />
    </>
  );
}

export default EventPage;