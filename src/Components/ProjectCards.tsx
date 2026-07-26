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
            h="100%"
            display="flex"
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
              objectFit="cover"
              borderRadius={20}
              w={{ base: "100%", md: "50%" }}
              h={{ base: " 200%", md: "auto" }}
            />

            <Box>
              <CardHeader>
                <Link href={githubHref} isExternal>
                  <Heading size="lg" mt={10} _hover={{ color: "brand.accent"}}>
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
