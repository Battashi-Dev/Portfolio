import { Box, Heading, HStack, Icon, Text, VStack, Wrap } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { SKILLS } from "./Constant";
const SkillSection = () => {
  return (
    <Box px={7} mt={10}>
      <HStack>
        <Icon color="brand.accent" as={FaCode} />
        <Heading size="md">Skills</Heading>
      </HStack>
      <Wrap spacing={6} justify={{ base: "center", lg: "space-between"}} px={{base: 4, md:12}} mt={3} w="full" >
        {SKILLS.map(({ icon: IconCmp, label, color, boxSize }) => (
          <VStack key={label}>
            <Icon boxSize={boxSize} as={IconCmp} color={color} />
            <Text>{label}</Text>
          </VStack>
        ))}
      </Wrap  >
    </Box>
  );
};

export default SkillSection;
