import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Box p={6} textAlign="center" marginTop="10" marginBottom="5">
      <Heading as="h1" size="lg">
        Oops! Something went wrong.
      </Heading>
      <Text fontSize="md" color="gray.600" mt={4}>
        We're sorry, but an error occurred while trying to load this page.
        Please try again later.
      </Text>
    </Box>
  );
};

export default ErrorPage;
