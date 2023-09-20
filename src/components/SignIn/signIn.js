import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import {
  InputRightElement,
  FormErrorMessage,
  FormControl,
  InputGroup,
  FormLabel,
  Heading,
  Button,
  Stack,
  Input,
  Text,
  Box,
  Link,
  Modal,
  useToast,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react";

function SignInFn({ isOpen, onClose ,openSignUpModal}) {
  const { SignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const emailError=signInData.email==="";
  const passwordError=signInData.password==="";
  const handleSignIn = async () => {
    if (!signInData.email || !signInData.password) {
        toast({
            description: "*Please fill all the mandatory fields.",
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
      return;
    }
    try {
      const response = await fetch(
        "https://www.travelpalette.me/api/v1/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        onClose();
        localStorage.setItem("loginUser", JSON.stringify(data.data));
        SignIn();
        setTimeout(() => {
          navigate("/dashboard");
          toast({
            title:"Welcome to Palette",
            position: 'top-right',
            description: "Your are logged in Successfully.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
        }, 1000);
      } else {
        toast({
            description: "Please enter valid Credentials.",
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Box style={{ padding: "20px" }}>
            <Stack spacing={8}>
              <Heading style={{textAlign:'center'}}>Welcome Back!</Heading>
              <Text as='b'>Need an account ? 
              <Link style={{color:"blueviolet"}} onClick={openSignUpModal}> Sign Up</Link>
              </Text>
              <FormControl isInvalid={emailError}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={signInData.email}
                  onChange={(e) =>
                    setSignInData({ ...signInData, email: e.target.value })
                  }
                />
                {emailError ? (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>
              <FormControl isInvalid={passwordError}>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  value={signInData.password}
                  onChange={(e) =>
                    setSignInData({ ...signInData, password: e.target.value })
                  }
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
                {passwordError ? (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>
              <Box style={{display:"flex", alignItems:'center',justifyContent:'center'}}>
              <Button
                onClick={handleSignIn}
                style={{
                  background: "black",
                  color: "white",
                  borderRadius: "20px",
                  width: "50%",
                }}
              >
                SignIn
              </Button>
              </Box>
            </Stack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SignInFn;
