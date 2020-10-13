import React  from 'react';
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
  Text
} from "@chakra-ui/core";

const Create = ({ isOpen, onClose, onOpen }) => {
  const handleClose = () => {
    onClose()
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p="2">
              <Input placeholder="Name" />
            </Box>
            <Box p="2">
              <Input placeholder="Phone number" />
              <Text fontSize="sm" color="gray.500">example: 651239131xxx</Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="green" mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Create;