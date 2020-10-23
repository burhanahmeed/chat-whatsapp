import React, { useState} from 'react'
import HomeNav from '../components/HomeNavigation';
import {
  Box, 
  Flex,
  Textarea,
  Button,
  Stack
} from '@chakra-ui/core'

const Broadcast = () => {
  const [messages, setMessages] = useState('')
  
  const handleChangeMessage = e => setMessages(e.target.value);

  const handleSend = () => {
    let msg = messages.split('\n').join('%0a');
    window.open(`https://api.whatsapp.com/send?text=${msg}&source=&data=`, '_blank');
    setMessages('')
  }

  return (
    <Box w="100%">
      <HomeNav />
      <Flex align="center" d="block" p="4">
        <Stack spacing={4}>
          
          <Textarea 
            h="200px"
            bg="gray.100" 
            placeholder="Write the message you want to send..." 
            value={messages}
            onChange={handleChangeMessage}
          />
          <Button variantColor="green" onClick={handleSend}>Broadcast</Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Broadcast;