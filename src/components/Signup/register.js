import React, { useState } from "react";
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
  Spinner,
  useToast,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

function SignUp({ isOpen, onClose ,openSignInModal}) {
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const nameError=signUpData.name==="";
  const emailError=signUpData.email==="";
  const passwordError=signUpData.password==="";
  const handleSignUp = async () => {
    setLoading(true);
      if (!signUpData.name || !signUpData.email || !signUpData.password) {
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
            "https://www.travelpalette.me/api/v1/auth/signup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(signUpData),
            }
          );
      const data = await response.json();
      if (response.ok) {
        setLoading(false);
        localStorage.setItem("loginUser", JSON.stringify(data.data));
        setTimeout(() => {
          toast({
            title:"Your Account Created.",
            position: 'top-right',
            description: "Your are registered Successfully.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
        }, 1000);
        onClose();
      } else {
        setSignUpData({
          name: "",
          email: "",
          password: "",
        });
        setLoading(false);
        toast({
            description: "Please enter correct or in valid format.",
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
      }
    } catch (error) {
      setLoading(false);
        toast({
            description: "Something went wrong.Try Again.",
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
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
            <Stack spacing={6}>
              <Heading style={{textAlign:'center'}}>Create an Account</Heading>
              <Text as='b'> Already have an account? 
              <Link style={{color:"blueviolet"}} onClick={openSignInModal}> Sign In</Link>
              </Text>
              <FormControl isInvalid={nameError}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={signUpData.name}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, name: e.target.value })
                  }
                  disabled={loading}
                />
                {nameError ? (
                  <FormErrorMessage>Name is required.</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>
              <FormControl isInvalid={emailError}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={signUpData.email}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, email: e.target.value })
                  }
                  disabled={loading}
                />
                {emailError ? (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>
              <FormControl isInvalid={emailError}>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  value={signUpData.password}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, password: e.target.value })
                  }
                  disabled={loading}
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
              {!loading ? (
                   <Button
                   onClick={handleSignUp}
                   style={{
                     background: "black",
                     color: "white",
                     borderRadius: "20px",
                     width: "50%",
                   }}
                 >
                   SignUp
                 </Button>
                ) : (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="voilet.500"
                    size="xl"
                  />
                )}
              </Box>
            </Stack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SignUp;
