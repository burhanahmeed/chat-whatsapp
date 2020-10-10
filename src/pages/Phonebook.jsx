import React  from 'react';
import { 
  Box,
  Text,
  Button
 } from "@chakra-ui/core";

const BookItem = () => {
  return (
    <Box 
      d="flex"
      justifyContent="space-between"
      borderBottomColor="gray.200" 
      borderBottom="1px" 
      p="3"
    >
      <Box>
        <Text 
          fontWeight="bold" 
          fontSize="md"
        >😊 Aditiawarnam</Text>
        <Text 
          fontSize="md"
        >📲 65837199213</Text>
      </Box>
      <Box p="3">
        <Button variantColor="teal" size="xs">
          💬 Send Whatsapp
        </Button>
      </Box>
    </Box>
  );
}

const Phonebook = () => {
  return (
    <Box color="white" w="100%">
      <Box d="flex" justifyContent="space-between">
        <Text 
          py="5"
          fontWeight="bold" 
          fontSize="xl"
        >📱 My Phonebook</Text>
        <Box p="4">
          <Button size="xs">
            <Text 
              color="gray.700"
            >Add contact</Text>
          </Button>
        </Box>
      </Box>
      <Box p="3" w="100%" h="calc(100vh - 120px)" overflowX="auto">
        {
          [2, 3,4,5,6,7,8,9,1,2,3,4].map(el => {
            return <BookItem/>
          })
        }
      </Box>
    </Box>
  );
}

export default Phonebook;