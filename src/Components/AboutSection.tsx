import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaCode, FaRegCalendarAlt } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { IoPerson } from "react-icons/io5";

const AboutSection = () => {
  return (
    <HStack px={7} justify="space-between">
      <Box>
        <HStack>
          <Icon boxSize={5} as={IoPerson} color="blue" />
          <Heading size="lg">About Me</Heading>
        </HStack>
        <Text fontSize="md">
          {" "}
          I'm a frontend Developer who loves turning ideas into <br /> real
          products. I enjoy writing clean code, learning new <br /> technology
          and building projects that real world problems
        </Text>
      </Box>
      <HStack>
        <VStack boxSize={20}>
          <Icon color="blue" boxSize={5} as={FaRegCalendarAlt} />
          <Heading size="sm">1+</Heading>
          <Text fontSize="7px">Years Learning</Text>
        </VStack>
        <VStack boxSize={20}>
          <Icon color="blue" boxSize={5} as={FaCode} />
          <Heading size="sm">1+</Heading>
          <Text fontSize="7px">Projects</Text>
        </VStack>
        <VStack boxSize={20}>
          <Icon color="blue" boxSize={5} as={GoGoal} />
          <Heading size="sm">1+</Heading>
          <Text fontSize="7px">Full Stack Dev</Text>
        </VStack>
        <VStack boxSize={20}>
          <Icon color="blue" boxSize={5} as={GiElectric} />
          <Heading size="sm">1+</Heading>
          <Text fontSize="7px">Learner</Text>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default AboutSection;
