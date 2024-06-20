import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useEffect, useState } from "react";

const Index = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const storedJobListings = JSON.parse(localStorage.getItem("jobListings")) || [];
    setJobListings(storedJobListings);
  }, []);

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Job Listings</Heading>
        <Button as={Link} to="/post-job" colorScheme="teal" size="lg">Post a Job</Button> {/* Add the Post a Job button */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {jobListings.map((job, index) => (
            <Card key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading size="md">{job.title}</Heading>
                <Text>{job.company}</Text>
                <Text>{job.location}</Text>
              </CardHeader>
              <CardBody>
                <Text>{job.description}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;