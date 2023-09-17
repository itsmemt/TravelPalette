import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Grid,
  GridItem,
  Box,
  Heading,
  Input,
} from "@chakra-ui/react";
import AddInspiration from "./addInspiration";
import { AtSignIcon } from "@chakra-ui/icons";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiStoneWall } from "react-icons/gi";
import { GoSmiley } from "react-icons/go";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

// import { BsSearch } from 'react-icons/bs';
function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let {currentUser, SignOut} = useContext(AuthContext);
  const navigate = useNavigate();

  function Logout() {
    SignOut();
    navigate("/");
    console.log('hi');
  }
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
            <Grid templateColumns="repeat(1, 1fr)" gap={6}>
              <GridItem w="100%" h="16" bg="">
                <Heading as="h2" size="lg" style={{ marginTop: "10px" }}>
                  <AtSignIcon w={8} h={8} />
                  TravelPalette.me
                </Heading>
              </GridItem>
              <GridItem w="100%" h="550" bg="" style={{ marginLeft: "15px" }}>
                <Grid templateColumns="repeat(1, 1fr)" gap={2}>
                  <GridItem w="100%" h="10" bg="" style={{ display: "flex" }}>
                    <AiFillHome
                      style={{
                        fontSize: "20px",
                        marginRight: "10px",
                        marginTop: "2px",
                      }}
                    />
                    <Heading as="h3" size="md">
                      Home
                    </Heading>
                  </GridItem>
                  <GridItem w="100%" h="10" bg="" style={{ display: "flex" }}>
                    <BsFillPeopleFill
                      style={{
                        fontSize: "20px",
                        marginRight: "10px",
                        marginTop: "2px",
                      }}
                    />
                    <Heading as="h3" size="md">
                      My Inspirations
                    </Heading>
                  </GridItem>
                  <GridItem w="100%" h="10" bg="" style={{ display: "flex" }}>
                    <GiStoneWall
                      style={{
                        fontSize: "20px",
                        marginRight: "10px",
                        marginTop: "2px",
                      }}
                    />
                    <Heading as="h3" size="md">
                      How it works
                    </Heading>
                  </GridItem>
                  <GridItem w="100%" h="10" bg="">
                    <Button
                      onClick={onOpen}
                      size="md"
                      style={{
                        background: "black",
                        color: "white",
                        borderRadius: "20px",
                        width: "90%",
                        margin: "auto",
                      }}
                    >
                      <AiOutlinePlus
                        style={{
                          fontSize: "20px",
                          marginRight: "10px",
                          marginTop: "2px",
                          color: "white",
                        }}
                      />
                      Add Inspiration
                    </Button>
                  </GridItem>
                  <GridItem w="100%" h="10" bg="">
                    <Heading as="h3" size="md">
                      Trips
                    </Heading>
                  </GridItem>
                  <GridItem w="100%" h="10" bg="">
                    <Button
                      style={{
                        background: "black",
                        color: "white",
                        borderRadius: "30px",
                        width: "90%",
                        margin: "auto",
                      }}
                      size="md"
                    >
                      <AiOutlinePlus
                        style={{
                          fontSize: "20px",
                          marginRight: "10px",
                          marginTop: "2px",
                          color: "white",
                        }}
                      />
                      <Link to="/login">Create New Trip</Link>
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
                  <Heading as='h3' size='lg'>Hi , {currentUser.name}</Heading>
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
                  <GridItem w="100%" h="16" bg="">
                    <GoSmiley style={{ fontSize: "45px" }} />
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem w="100%" h="14" bg="">
                <Grid templateColumns="25% 22% 20% 10% 10% 10%" gap={2}>
                  <GridItem w="100%" h="10" bg="">
                    <Input placeholder="Search by Inspiration" size="lg" />
                  </GridItem>
                  <GridItem w="100%" h="10" bg="">
                    <Input placeholder="Filter by Tags" size="lg" />
                  </GridItem>
                  <GridItem w="100%" h="10" bg="">
                    <Heading as="h3" size="md" style={{ marginTop: "10px" }}>
                      Popular Searches
                    </Heading>
                  </GridItem>
                  <GridItem w="140%" h="10" bg="">
                    <Button
                      style={{
                        background: "black",
                        color: "white",
                        borderRadius: "30px",
                        width: "90%",
                        margin: "auto",
                        fontSize: "12px",
                      }}
                      size="md"
                    >
                      <AiOutlinePlus
                        style={{
                          fontSize: "12px",
                          marginRight: "10px",
                          marginTop: "2px",
                          color: "white",
                        }}
                      />{" "}
                      Outdoors
                    </Button>
                  </GridItem>
                  <GridItem w="150%" h="10" bg="">
                    <Button
                      style={{
                        background: "black",
                        color: "white",
                        borderRadius: "30px",
                        width: "90%",
                        margin: "auto",
                        fontSize: "12px",
                      }}
                      size="md"
                    >
                      <AiOutlinePlus
                        style={{
                          fontSize: "12px",
                          marginRight: "10px",
                          marginTop: "2px",
                          color: "white",
                        }}
                      />{" "}
                      Adventure
                    </Button>
                  </GridItem>
                  <GridItem w="100%" h="10" bg="">
                    <Button
                      style={{
                        background: "black",
                        color: "white",
                        borderRadius: "30px",
                        width: "90%",
                        margin: "auto",
                        fontSize: "12px",
                      }}
                      size="md"
                    >
                      <AiOutlinePlus
                        style={{
                          fontSize: "12px",
                          marginRight: "10px",
                          marginTop: "2px",
                          color: "white",
                        }}
                      />{" "}
                      Food
                    </Button>
                  </GridItem>
                </Grid>
              </GridItem>
              {/* <GridItem w="100%" h="auto" bg="">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: "10px",
                  }}
                >
                  {cards.map((card) => (
                    <div
                      key={cards.id}
                      style={{
                        border: "1px solid black",
                        display: "grid",
                        gridTemplateColumns: "repeat(1,1fr",
                        height: "auto",
                        width: "auto",
                        borderRadius: "30px",
                      }}
                    >
                      <img
                        src={card.image}
                        alt="product"
                        style={{
                          height: "400px",
                          width: "100%",
                          borderTopLeftRadius: "30px",
                          borderTopRightRadius: "30px",
                        }}
                      />
                      <Box
                        style={{
                          borderTopRightRadius: "30px",
                          borderTopLeftRadius: "30px",
                          border: "1px solid black",
                          height: "auto",
                        }}
                      >
                        <Heading
                          as="h2"
                          style={{ textAlign: "center", fontSize: "1.5rem" }}
                        >
                          {card.title}
                        </Heading>
                      </Box>
                      <Box
                        style={{
                          borderRadius: "30px",
                          border: "1px solid black",
                          height: "auto",
                          padding: "10px",
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <Button
                          style={{
                            background: "black",
                            color: "white",
                            borderRadius: "30px",
                            width: "90%",
                            margin: "auto",
                            fontSize: "12px",
                          }}
                          size="md"
                        >
                          {card.heading}
                        </Button>
                        <Button
                          style={{
                            background: "black",
                            color: "white",
                            borderRadius: "30px",
                            width: "90%",
                            margin: "auto",
                            fontSize: "12px",
                          }}
                          size="md"
                        >
                          {card.heading}
                        </Button>
                      </Box>
                    </div>
                  ))}
                </div>
              </GridItem> */}
            </Grid>
          </GridItem>
        </Grid>
      </Box>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Inspiration</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddInspiration/>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose} style={{borderRadius:'20px'}}>
              Cancel
            </Button>
            <Button style={{backgroundColor:'#111',color:'#fff',borderRadius:'20px'}}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Dashboard;
