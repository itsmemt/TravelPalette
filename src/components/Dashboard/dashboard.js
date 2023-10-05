import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../Context/AuthContext";
import {
  InputLeftElement,
  InputGroup,
  GridItem,
  TagLabel,
  Heading,
  Tooltip,
  HStack,
  Button,
  Stack,
  Image,
  Input,
  Grid,
  Box,
  Tag,
  InputRightElement,
  Select,
  useToast,
} from "@chakra-ui/react";
import {
  searchInspiration,
  searchInspirationByTags,
} from "../Api/searchInspiration";
import AddInspiration from "./addInspiration";
import AddTrip from "./addTrip";
import travelPaletteLogo from "../Images/paletteLogo.svg";
import getAllInspiration from "../Api/getInspiration";
import InpirationCard from "./InspirationCard";
import AddInspirationToTrip from "./addInspirationToTrip";
import smileLogo from "../Images/smileLogo.svg";
import getApi from "../Api/getApi";
import data from "../Home/data";
import DeleteInspiration from "../Api/deleteInspiration";
function Dashboard() {
  const toast = useToast();
  const navigate = useNavigate();
  let { currentUser, SignOut } = useContext(AuthContext);
  const [addInspirationOpen, setAddInspirationOpen] = useState(false);
  const [addTripOpen, setAddTripOpen] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [filterTags, setFilterTags] = useState("");
  const [activeField, setActiveField] = useState(null);
  const [inspirationData, setInspirationData] = useState([]);
  const [tripsData, setTripsData] = useState([]);
  const [popularTags, setPopularTags] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");
  const [selectedTripsData, setSelectedTripsData] = useState([]);
  const [tripChanges, setTripChanges] = useState("");
  useEffect(() => {
    getAllInspirations();
    getPopularTags();
    getTrips();
  }, []);
  useEffect(() => {
    getTrips();
  }, [tripChanges]);
  const getTripByTripId = async (data) => {
    setSelectedTab("Trips");
    setSelectedTripsData(data);
  };
  const getTrips = async () => {
    const response = await getApi("/api/v1/itinerary");
    setTripsData(response.data);
  };
  const getPopularTags = async () => {
    const response = await getApi("/api/v1/tags/used");
    setPopularTags(response.data);
  };
  const getAllInspirations = async (tab) => {
    setSelectedTab(tab);
    if (tab === "Home") {
      setInspirationData(data);
    } else {
      const response = await getAllInspiration();
      setInspirationData(response.data);
    }
  };
  const deleteInspirations = async (ID) => {
    const res = await DeleteInspiration(ID);
    console.log(res);
    if (res.status === "success") {
      toast({
        description: res.message,
        status: res.status,
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        description: "Something went wrong",
        status: res.status,
        duration: 5000,
        isClosable: true,
      });
    }
    const response = await getAllInspiration();
    setInspirationData(response.data);
  };

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      if (activeField === "inspiration") {
        const response = await searchInspiration(searchData);
        setInspirationData(response.data);
      } else if (activeField === "tags") {
        const response = await searchInspirationByTags(filterTags);
        setInspirationData(response.data);
      }
    }
  };
  function Logout() {
    SignOut();
    navigate("/");
  }
  useEffect(() => {}, [inspirationData]);

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
                    <Button
                      size="md"
                      onClick={() => getAllInspirations("Home")}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-house" />
                      &nbsp; Home
                    </Button>
                  </GridItem>
                  <GridItem w="100%" h="10" bg="" style={{ display: "flex" }}>
                    <Button
                      size="md"
                      onClick={() => getAllInspirations("My Inspirations")}
                    >
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
                  <Stack>
                    {tripsData.length > 0 ? (
                      <Stack>
                        {tripsData.map((item) => {
                          return (
                            <Button
                              w="80%"
                              size="md"
                              key={item._id}
                              onClick={() => getTripByTripId(item)}
                            >
                              {item.name}
                            </Button>
                          );
                        })}
                      </Stack>
                    ) : (
                      <p>You don't have any trips.</p>
                    )}
                  </Stack>
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
                      {selectedTab ? selectedTab : "Home"}
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
                  <GridItem w="100%" h="16" bg="">
                  <Box>
                    <Image src={smileLogo} alt="Profile" />
                  </Box>
                </GridItem>
                </Grid>
              </GridItem>
              {selectedTab !== "Trips" ? (
                <>
                  <GridItem w="100%" h="14" bg="">
                    <Grid templateColumns="25% 22% 20% 10% 10% 10%" gap={2}>
                      <GridItem w="100%" h="10" bg="">
                        <InputGroup>
                          <Input
                            type="search"
                            placeholder="Search by Inspiration"
                            size="md"
                            value={searchData}
                            onKeyPress={handleSearch}
                            onChange={(e) => setSearchData(e.target.value)}
                            onFocus={() => setActiveField("inspiration")}
                            onBlur={() => setActiveField(null)}
                          />
                          <InputLeftElement>
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                          </InputLeftElement>
                        </InputGroup>
                      </GridItem>
                      <GridItem w="100%" h="10" bg="">
                        <InputGroup>
                          <Input
                            placeholder="Filter by Tags"
                            size="md"
                            type="search"
                            value={filterTags}
                            onKeyPress={handleSearch}
                            onChange={(e) => setFilterTags(e.target.value)}
                            onFocus={() => {
                              setActiveField("tags");
                            }}
                            onBlur={() => setActiveField(null)}
                          />
                          <InputLeftElement pointerEvents="none">
                            <FontAwesomeIcon icon="fa-solid fa-tags" />
                          </InputLeftElement>
                          <InputRightElement>
                            <Select
                              size="sm"
                              style={{ paddingRight: "10px" }}
                              onChange={(e) => setFilterTags(e.target.value)}
                            >
                              <option value=""></option>
                              {popularTags.map((tag) => (
                                <option value={tag.name}>{tag.name}</option>
                              ))}
                            </Select>
                          </InputRightElement>
                        </InputGroup>
                      </GridItem>
                      <GridItem w="100%" h="10" bg="">
                        <Heading
                          as="h3"
                          size="md"
                          style={{ marginTop: "10px" }}
                        >
                          Popular Searches
                        </Heading>
                      </GridItem>
                      <GridItem w="300%" h="10" bg="">
                        <HStack spacing={4}>
                          {popularTags.length > 0 ? (
                            popularTags.slice(0, 3).map((item, index) => (
                              <Tooltip label={item.name}>
                                <Tag
                                  size="lg"
                                  key={index}
                                  variant="subtle"
                                  colorScheme="gray"
                                  style={{ borderRadius: "20px" }}
                                >
                                  <FontAwesomeIcon icon="fa-solid fa-plus" />
                                  <TagLabel> &nbsp;{item.name}</TagLabel>
                                </Tag>
                              </Tooltip>
                            ))
                          ) : (
                            <></>
                          )}
                        </HStack>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem w="100%" bg="" style={{ overflowY: "scroll" }}>
                    <InpirationCard
                      inspirationData={
                        selectedTab === "Home" ? data : inspirationData
                      }
                      delInspiration={deleteInspirations}
                    />
                  </GridItem>{" "}
                </>
              ) : (
                <AddInspirationToTrip
                  selectedTripsData={selectedTripsData}
                  setSelectedTab={setSelectedTab}
                  setTripChanges={setTripChanges}
                />
              )}
            </Grid>
          </GridItem>
        </Grid>
      </Box>
      <AddInspiration
        isOpen={addInspirationOpen}
        onClose={() => setAddInspirationOpen(false)}
      />
      <AddTrip
        isOpen={addTripOpen}
        onClose={() => setAddTripOpen(false)}
        setTripChanges={setTripChanges}
      />
    </>
  );
}

export default Dashboard;
