import React, { useState } from "react";
import { Link } from "react-router-dom";
import travelPaletteLogo from "../Images/paletteLogo.png";
import {
  Grid,
  GridItem,
  Button,
  Box,
  Heading,
  Input,
  InputLeftElement,
  InputGroup,
  HStack,
  Tag,
  TagLabel,
  Image,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllInspiration } from "../Api/getInspiration";
import SignUp from "../Signup/register";
import SignIn from "../SignIn/signIn";

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
  const getAllInspirations = async () => {
    const response = await getAllInspiration();
    console.log("API response:", response);
  };
  const cards = [
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48bvdSd0KkVemLGCV4lhBMtZicz4BILeYSqumGoKPwVboe2EDesi7xirTF-ggR9NzefU&usqp=CAU",
      title: "trip to USA",
      heading: "good to have",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXDwDTL9If0oh2yHUzszeaojlGA40peJ2k0dfHjAuftndenj4CrpBzC6fsdaxqtjjGuw&usqp=CAU",
      title: "Trip to Japan",
      heading: "Tokyo",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGmKaU06Qd_dBQkWA8Np0CVwo7XcICtCYDXgVSzbc&s",
      title: "Trip to India",
      heading: "Taj Mahal",
    },
    {
      id: "4",
      image:
        "https://img.freepik.com/premium-photo/natural-real-person-portrait-closeup-woman-girl-female-outside-nature-forest-artistic-edgy-cute-pretty-face-ai-generated_590464-133624.jpg",
      title: "trip to singapore",
      heading: "travelling",
    },
    {
      id: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVAqc9zGADIABNxBW9rHBu_U7FBq0kudwIHpeOo5gMRSL4Wz3O0zW2newuwY2jE1ryfw&usqp=CAU",
      title: "Malaysia ",
      heading: "tourism",
    },
    {
      id: "6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPenuQxNvSck_SLiF_Sow31ZLrxpKU7WQR4KzCoJybDUWhF2JonJeVrS3et_9sTokAzc&usqp=CAU",
      title: "Goa ",
      heading: "Beaches",
    },
  ];

  return (
    <Box>
      <Grid templateColumns="22% 78%" gap={2}>
        <GridItem
          w="100%"
          h="auto"
          bg=""
          style={{ borderRight: "1px solid grey" }}
        >
          <HStack style={{ marginTop: "10px",marginBottom:'20px' }}>
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
                  <Heading as="h3" size="md">
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                    Home
                  </Heading>
                </GridItem>
                <GridItem w="100%" h="10" bg="" style={{ display: "flex" }}>
                  <Heading as="h3" size="md" onClick={getAllInspirations}>
                    <FontAwesomeIcon icon="fa-solid fa-user-group" />
                    &nbsp; My Inspirations
                  </Heading>
                </GridItem>
                <GridItem w="100%" h="10" bg="" style={{ display: "flex" }}>
                  <Heading as="h3" size="md">
                    <FontAwesomeIcon icon="fa-solid fa-keyboard" />
                    &nbsp; How it works
                  </Heading>
                </GridItem>
                <GridItem w="100%" h="10" bg="">
                  <Button
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
                    <Link to="/login"> &nbsp;&nbsp;Add Inspiration</Link>
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
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                    <Link to="/login">&nbsp;&nbsp;Create New Trip</Link>
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
                    {/* <Link to="/signup"> Sign Up</Link> */}
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
                    {/* <Link to="/login"> Sign In</Link> */}
                  </Button>
                </GridItem>
                <GridItem w="100%" h="16" bg="">
                  <FontAwesomeIcon
                    style={{ fontSize: "40px" }}
                    icon="fa-solid fa-face-smile"
                  />
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
                    {/* <div  style={{height:"100%", width:"30%"}}><h1 style={{height:"100%", width:"100%"}}>{card.title}</h1></div>
                <div style={{height:"100%", width:"70%"}}><img src={card.image} alt="product" style={{height:"100%"}}/></div> */}
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
                  // <Card key={card.id} title={card.title} image={card.image} heading={card.heading}/>
                ))}
              </div>
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
