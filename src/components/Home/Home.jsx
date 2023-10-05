import React, { useState } from "react";
import travelPaletteLogo from "../Images/paletteLogo.svg";
import smileLogo from "../Images/smileLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUp from "../Signup/register";
import SignIn from "../SignIn/signIn";
import {
  InputLeftElement,
  InputGroup,
  GridItem,
  TagLabel,
  Heading,
  HStack,
  Button,
  Image,
  Input,
  Grid,
  Box,
  Tag,
} from "@chakra-ui/react";
import data from "./data";
import InpirationCard from "../Dashboard/InspirationCard";

function Home() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpInOpen] = useState(false);
  const openSignInModal = () => {
    setSignInOpen(true);
    setSignUpInOpen(false);
  };

  const openSignUpModal = () => {
    setSignInOpen(false);
    setSignUpInOpen(true);
  };
  const inspirationData = data;
  return (
    <Box>
      <Grid templateColumns="22% 78%" gap={2}>
        <GridItem
          w="100%"
          h="auto"
          bg=""
          style={{ borderRight: "1px solid grey" }}
        >
          <HStack
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              marginLeft: "2px",
            }}
          >
            <Image src={travelPaletteLogo} alt="Travel Palette" />
            <Heading as="h3" size="lg">
              TravelPalette.me
            </Heading>
          </HStack>
          <Grid templateColumns="repeat(1, 1fr)" gap={6}>
            <GridItem w="100%" h="550" bg="" style={{ marginLeft: "15px" }}>
              <Grid templateColumns="repeat(1, 1fr)" gap={2}>
                <GridItem w="100%" h="10" bg="" style={{ display: "flex" }}>
                  <Button size="md">
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                    &nbsp; Home
                  </Button>
                </GridItem>
                <GridItem w="100%" h="10" bg="" style={{ display: "flex" }}>
                  <Button size="md" onClick={openSignInModal}>
                    <FontAwesomeIcon icon="fa-solid fa-user-group" />
                    &nbsp; My Inspirations
                  </Button>
                </GridItem>
                <GridItem w="100%" h="10" bg="" style={{ display: "flex" }}>
                  <Button size="md">
                    <FontAwesomeIcon icon="fa-solid fa-keyboard" />
                    &nbsp; How it works
                  </Button>
                </GridItem>
                <GridItem w="100%" h="10" bg="" style={{ marginTop: "25px" }}>
                  <Button
                    onClick={openSignInModal}
                    size="md"
                    style={{
                      background: "black",
                      color: "white",
                      borderRadius: "20px",
                      width: "90%",
                      margin: "auto",
                    }}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                    &nbsp;&nbsp;Add Inspiration
                  </Button>
                </GridItem>
                <GridItem w="100%" h="10" bg="">
                  <Heading as="h3" size="md">
                    Trips
                  </Heading>
                </GridItem>
                <GridItem w="100%" h="10" bg="">
                  <Button
                    onClick={openSignInModal}
                    style={{
                      background: "black",
                      color: "white",
                      borderRadius: "30px",
                      width: "90%",
                      margin: "auto",
                    }}
                    size="md"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                    &nbsp;&nbsp;Create New Trip
                  </Button>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem w="100%" h="auto" bg="">
          <Grid templateColumns="repeat(1, 1fr)" gap={6}>
            <GridItem w="100%" h="16" bg="">
              <Grid templateColumns="65% 15% 15% 5%" gap={0} mt={2} ml={2}>
                <GridItem w="100%" h="16" bg="">
                  <Heading as="h3" size="lg">
                    Home
                  </Heading>
                </GridItem>
                <GridItem w="100%" h="16" bg="">
                  <Button
                    onClick={openSignUpModal}
                    style={{
                      background: "black",
                      color: "white",
                      borderRadius: "30px",
                      width: "90%",
                      margin: "auto",
                    }}
                    size="md"
                  >
                    Sign Up
                  </Button>
                </GridItem>
                <GridItem w="100%" h="16" bg="">
                  <Button
                    onClick={openSignInModal}
                    style={{
                      background: "black",
                      color: "white",
                      borderRadius: "30px",
                      width: "90%",
                      margin: "auto",
                    }}
                    size="md"
                  >
                    Sign In
                  </Button>
                </GridItem>
                <GridItem w="100%" h="16" bg="">
                  <Box>
                    <Image src={smileLogo} alt="Profile" />
                  </Box>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem w="100%" h="14" bg="">
              <Grid templateColumns="25% 22% 20% 10% 10% 10%" gap={2}>
                <GridItem w="100%" h="10" bg="">
                  <InputGroup>
                    <Input placeholder="Search by Inspiration" size="md" />
                    <InputLeftElement pointerEvents="none">
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </InputLeftElement>
                  </InputGroup>
                </GridItem>
                <GridItem w="100%" h="10" bg="">
                  <InputGroup>
                    <Input placeholder="Filter by Tags" size="md" />
                    <InputLeftElement pointerEvents="none">
                      <FontAwesomeIcon icon="fa-solid fa-tags" />
                    </InputLeftElement>
                  </InputGroup>
                </GridItem>
                <GridItem w="100%" h="10" bg="">
                  <Heading as="h3" size="md" style={{ marginTop: "10px" }}>
                    Popular Searches
                  </Heading>
                </GridItem>
                <GridItem w="300%" h="10" bg="">
                  <HStack spacing={4}>
                    {["Outdoor", "Food", "Dining"].map((item, index) => (
                      <Tag
                        size="lg"
                        key={index}
                        variant="subtle"
                        colorScheme="gray"
                        style={{ borderRadius: "20px" }}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        <TagLabel> &nbsp;{item}</TagLabel>
                      </Tag>
                    ))}
                  </HStack>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem w="100%" h="auto" bg="">
              <InpirationCard inspirationData={inspirationData} />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <SignIn
        isOpen={signInOpen}
        onClose={() => setSignInOpen(false)}
        openSignUpModal={openSignUpModal}
      />
      <SignUp
        isOpen={signUpOpen}
        onClose={() => setSignUpInOpen(false)}
        openSignInModal={openSignInModal}
      />
    </Box>
  );
}

export default Home;
