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

const ProjectCards = () => {
  return (
    <SimpleGrid column={{ base: 1, xl: 2 }} spacing={6}>
      {PROJECTS.map(
        ({ title, githubHref, demoHref, description, tags, image }) => (
          <Card
            key={title}
            borderRadius={20}
            bg="whiteAlpha.50"
            border="1px solid"
            borderColor="whiteAlpha.100"
            boxShadow="lg"
            justify="space-between"
            overflow="hidden"
            _hover={{ transform: "translateY(-4px)", transition: "0.2s" }}
            direction={{ base: "column", md: "row" }}
          >
            <Image
              src={image}
              alt={title}
              objectFit="contain"
              w={{ base: "100%", md: "300%" }}
              aspectRatio={{ base: 16 / 9, md: 4 / 3 }}
            />

            <Box>
              <CardHeader>
                <Link href={githubHref} isExternal>
                  <Heading size="lg" mt={10}>
                    {title}
                  </Heading>
                </Link>
              </CardHeader>
              <CardBody>
                <Text>{description}</Text>
                <HStack spacing={6} mt={2} flexWrap="wrap">
                  {tags.map(({ label, colorScheme }) => (
                    <Tag key={label} colorScheme={colorScheme}>
                      {label}
                    </Tag>
                  ))}
                </HStack>
              </CardBody>
              <CardFooter>
                <Link href={demoHref} isExternal>
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
        ),
      )}
    </SimpleGrid>
  );
};

export default ProjectCards;
