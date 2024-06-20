import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const JobApplication = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { job } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = { name, email, resume, coverLetter, jobTitle: job.title, jobCompany: job.company };
    const jobApplications = JSON.parse(localStorage.getItem("jobApplications")) || [];
    jobApplications.push(newApplication);
    localStorage.setItem("jobApplications", JSON.stringify(jobApplications));
    navigate("/");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Apply for {job.title} at {job.company}</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="resume" isRequired>
              <FormLabel>Resume</FormLabel>
              <Textarea value={resume} onChange={(e) => setResume(e.target.value)} />
            </FormControl>
            <FormControl id="coverLetter" isRequired>
              <FormLabel>Cover Letter</FormLabel>
              <Textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">Submit Application</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default JobApplication;