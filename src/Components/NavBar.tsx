import { Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/battashi-logo.svg";
import { useNavigate } from "react-router-dom";
import { NAV_LINKS } from "./Constant";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <HStack justify="space-between" w="full">
      <HStack>
        <Image boxSize={6} borderRadius={12} src={logo} />
        <Heading fontSize="lg">
          Battashi
          <Text as="span" color="brand.accent">
            .Dev
          </Text>
        </Heading>
      </HStack>
      <HStack gap={2}>
        {NAV_LINKS.map(({ label, path }) => (
          <Button
            size="sm"
            borderRadius={18}
            variant="ghost"
            onClick={() => navigate(path)}
          >
            {label}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};

export default NavBar;
