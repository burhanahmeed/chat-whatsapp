import React, { useState }  from 'react';
import { 
  Box,
  Text,
  Button,
  useDisclosure
 } from "@chakra-ui/core";

import CreateModal from "../components/Phonebook/Modal.jsx";
import { BsPencil } from "react-icons/bs"
import { BiTrashAlt } from "react-icons/bi"

const BookItem = () => {
  const [iconShowed, setIconShowed] = useState(false)
  const handleMouseEnter = () => setIconShowed(true)
  const handleMouseLeave = () => setIconShowed(false)
  return (
    <Box 
      d="flex"
      justifyContent="space-between"
      borderBottomColor="gray.200" 
      borderBottom="1px" 
      p="3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
      <Box p="3" d="flex">
        {
          !iconShowed || 
          (
            <Box d="flex" m="1" mx="3" justifyContent="right" cursor="pointer">
              <Box mr="4" as={BsPencil} size="16px" color="green.400" />
              <Box as={BiTrashAlt} size="16px" color="green.400" />
            </Box>
          )
        }
        <Button variantColor="teal" size="xs">
          💬 Send Whatsapp
        </Button>
      </Box>
    </Box>
  );
}

const Phonebook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box color="white" w="100%">
      <Box d="flex" justifyContent="space-between">
        <Text 
          py="5"
          fontWeight="bold" 
          fontSize="xl"
        >📱 My Phonebook</Text>
        <Box p="4">
          <Button size="xs" onClick={onOpen}>
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
      <CreateModal 
        isOpen={isOpen} 
        onClose={onClose}
      />
    </Box>
  );
}

export default Phonebook;