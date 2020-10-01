import React, { useState } from 'react';
import { Flex, Box, Stack, InputLeftAddon, InputGroup, Input, Textarea, Button } from "@chakra-ui/core";
import CustomAlert from "../components/CustomAlert.jsx";

const SubmitButton = (props) => {
  if (props.isLoading) {
    return (
      <Button
        isLoading
        loadingText="Sending"
        variantColor="teal"
        variant="outline"
      >
      </Button>
    )
  }
  return (
    <Button onClick={props.handleClick} variantColor="green">Send</Button>
  )
}

const Home = () => {
  const [phone, setPhone] = useState('');
  const [messages, setMessages] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState({
    isValid: true,
    text: ''
  });

  const submitButton = e => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }

  const handleChangePhone = e => {
    let value = e.target.value;
    setPhoneValidation({ isValid: true, text: '' });
    setPhone(value);
    if (isNaN(Number(value))) {
      setPhoneValidation({ isValid: false, text: 'Phone number is invalid' });
    }
  }

  return (
    <Box w="100%">
      <Flex align="center" d="block" p="4">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="+234" bg="#082618" border="green.700" color="white" />
            <Input 
              type="tel" 
              roundedLeft="0" 
              placeholder="phone number" 
              bg="green.800" 
              border="green.700" 
              color="white" 
              value={phone}
              onChange={handleChangePhone}
            />
          </InputGroup>
          <Box my="2">
            <CustomAlert text={phoneValidation.text}></CustomAlert>
          </Box>
          <Textarea bg="green.800" border="green.700" color="white" placeholder="Write the message you want to send..." />
          <SubmitButton isLoading={isLoading} handleClick={submitButton} />
        </Stack>
      </Flex>
    </Box>
  );
}

export default Home;