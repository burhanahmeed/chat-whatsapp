import React, { useState, useEffect } from 'react';
import { Flex, Box, Stack, Textarea, Button } from "@chakra-ui/core";
import CustomAlert from "../components/CustomAlert.jsx";
import PhoneNumber from "../components/PhoneNumber.jsx";
import HomeNav from '../components/HomeNavigation';

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

const Home = (props) => {
  const [phone, setPhone] = useState('');
  const [messages, setMessages] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState({
    isValid: true,
    text: ''
  });
  const [isNewNumber, setIsNewNumber] = useState(true);
  const [contact, setContact] = useState({})

  useEffect(() => {
    if (props.location.state) {
      setIsNewNumber(false)
      setContact(props.location.state)
      setPhone(props.location.state.number)
    }
  }, [])

  const handleChangeMessage = e => setMessages(e.target.value);

  const sending = e => {
    if (!phoneValidation.isValid) {
      return false;
    }
    if (phone === '') {
      setPhoneValidation({ isValid: false, text: 'Phone number is invalid' });
      return false;
    }
    setIsLoading(true);
    let msg = messages.split('\n').join('%0a');
    let inserted = []
    inserted.push({ number: phone, text: msg, createdAt: new Date() })
    let history = localStorage.getItem('history')
    if (history) {
        inserted = [...JSON.parse(history)]
        inserted.splice(0, 0, { number: phone, text: msg, createdAt: new Date() })
    }
    localStorage.setItem('history', JSON.stringify(inserted))
    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msg}&source=&data=`, '_blank');
      setPhone('');
      setMessages('');
      setIsLoading(false);
    }, 2000);
    e.preventDefault();
  }

  const handleChangeNumberField = () => {
    setIsNewNumber(!isNewNumber)
  }

  const handleNumberChange = (value) => {
    setPhoneValidation({ isValid: true, text: '' });
    setPhone(value);
    if (isNaN(Number(value))) {
      setPhoneValidation({ isValid: false, text: 'Phone number is invalid' });
    }
  }
  
  return (
    <Box w="100%">
      <HomeNav />
      <Flex align="center" d="block" p="4">
        <Stack spacing={4}>
          <PhoneNumber 
            newNumber={isNewNumber} 
            changeNumberField={handleChangeNumberField}
            onNumberChange={handleNumberChange}
            contactData={contact}
          />
          <Box my="2">
            {
              phoneValidation.isValid ? '' : (<CustomAlert text={phoneValidation.text}></CustomAlert>)
            }
          </Box>
          <Textarea 
            h="200px"
            bg="gray.100" 
            placeholder="Write the message you want to send..." 
            value={messages}
            onChange={handleChangeMessage}
          />
          <SubmitButton isLoading={isLoading} handleClick={sending} />
        </Stack>
      </Flex>
    </Box>
  );
}

export default Home;