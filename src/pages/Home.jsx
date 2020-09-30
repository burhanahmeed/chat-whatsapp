import React, { useState } from 'react';
import { Flex, Box, Stack, InputLeftAddon, InputGroup, Input, Textarea, Button, ButtonGroup} from "@chakra-ui/core";

const SubmitButton = (props) => {
  if (props.isLoading) {
    return (
      <Button
        isLoading
        loadingText="Submitting"
        variantColor="teal"
        variant="outline"
      >
        Sending
      </Button>
    )
  }
  return (
    <Button onClick={props.handleClick} variantColor="green">SEND</Button>
  )
}

const Home = () => {
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitButton = e => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }

  return (
    <Box w="100%">
      <Flex align="center" d="block" p="4">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="+234" bg="#082618" border="green.700" color="white" />
            <Input type="tel" roundedLeft="0" placeholder="phone number" bg="green.800" border="green.700" color="white" />
          </InputGroup>
          <Textarea bg="green.800" border="green.700" color="white" placeholder="Write the message you want to send..." />
          <SubmitButton isLoading={isLoading} handleClick={submitButton} />
        </Stack>
      </Flex>
    </Box>
  );
}

export default Home;