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
  Text
} from "@chakra-ui/core";
import CustomAlert from "../CustomAlert";

const Create = ({ isOpen, onClose, onOpen, handleInit, data }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [phoneValidation, setPhoneValidation] = useState({
    isValid: true,
    text: ''
  })
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setName(data.name)
      setNumber(data.number) 
    }
  }, [])
  const handleClose = () => {
    onClose()
    setName('')
    setNumber('')
  }
  const handleNumberChange = (e) => {
    let value = e.target.value;
    setPhoneValidation({ isValid: true, text: '' });
    setNumber(value);
    if (isNaN(Number(value))) {
      setPhoneValidation({ isValid: false, text: 'Phone number is invalid' });
    }
  }
  const handleNameChange = e => {
    let value = e.target.value;
    setName(value)
  }

  const save = () => {
    setPhoneValidation({ isValid: true, text: '' });
    let initial = []
    let result = localStorage.getItem('phonebook')
    if (Object.keys(data).length > 0) {
      if (result) {
        let idx = JSON.parse(result).findIndex(el => el.number == Number(number))
        if (idx != -1) {
          initial = JSON.parse(result)
          initial[idx].name = name
          initial[idx].number = number
        }
      }
    } else {
      if (result) {
        let checkNumber = JSON.parse(result).find(el => el.number == Number(number))
        if (checkNumber) {
          setPhoneValidation({ isValid: false, text: 'Phone number already exists' })
          return false
        }
        initial = JSON.parse(result)
      }
      let params = {
        name,
        number
      }
      initial.push(params)
    }
    localStorage.setItem('phonebook', JSON.stringify(initial))
    handleInit()
    handleClose()
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
              <Input placeholder="Name" value={name} onChange={handleNameChange} />
            </Box>
            <Box p="2">
              <Input placeholder="Phone number" value={number} onChange={handleNumberChange} />
              <Text fontSize="sm" color="gray.500">example: 621239131xxx</Text>
              {
                phoneValidation.isValid ? '' : (<CustomAlert text={phoneValidation.text}></CustomAlert>)
              }
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button variantColor="green" onClick={save}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Create;