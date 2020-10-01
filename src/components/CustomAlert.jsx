import React, { Component }  from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
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