import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllInspiration } from "../Api/getInspiration";
import { AuthContext } from "../Context/AuthContext";
import AddInspiration from "./addInspiration";
import AddTrip from "./addTrip";
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
import travelPaletteLogo from "../Images/paletteLogo.png";

function Dashboard() {
  const navigate = useNavigate();
  let { currentUser, SignOut } = useContext(AuthContext);
  const [addInspirationOpen, setAddInspirationOpen] = useState(false);
  const [addTripOpen, setAddTripOpen] = useState(false);
  function Logout() {
    SignOut();
    navigate("/");
  }
  const getAllInspirations = async () => {
    const response = await getAllInspiration();
    console.log("API response:", response);
  };
  return (
    <>
      <Box>
        <Grid templateColumns="22% 78%" gap={2}>
          <GridItem
            w="100%"
            h="auto"
            bg=""
            style={{ borderRight: "1px solid grey" }}
          >
            <HStack style={{ marginTop: "10px", marginBottom: "20px" }}>
              <Image
                src={travelPaletteLogo}
                alt="Travel Palette"
                style={{ backgroundColor: "black" }}
              />
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
                    <Button size="md" onClick={() => getAllInspirations()}>
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
                      onClick={() => setAddInspirationOpen(true)}
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
                      onClick={() => setAddTripOpen(true)}
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
                <Grid templateColumns="60% 20% 15% 5%" gap={0} mt={2} ml={2}>
                  <GridItem w="100%" h="16" bg="">
                    <Heading as="h3" size="lg">
                      Home
                    </Heading>
                  </GridItem>
                  <GridItem w="100%" h="16" bg="">
                    <Heading as="h3" size="lg">
                      Hi , {currentUser.name}
                    </Heading>
                  </GridItem>
                  <GridItem w="100%" h="16" bg="">
                    <Button
                      onClick={Logout}
                      style={{
                        background: "black",
                        color: "white",
                        borderRadius: "30px",
                        width: "90%",
                        margin: "auto",
                      }}
                      size="md"
                    >
                      Logout
                    </Button>
                  </GridItem>
                  <GridItem w="100%" h="16" bg=""></GridItem>
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
            </Grid>
          </GridItem>
        </Grid>
      </Box>
      <AddInspiration
        isOpen={addInspirationOpen}
        onClose={() => setAddInspirationOpen(false)}
      />
      <AddTrip isOpen={addTripOpen} onClose={() => setAddTripOpen(false)} />
    </>
  );
}

export default Dashboard;
