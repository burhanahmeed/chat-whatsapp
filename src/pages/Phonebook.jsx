import React, { useState, useEffect }  from 'react';
import { 
  Box,
  Text,
  Button,
  useDisclosure,
  Link
 } from "@chakra-ui/core";
import { Link as RLink } from 'react-router-dom';
import CreateModal from "../components/Phonebook/Modal.jsx";
import { BsPencil } from "react-icons/bs"
import { BiTrashAlt } from "react-icons/bi"

const BookItem = ({ data, handleRemove, handleInit, editModal }) => {
  const [iconShowed, setIconShowed] = useState(false)
  const handleMouseEnter = () => setIconShowed(true)
  const handleMouseLeave = () => setIconShowed(false)
  const remove = (id) => {
    handleRemove({number: id})
    handleInit()
  }

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
        >😊 { data.name }</Text>
        <Text 
          fontSize="md"
        >📲 { data.number }</Text>
      </Box>
      <Box p="3" d="flex">
        {
          (
            <Box d="flex" m="1" mx="3" justifyContent="right" cursor="pointer">
              <Box onClick={() => editModal({ number: data.number })} mr="4" as={BsPencil} size="16px" color="green.400" />
              <Box onClick={() => remove(data.number)} as={BiTrashAlt} size="16px" color="green.400" />
            </Box>
          )
        }
        <Link color="white" as={RLink} to={{ pathname: '/', state: data }}>
          <Button variantColor="teal" size="xs">
            💬 Send Whatsapp
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

const Phonebook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phonebooks, setPhonebooks] = useState([])
  const [modalProps, setModalProps] = useState({})
  useEffect(() => {
    getInitialPhonebook()
  }, [])
  const getInitialPhonebook = () => {
    let initial = localStorage.getItem('phonebook')
    if (initial) {
      let arrays = JSON.parse(initial)
      setPhonebooks(arrays)
    }
  }
  const handleRemove = ({ number }) => {
    let initial = localStorage.getItem('phonebook')
    initial = JSON.parse(initial)
    let idx = initial.findIndex(el => el.number == number)
    if (idx != -1) {
      initial.splice(idx, 1)
      localStorage.setItem('phonebook', JSON.stringify(initial))
    }
  }
  const handleEditModal = ({ number }) => {
    let initial = localStorage.getItem('phonebook')
    initial = JSON.parse(initial)
    let idx = initial.findIndex(el => el.number == number)
    if (idx != -1) {
      setModalProps(initial[idx])
      onOpen()
    }
  }
  const handleModalClose = () => {
    setModalProps({})
    onClose()
  }

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
          phonebooks.map(el => {
            return (
            <BookItem 
              key={el.number} 
              data={el}
              handleRemove={handleRemove}
              handleInit={getInitialPhonebook}
              editModal={handleEditModal}
            />
            )
          })
        }
      </Box>
      {
        isOpen ? (
          <CreateModal 
            isOpen={isOpen} 
            onClose={handleModalClose}
            handleInit={getInitialPhonebook}
            data={modalProps}
          />
        ) : null
      }
    </Box>
  );
}

export default Phonebook;