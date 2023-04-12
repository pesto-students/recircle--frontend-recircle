import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import L from "leaflet";

// Define the custom icon
const icon = L.icon({
    iconUrl: "path/to/custom/icon.png",
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

const DropOffPoints = () => {
  const dropOffPoints = [
    {
      name: "Recircle Warje",
      address: "RMD college, Warje",
      hours: "9am-5pm",
    },
    {
      name: "Recircle Karvenagar",
      address: "Near Dmart",
      hours: "10am-6pm",
    },
    {
      name: "Recircle Shivajinagar",
      address: "FC Road, besides Social",
      hours: "11am-7pm",
    },
  ];

const Map = () => {
    const [userLocation, setUserLocation] = useState(null);
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error(error);
        }
      );
    }, []);
  
    return (
      <Box style={{ height: "150%" , width:"120%"}}>
        <MapContainer center={[18.520430, 73.856743]} zoom={13} style={{ height: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[18.520430, 73.856743]} icon={icon}>
            <Popup>
              Drop of location
            </Popup>
          </Marker>
          <Marker position={[18.501831, 73.863594]} icon={icon}>
            <Popup>
              Drop of location
            </Popup>
          </Marker>
          {userLocation && (
            <Marker position={userLocation}>
              <Popup>
                Your location
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </Box>
    );
  };

  return (
    <>
      <Navbar />
      <Box mx={10} my={4}>
        <Heading color={"darkgreen"} >Drop Off Scrap</Heading>
        <Text my={3} color={"green"} fontWeight={"semi-bold"}>
  Our dense network of resource partners makes it highly convenient to drop-off any recyclables like paper, 
  plastic, metal and glass at multiple locations in and around your neighbourhood. 
  Find the nearest point using our digital platform and support a cause by disposing responsibly.
            </Text>
      <Heading mb={4} color="darkgreen">Drop-Off Points</Heading>
        <Flex alignItems="left">
          <Box borderWidth="1px" borderRadius="lg" p={4} marginLeft={0}>
            {dropOffPoints.map((point) => (
              <Box
              bg={"lightgreen"}
                key={point.name}
                borderWidth="1px"
                borderRadius="md"
                p={4}
                mb={4}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box p={5} bg={"lightgrey"} borderRadius={10}>
                  <Heading size="md" mb={2}>
                    {point.name}
                  </Heading>
                  <Text>{point.address}</Text>
                  <Text>{point.hours}</Text>
                </Box>
                <Text fontWeight="bold"></Text>
              </Box>
            ))}
          </Box>
          <Box
            borderWidth="1px"
            borderRadius="md"
            p={4}
            marginLeft={10}
            width="50%"
            height="400px"
          >
            <Map />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};




export default DropOffPoints;