import { Link as RouterLink } from 'react-router-dom'
import { Flex, IconButton, Button, Stack, Collapse, useColorModeValue, useDisclosure, Box, Text, Link, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../assets/recircle-logo-remove.png'

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            height={{ base: 'auto', sm: 'auto', md: '100px' }}
            bg={useColorModeValue('#38A327')}
            color={useColorModeValue('#38A327.800')}
        >
            <Flex align="center">
                <IconButton
                    variant="ghost"
                    aria-label="Toggle Navigation"
                    icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                    onClick={onToggle}
                    display={{ md: 'none' }}
                />
                <Logo />
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                alignItems="center"
                // width={{ md: 'full' }}
                justify={{ base: 'center', md: 'flex-end', xl: 'flex-end' }}
                flexGrow={1}
            >
                <NavLink href="#">Check Rate List</NavLink>
                <NavLink href="#">Events</NavLink>
                <Button colorScheme="teal" variant="solid" size="sm">
                    <RouterLink to="/login">Log In</RouterLink>
                </Button>
                <Button colorScheme="whatsapp" variant="solid" size="sm">
                    <RouterLink to="/signup">Sign Up</RouterLink>
                </Button>
            </Stack>
        </Flex>
    );
}

function Logo() {
    return (
        <Box>
            <Text fontSize="3xl" fontFamily="sans-serif" fontWeight="bold" color={'white'}>
                ReCircle
            </Text>
            {/* <Image src={logo} alt="My Logo" boxSize="50px" objectFit="contain" /> */}
        </Box>
    );
}

function NavLink({ children, href }) {
    return (
        <Link
            as="button"
            p={[1, 2]}
            href={href}
            borderRadius='10px'
            color={'white'}
            _hover={{
                textDecoration: 'none',
                borderRadius: '10px',
                bg: useColorModeValue('whatsapp.500', 'whatsapp.300'),
            }}
            _activeLink={{
                borderRadius: '10px',
                bg: useColorModeValue('whatsapp.300', 'whatsapp.300'),
            }}
        >
            {children}
        </Link>
    );
}

function MobileNav() {
    return (
        <Stack mt={4} spacing={4} align="center" justify="center">
            <NavLink href="#">Check Rate List</NavLink>
            <NavLink href="#">Events</NavLink>
            <Button colorScheme="teal" variant="solid" size="sm">
                <RouterLink to="/login">Log In</RouterLink>
            </Button>
            <Button colorScheme="whatsapp" variant="solid" size="sm">
                <RouterLink to="/signup">Sign Up</RouterLink>
            </Button>
        </Stack>
    );
}
