import {
  Box,
  Heading,
  HStack,
  Text,
  Image,
  Button,
  IconButton,
  Link,
} from "@chakra-ui/react";
import logo from "../assets/download.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useIcon } from "./Constant";

const HeroSection = () => {
  const { gitHub, linkedin, email } = useIcon();
  const navigate = useNavigate();

  return (
    <HStack justify="space-between" py={5} px={7}>
      <Box>
        <Heading size="xs">Hi.i'm</Heading>
        <Heading fontWeight="bold">
          Mohammed <Text color="blue">Al-Battashi</Text>
        </Heading>
        <Text fontSize="md">
          Frontend Developer building clean, responsive <br /> and user-friendly
          web experience
        </Text>
        <HStack>
          <Button onClick={() => navigate("/projects")}>
            View My Projects
          </Button>
          <Button>Contact Me</Button>
        </HStack>
        <HStack>
          <Link href={gitHub} isExternal>
            <IconButton aria-label="gitHub" icon={<FaGithub />} />
          </Link>
          <Link href={linkedin} isExternal>
            <IconButton aria-label="linkedin" icon={<FaLinkedinIn />} />
          </Link>

          <Link href={email}>
            <IconButton aria-label="email" icon={<IoMdMail />} />
          </Link>
        </HStack>
      </Box>
      <Box flexShrink={0}>
        <Image src={logo} boxSize="1xl" borderRadius="full" objectFit="cover" />
      </Box>
    </HStack>
  );
};

export default HeroSection;
