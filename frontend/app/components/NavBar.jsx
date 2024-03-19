// app/components/NavBar.jsx
import { Box, VStack, IconButton } from '@chakra-ui/react';
import { FaHome, FaGamepad, FaUsers, FaCog } from 'react-icons/fa';
import Link from 'next/link';

function NavBar() {
  return (
<Box pos="fixed" top={0} left={0} h="100vh" w="60px" bg="dark.200" display="flex" alignItems="center">
  <VStack spacing={4} align="stretch" m={4} height="100%" justifyContent="center">
    <Link href="/dashboard" passHref>
      <IconButton
        as="a"
        aria-label="Dashboard"
        icon={<FaHome />}
        _hover={{ bg: "black", color: "twitch.100" }}
        colorScheme="purple"
      />
    </Link>
    <Link href="/game" passHref>
      <IconButton
        as="a"
        aria-label="Game"
        icon={<FaGamepad />}
        _hover={{ bg: "black", color: "twitch.100" }}
        colorScheme="purple"
      />
    </Link>
    <Link href="/DaoPage" passHref>
      <IconButton
        as="a"
        aria-label="DAO"
        icon={<FaUsers />}
        _hover={{ bg: "black", color: "twitch.100" }}
        colorScheme="purple"
      />
    </Link>
    <Link href="/settings" passHref>
      <IconButton
        as="a"
        aria-label="Settings"
        icon={<FaCog />}
        _hover={{ bg: "black", color: "twitch.100" }}
        colorScheme="purple"
      />
    </Link>
  </VStack>
</Box>

  );
}

export default NavBar;
