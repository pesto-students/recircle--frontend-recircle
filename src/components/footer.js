
import { Flex, Icon, Heading,IconButton, Link, Stack, Divider,Text } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

// function Footer() {
//     return (
//       <Flex
//         as="footer"
//         justify="center"
//         align="center"
//         bg="lightgreen"
//         py="6"
//         // px="4"
//         marginTop={150}
//         mb={-10}
//       >
//         <Heading as="h2" size="lg" mr="4">
//           ReCircle
//         </Heading>
//         <Divider borderColor="black" orientation="vertical" mx="4" display="inline-block" />
//         <Stack direction="row" spacing="2">
//           <IconButton
//             as="a"
//             href="https://www.instagram.com"
//             target="_blank"
//             aria-label="Instagram"
//             icon={<FaInstagram />}
//             variant="ghost"
//           />
//           <IconButton
//             as="a"
//             href="https://www.facebook.com"
//             target="_blank"
//             aria-label="Facebook"
//             icon={<FaFacebook />}
//             variant="ghost"
//           />
//           <IconButton
//             as="a"
//             href="https://twitter.com"
//             target="_blank"
//             aria-label="Twitter"
//             icon={<FaTwitter />}
//             variant="ghost"
//           />
//         </Stack>
//         <Text>Recircle, Hinjewadi Phase-3, Pune</Text>
//       </Flex>
//     );
//   }

function Footer() {
    return (
      <Flex
        as="footer"
        justify="center"
        align="center"
        bg="lightgreen"
        py="6"
        marginTop={150}
        mb={-10}
        flexDirection="column"
      >
        <Flex align="center" mb={4}>
          <Heading as="h2" size="lg" mr="4">
            ReCircle
          </Heading>
          <Divider borderColor="black" orientation="vertical" mx="4" display="inline-block" />
          <Stack direction="row" spacing="2">
            <IconButton
              as="a"
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
            />
            <IconButton
              as="a"
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
            />
            <IconButton
              as="a"
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
            />
          </Stack>
        </Flex>
        <Flex align="center">
          <Text>Recircle, Hinjewadi Phase-3, Pune</Text>
        </Flex>
      </Flex>
    );
  }
export default Footer;