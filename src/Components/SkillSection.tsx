import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaBootstrap, FaCode, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiGit, SiGithub, SiTypescript, SiVite, SiZod } from "react-icons/si";
const SkillSection = () => {
  return (
    <Box px={7} mt={10}>
      <HStack>
        <Icon color="blue" as={FaCode} />
        <Heading size="md">Skills</Heading>
      </HStack>
      <HStack px={12} mt={3} justify="space-between">
        <VStack>
          <Icon color="#e34f26" boxSize={10} as={FaHtml5} />
          <Text>HTML</Text>
        </VStack>

        <VStack>
          <Icon color="#1572b6" boxSize={10} as={IoLogoCss3} />
          <Text>CSS</Text>
        </VStack>
        <VStack>
          <Icon color="#f7df1e" boxSize={10} as={IoLogoJavascript} />
          <Text>JavaScript</Text>
        </VStack>
        <VStack>
          <Icon color="#3178c6" boxSize={10} as={SiTypescript} />
          <Text>TypeScript</Text>
        </VStack>
        <VStack>
          <Icon color="#7952b3" boxSize={10} as={FaBootstrap} />
          <Text>BootStrap</Text>
        </VStack>
        <VStack>
          <Icon color="#61dafb" boxSize={10} as={FaReact} />
          <Text>React</Text>
        </VStack>
        <VStack>
          <Icon color="#3e67b1" boxSize={10} as={SiZod} />
          <Text>Zod</Text>
        </VStack>
        <VStack>
          <Icon color="#f05032" boxSize={10} as={SiGit} />
          <Text>Git</Text>
        </VStack>
        <VStack>
          <Icon color="white" boxSize={10} as={SiGithub} />
          <Text>GitHub</Text>
        </VStack>
        <VStack>
          <Icon color="#646cff" boxSize={10} as={SiVite} />
          <Text>Vite</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default SkillSection;
