import { Container, Box, VStack, HStack, Text, Heading, Image, IconButton, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container maxW="container.lg" p={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="lg">
          My Portfolio
        </Heading>
        <IconButton aria-label="Toggle Color Mode" icon={colorModeIcon} onClick={toggleColorMode} />
      </Box>

      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE3MTUwMzQxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Freelancer Portrait" mb={4} />
          <Heading as="h2" size="xl">
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Full Stack Developer
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">I am a passionate Full Stack Developer with over 5 years of experience in building web applications. I specialize in React, Node.js, and have a keen interest in UI/UX design.</Text>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Skills
          </Heading>
          <HStack spacing={4} wrap="wrap">
            <Box bg="gray.100" p={2} borderRadius="md">
              React
            </Box>
            <Box bg="gray.100" p={2} borderRadius="md">
              Node.js
            </Box>
            <Box bg="gray.100" p={2} borderRadius="md">
              JavaScript
            </Box>
            <Box bg="gray.100" p={2} borderRadius="md">
              HTML
            </Box>
            <Box bg="gray.100" p={2} borderRadius="md">
              CSS
            </Box>
            <Box bg="gray.100" p={2} borderRadius="md">
              UI/UX Design
            </Box>
          </HStack>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Projects
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h4" size="md">
                Project One
              </Heading>
              <Text fontSize="sm" color="gray.500">
                A brief description of the project.
              </Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h4" size="md">
                Project Two
              </Heading>
              <Text fontSize="sm" color="gray.500">
                A brief description of the project.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h3" size="lg" mb={4}>
            Contact
          </Heading>
          <HStack spacing={4} justify="center">
            <Link href="https://linkedin.com" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
            </Link>
            <Link href="https://github.com" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
