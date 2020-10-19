import React, { useState, useEffect }  from 'react';
import { 
  Box,
  Text,
  Button,
  useDisclosure,
  Link,
  Image
 } from "@chakra-ui/core";
import { Link as RLink } from 'react-router-dom';
import CreateModal from "../components/Phonebook/Modal.jsx";
import { BsPencil } from "react-icons/bs"
import { BiTrashAlt } from "react-icons/bi"

const BookItem = ({ data, handleRemove, handleInit, editModal }) => {
  const [iconShowed, setIconShowed] = useState(false)
  const [isTextShowed, setIsTextShowed] = useState(true)
  const handleMouseEnter = () => setIconShowed(true)
  const handleMouseLeave = () => setIconShowed(false)
  const remove = (id) => {
    handleRemove({number: id})
    handleInit()
  }
  useEffect(() => {
    let width = window.innerWidth
    if (width < 500) {
      setIsTextShowed(false)
    }
  }, [])

  return (
    <Box 
      d="flex"
      justifyContent="space-between"
      borderBottomColor="green.500" 
      p="3"
      bg="gray.100"
      mb="2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box>
        <Text 
          fontWeight="bold" 
          fontSize={[ 'xs', 'md' ]}
          color="green.700"
        >😊 { data.name }</Text>
        <Text 
          fontSize={[ 'xs', 'md' ]}
          color="green.700"
        >📲 { data.number }</Text>
      </Box>
      <Box p="3" d="flex">
        {
          (
            <Box d="flex" m="1" mx="4" justifyContent="right" cursor="pointer">
              <Box onClick={() => editModal({ number: data.number })} mr="4" as={BsPencil} size="16px" color="green.700" />
              <Box onClick={() => remove(data.number)} as={BiTrashAlt} size="16px" color="green.700" />
            </Box>
          )
        }
        <Link color="white" as={RLink} to={{ pathname: '/', state: data }}>
          <Button variantColor="green" size="xs">
            💬 
            {
              isTextShowed ? ' Send message' : ''
            }
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
    <Box w="100%">
      <Box d="flex" justifyContent="space-between">
        <Text 
          py="5"
          fontWeight="bold" 
          color="green.700" 
        >My Phonebook</Text>
        <Box p="4">
          <Button variantColor="green" size="xs" onClick={onOpen}>
            <Text 
            >Add contact</Text>
          </Button>
        </Box>
      </Box>
      <Box p={[ '0', '3' ]} w="100%" h="calc(100vh - 290px)" overflowX="auto">
        {
          phonebooks.length > 0 ?
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
          }) : (
            <Box mx="auto" d="block" textAlign="center" pt="70px">
              <Image m="auto" h="130px" src="/phonebook.svg" alt="Phonebook" />
              <Text color="gray.500" pt="4" fontSize="md">We will be storing your data to your browser localStorage.</Text>
            </Box>
          )
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