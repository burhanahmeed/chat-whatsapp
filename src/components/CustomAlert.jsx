import React  from 'react';
import {
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/core";

const CustomAlert = ({ text }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>{text}</AlertDescription>
    </Alert>
  )
}

export default CustomAlert;