import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/download.png";

const NavBar = () => {
  return (
    <HStack justify="space-between">
      <HStack>
        <Image boxSize={6} borderRadius={12} src={logo} />
        <Heading fontSize="lg">Battashi.Dev</Heading>
      </HStack>
      <HStack>
        <Heading fontSize="sm">Home</Heading>
      </HStack>
    </HStack>
  );
};

export default NavBar;
