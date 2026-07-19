import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Tag,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import { PROJECTS } from "./Projects";
import logo from "../assets/battashi-logo.svg";

const ProjectCards = () => {
  return (
    <SimpleGrid>
      {PROJECTS.map(({ title, githubHref, demoHref, description, tags }) => (
        <Card
          key={title}
          borderRadius={20}
          bg="whiteAlpha.50"
          border="1px solid"
          borderColor="whiteAlpha.100"
          boxShadow="lg"
          _hover={{ transform: "translateY(-4px)", transition: "0.2s" }}
          direction={{base: "column", md: "row"}}
        >
          <Image
            src={logo}
            alt="title"
            objectFit="cover"
            w={{ base: "100%", md: "40%" }}
            aspectRatio={{ base: 16/9, md:4/3}}
            
          />
          <Box>
          <CardHeader>
            <Link href={githubHref} isExternal>
              <Heading size="lg">{title}</Heading>
            </Link>
          </CardHeader>
          <CardBody>
            <Text>{description}</Text>
            <HStack spacing={2} mt={2} flexWrap="wrap">
              {tags.map(({ label, colorScheme }) => (
                <Tag key={label} colorScheme={colorScheme}>
                  {label}
                </Tag>
              ))}
            </HStack>
          </CardBody>
          <CardFooter>
            <Link href={demoHref}>
              <Button
                fontWeight="bold"
                size="sm"
                color="white"
                bg="brand.accent"
                _hover={{ opacity: 0.85 }}
              >
                View Live Demo
              </Button>
            </Link>
          </CardFooter>
          </Box>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default ProjectCards;
