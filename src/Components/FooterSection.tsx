import { Box, Heading, HStack, Icon, Text, Link } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaRegCopyright,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useIcon } from "./Constant";

const FooterSection = () => {
  const { gitHub, linkedin, email } = useIcon();

  return (
    <Box as="footer" bg="gray.800" py={4} px={7} borderRadius={10}>
      <HStack justify="space-between">
        <Box>
          <HStack mb={4}>
            <Icon color="blue" as={FaPaperPlane} />
            <Heading fontSize="md">Contact Me</Heading>
          </HStack>
          <Text fontSize="sm">
            I'm open to freelance work and opportunities. <br /> Let's build
            something amazing together
          </Text>
        </Box>
        <Box>
          <HStack mb={1}>
            <Icon color="blue" as={IoMdMail} />
            <Heading fontSize="md">Email</Heading>
          </HStack>
          <Link href={email}>
            <Text fontSize="sm">battashi.dev@gmail.com</Text>
          </Link>
        </Box>
        <Box>
          <HStack mb={1}>
            <Icon color="blue" as={FaLinkedin} />
            <Heading fontSize="md">Linkedin</Heading>
          </HStack>
          <Link href={linkedin} isExternal>
            <Text fontSize="sm">linkedin.com/in/mohammed-al-battashi</Text>
          </Link>
        </Box>
        <Box>
          <HStack mb={1}>
            <Icon color="white" as={FaGithub} />
            <Heading fontSize="md">Contact Me</Heading>
          </HStack>
          <Link href={gitHub} isExternal>
            <Text fontSize="sm">github.com/Battashi-Dev</Text>
          </Link>
        </Box>
      </HStack>
      <HStack justifyContent="center" mt={3}>
        <Icon as={FaRegCopyright} />
        <Text>2026</Text>
        <Text color="blue">Battashi.dev -</Text>
        <Text>Built with React, TypeScript & Chakra UI </Text>
      </HStack>
    </Box>
  );
};

export default FooterSection;
