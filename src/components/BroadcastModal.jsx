import React, {useState, useEffect} from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Box,
  Textarea
} from "@chakra-ui/core";

const Create = ({ isOpen, onClose, onOpen, handleInit, data }) => {
  const [messages, setMessages] = useState('')
  
  const handleClose = () => {
    onClose()
  }
  const handleChangeMessage = e => setMessages(e.target.value);

  const handleSend = () => {
    let msg = messages.split('\n').join('%0a');
    window.open(`https://api.whatsapp.com/send?text=${msg}&source=&data=`, '_blank');
    onClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send broadcast</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p="2">
            <Textarea 
              h="200px"
              bg="gray.100" 
              placeholder="Write the message you want to send..." 
              value={messages}
              onChange={handleChangeMessage}
            />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button variantColor="green" onClick={handleSend}>Broadcast</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Create;