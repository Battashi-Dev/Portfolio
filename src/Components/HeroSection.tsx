import {
  Box,
  Heading,
  HStack,
  Text,
  Image,
  Button,
  IconButton,
  Link,
  VStack,
  Stack,
} from "@chakra-ui/react";
import logo from "../assets/battashi.png";
import { useNavigate } from "react-router-dom";
import { SOCIAL_ICONS } from "./Constant";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align="center"
      spacing={10}
      justify="space-between"
      py={{ base: 8, md: 5 }}
      px={{ base: 6, md: 7 }}
    >
      <VStack align="start" spacing={4} maxW="lg">
        <Heading size="xs" color="brand.accent">
          Hi i'm
        </Heading>
        <Heading fontWeight="bold" lineHeight="1.1">
          Mohammed{" "}
          <Text as="span" color="brand.accent" display="block">
            Al-Battashi
          </Text>
        </Heading>
        <Text fontSize="md" maxW="md">
          Frontend Developer building clean, responsive and user-friendly
        </Text>
        <HStack spacing={4}>
          <Button
            bg="brand.accent"
            color="white"
            _hover={{ opacity: 0.85 }}
            onClick={() => navigate("projects")}
            fontWeight="bold"
          >
            View My Projects
          </Button>
          <Link
            href="/public/Al-Battashi CV .pdf"
            download="/public/Al-Battashi CV .pdf"
          >
            <Button variant="outline" borderColor="whiteAlpha.400">
              Download CV
            </Button>
          </Link>
        </HStack>
        <HStack spacing={3} pt={2}>
          {SOCIAL_ICONS.map(({ icon: IconCmp, href, label }) => (
            <Link key={label} href={href} isExternal={label !== "email"}>
              <IconButton
                variant="ghost"
                borderRadius="full"
                color="white"
                aria-label={label}
                icon={<IconCmp />}
              />
            </Link>
          ))}
        </HStack>
      </VStack>
      <Box flexShrink={0}>
        <Image
          src={logo}
          boxSize={{ base: "180px", md: "320px" }}
          border="2px"
          borderColor="brand.accent"
          borderRadius="full"
          objectFit="cover"
          objectPosition="top"
          bg="brand.accent"
        />
      </Box>
    </Stack>
  );
};

export default HeroSection;
