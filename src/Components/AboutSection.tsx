import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { IoPerson } from "react-icons/io5";
import { STATS } from "./Constant";

const AboutSection = () => {
  return (
    <Stack
      spacing={6}
      px={10}
      justify="space-between"
      direction={{ base: "column", md: "row" }}
    >
      <Box maxW="lg">
        <HStack>
          <Icon boxSize={5} as={IoPerson} color="brand.accent" />
          <Heading size="lg">About Me</Heading>
        </HStack>
        <Text maxW="md" fontSize="md">
          {" "}
          I'm a frontend Developer who loves turning ideas into real products. I
          enjoy writing clean code, learning new technology and building
          projects that real world problems
        </Text>
      </Box>
      <HStack spacing={8}>
        {STATS.map(({ icon: IconCmp, label, description }) => (
          <VStack key={description} minW="20">
            <Icon color="brand.accent" boxSize={5} as={IconCmp} />
            <Heading
              size="sm"
              fontStyle={isNaN(Number(label)) ? "italic" : "normal"}
            >
              {label}
            </Heading>
            <Text fontSize="xs" textAlign="center">
              {description}
            </Text>
          </VStack>
        ))}
      </HStack>
    </Stack>
  );
};

export default AboutSection;
