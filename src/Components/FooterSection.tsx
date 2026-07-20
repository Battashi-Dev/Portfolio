import {
  Box,
  Heading,
  HStack,
  Icon,
  Text,
  Link,
  VStack,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPaperPlane, FaRegCopyright } from "react-icons/fa";
import { SOCIAL_ICONS } from "./Constant";

const FooterSection = () => {
  const footerBg = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
  return (
    <Box as="footer" bg={footerBg} py={4} px={7} borderRadius={10} mt={5}>
      <VStack spacing={3}>
        <HStack justify="center" flexWrap="wrap" align="center">
          <Wrap>
            <Icon color="brand.accent" as={FaPaperPlane} boxSize={5} />
            <Heading fontSize="md">Contact Me </Heading>
            <Text fontSize="sm">
              I'm open to freelance work and opportunities. Let's build
              something amazing together
            </Text>
          </Wrap>
        </HStack>
        <Wrap spacing={6} justify="center" px="5" mt={1} w="full">
          {SOCIAL_ICONS.map(({ icon: IconCmp, label, iconColor, href }) => (
            <Link key={label} href={href} isExternal={label !== "email"}>
              <HStack spacing={2}>
                <Icon color={iconColor} as={IconCmp} />
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  _hover={{ color: "brand.accent" }}
                >
                  {label}
                </Text>
              </HStack>
            </Link>
          ))}
        </Wrap>

        <HStack justifyContent="center" flexWrap="wrap" mt={3}>
          <Icon as={FaRegCopyright} />
          <Text>2026</Text>
          <Text color="brand.accent">Battashi.dev -</Text>
          <Text>Built with React, TypeScript & Chakra UI </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default FooterSection;
