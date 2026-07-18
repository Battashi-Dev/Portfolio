import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";

const ProjectCards = () => {
  return (
    <>
      <Card borderRadius={30} mt={10}>
        <CardHeader>
          <Link
            href="https://github.com/Battashi-Dev/expensive-tracker"
            isExternal
          >
            <Heading size="lg">Expensive Tracker</Heading>
          </Link>
        </CardHeader>
        <CardBody>
          <Text>
            A React + TypeScript Expense Tracker with localStorage persistence,
            Zod validation, and React Hook Form. built with custom hooks for
            state management and Chakra UI for the interface
          </Text>
          <HStack spacing={2} mt={2} flexWrap="wrap">
            <Tag colorScheme="blue">React</Tag>
            <Tag colorScheme="blue">TypeScript</Tag>
            <Tag colorScheme="purple">Zod</Tag>
            <Tag colorScheme="">React Hook Form</Tag>
            <Tag colorScheme="gray">Chakra UI</Tag>
          </HStack>
        </CardBody>
        <CardFooter>
          <Link href="https://expensive-tracker-vert.vercel.app/" isExternal>
            <Button size="sm" colorScheme="blue">
              View Live Demo
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCards;
