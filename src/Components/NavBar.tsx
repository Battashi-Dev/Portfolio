import { Button, Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/download.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  
  return (
    <HStack justify="space-between">
      <HStack>
        <Image boxSize={6} borderRadius={12} src={logo} />
        <Heading fontSize="lg">Battashi.Dev</Heading>
      </HStack>
      <HStack>
        <Button
          size="sm"
          borderRadius={18}
          variant="ghost"
          onClick={() => navigate("/")}
        >
          <Heading fontSize="sm">Home</Heading>
        </Button>
        <Button
          size="sm"
          borderRadius={18}
          variant="ghost"
          onClick={() => navigate("/projects")}
        >
          <Heading fontSize="sm">Projects</Heading>
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
