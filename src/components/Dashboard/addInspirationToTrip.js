import React, { useState, useEffect } from "react";
import {
  Heading,
  HStack,
  Stack,
  Spacer,
  Flex,
  TagLabel,
  Tooltip,
  Button,
  Link,
  Tag,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InspirationCard from "./InspirationCard";
import AddTrip from "./addTrip";
import getInspiration from "../Api/getInspiration";
import updateTrips from "../Api/updateTrips";
import DeleteTrips from "../Api/deleteTrips";
const generateEmbedCode = (link) => {
  if (link?.includes("youtube.com")) {
    const videoIdMatch = link.match(/v=([a-zA-Z0-9_-]+)/);
    if (videoIdMatch) {
      const videoId = videoIdMatch[1];
      // Construct the YouTube embed code
      return (
        <iframe
          height="300px"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Embedded YouTube Video"
          frameBorder="0"
          allowFullScreen
          style={{
            height: "300px",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        ></iframe>
      );
    }
  } else if (link?.includes("instagram.com")) {
    // It's an Instagram link, extract the post ID
    const postMatch = link.match(/\/p\/([a-zA-Z0-9_-]+)/);
    if (postMatch) {
      const postId = postMatch[1];
      // Construct the Instagram embed code
      return (
        <iframe
          height="300px"
          src={`https://www.instagram.com/p/${postId}/embed`}
          title="Embedded Instagram post"
          frameBorder="0"
          allowFullScreen
          style={{
            height: "300px",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        ></iframe>
      );
    }
  }
  // If the link is not recognized as YouTube or Instagram, return null or handle it accordingly.
  return (
    <iframe
      src={link}
      title="Link Preview"
      height="400px"
      frameBorder="0"
      sandbox="allow-same-origin allow-scripts"
      style={{
        height: "300px",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
      }}
    ></iframe>
  );
};
function AddInspirationToTrip({
  selectedTripsData,
  setSelectedTab,
  setTripChanges,
}) {
  const toast = useToast();
  const [updatedTrip, setUpdatedTrip] = useState(selectedTripsData.item);
  const [addTripOpen, setAddTripOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [inspirations, setInspirations] = useState([]);
  const [selectedInspiration, setSelectedInspiration] = useState([]);
  const [dashboardTiles, setDashboardTiles] = useState([]);
  const handleInspirationClick = (inspiration) => {
    if (selectedInspiration?.includes(inspiration)) {
      setSelectedInspiration(
        selectedInspiration.filter((insp) => insp._id !== inspiration._id)
      );
    } else {
      setSelectedInspiration([...selectedInspiration, inspiration]);
    }
  };

  const addSelectedTilesToDashboard = async (selectedTilesToAdd) => {
    setDashboardTiles([...dashboardTiles, ...selectedTilesToAdd]);
    setSelectedInspiration([]);
    const updatedTripData = await updateTrips(selectedTripsData._id, {
      item: selectedInspiration,
    });
    setUpdatedTrip([...updatedTrip, ...selectedTilesToAdd]);
    setModalOpen(false);
  };
  const removeTileFromDashboard = (tileId) => {
    setDashboardTiles(dashboardTiles.filter((tile) => tile._id !== tileId));
  };
  useEffect(() => {
    getInspiration()
      .then((data) => {
        setInspirations(data);
      })
      .catch((error) => {
        console.error("Error fetching inspiration data: ", error);
      });
  }, [updatedTrip]);

  const handleDelete = async (id) => {
    const response = await DeleteTrips(id);
    if (response) {
      toast({
        description: response.message,
        status: response.status,
        duration: 5000,
        isClosable: true,
      });
    }
    setSelectedTab("Home");
  };
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  }
  const startDate = formatDate(selectedTripsData.startDate);
  const endDate = formatDate(selectedTripsData.endDate);
  return (
    <Box>
      <Flex
        minWidth="60%"
        maxWidth="max-content"
        alignItems="center"
        gap="2"
        bg="gray.100"
        style={{ padding: "20px", borderRadius: "10px" }}
      >
        <Stack>
          <Heading as="h3" size="lg">
            {selectedTripsData.name}{" "}
          </Heading>
          <HStack style={{ textDecoration: "underline" }}>
            <Heading as="h6" size="sm">
              {startDate} to{" "}
            </Heading>
            <Heading as="h6" size="sm">
              {endDate}{" "}
            </Heading>
          </HStack>
        </Stack>
        <Spacer />
        <HStack>
          <FontAwesomeIcon
            onClick={() => setAddTripOpen(true)}
            icon="fa-solid fa-pen-to-square"
            style={{ fontSize: "35px", color: "#2228", cursor: "pointer" }}
          />
          <Spacer />
          <FontAwesomeIcon
            onClick={() => handleDelete(selectedTripsData._id)}
            icon="fa-solid fa-trash"
            style={{ fontSize: "35px", color: "#2228", cursor: "pointer" }}
          />
        </HStack>
      </Flex>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Flex style={{ marginTop: "50px", marginBottom: "20px" }}>
                <Heading
                  as="h4"
                  size="lg"
                  style={{ textDecoration: "underline" }}
                >
                  Select Inspirations to Add to Trip
                </Heading>
                <Spacer />
                <Button
                  onClick={() =>
                    addSelectedTilesToDashboard(selectedInspiration)
                  }
                >
                  ADD
                </Button>
              </Flex>
              <div
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  marginBottom: "10px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                }}
              >
                {inspirations?.data?.length > 0 ? (
                  inspirations.data?.map((inspiration) => (
                    <Box
                      key={inspiration._id}
                      style={{
                        border: selectedInspiration?.includes(inspiration)
                          ? "2px solid #00f"
                          : "2px solid transparent",
                        display: "grid",
                        gridTemplateColumns: "repeat(1,1fr)",
                        padding: "2px",
                        borderRadius: "30px",
                      }}
                    >
                      <div
                        key={inspiration._id}
                        style={{
                          height: "500px",
                          maxWidth: "300px",
                        }}
                      >
                        <div style={{ position: "relative" }}>
                          <Link
                            href={inspiration.content}
                            isExternal
                            style={{
                              position: "absolute",
                              right: "15px",
                              color: "blueviolet",
                              fontSize: "2rem",
                            }}
                          >
                            <FontAwesomeIcon icon="fa-solid fa-square-arrow-up-right" />
                          </Link>
                          <FontAwesomeIcon
                            icon="fa-solid fa-circle-check"
                            style={{
                              position: "absolute",
                              left: "2px",
                              fontSize: "2rem",
                              color: selectedInspiration?.includes(inspiration)
                                ? "black"
                                : "gray",
                            }}
                            onClick={() => handleInspirationClick(inspiration)}
                          />
                          {generateEmbedCode(inspiration.content)}
                        </div>
                        <Heading
                          as="h4"
                          style={{
                            textAlign: "center",
                            fontSize: "1.2rem",
                            padding: "4px",
                          }}
                        >
                          {inspiration.title}
                        </Heading>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "5px",
                            overflowX: "scroll",
                            height: "80px",
                            padding:"4px"
                          }}
                        >
                          {inspiration.tags?.map((data, index) => (
                            <Tag
                              size="sm"
                              key={index}
                              borderRadius="full"
                              variant="solid"
                              style={{
                                backgroundColor: "blueviolet",
                                height: "35px",
                                marginBottom: "-20px",
                              }}
                            >
                              <Tooltip label={data}>
                                <TagLabel
                                  style={{
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                  }}
                                >
                                  {data}
                                </TagLabel>
                              </Tooltip>
                            </Tag>
                          ))}
                        </div>
                        <HStack spacing={2}>
                          <Button
                            style={{
                              background: "black",
                              color: "white",
                              borderRadius: "30px",
                              width: "80%",
                              margin: "auto",
                              fontSize: "12px",
                              marginTop:"10px"
                            }}
                            size="md"
                          >
                            {inspiration.location}
                          </Button>
                        </HStack>
                      </div>
                    </Box>
                  ))
                ) : (
                  <p>No inspiration data available.</p>
                )}
              </div>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <AddTrip
        isOpen={addTripOpen}
        onClose={() => setAddTripOpen(false)}
        selectedTripsData={selectedTripsData}
        setTripChanges={setTripChanges}
      />
      <Box>
        <HStack style={{ margin: "10px" }}>
          <Flex
            w="250px"
            h="350"
            alignItems="center"
            justifyContent="center"
            bg="gray.200"
            style={{ borderRadius: "30px", cursor: "pointer" }}
            onClick={() => setModalOpen(true)}
          >
            <Flex
              w="100px"
              h="100px"
              alignItems="center"
              justifyContent="center"
              style={{
                borderRadius: "100%",
                backgroundColor: "#000",
              }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-plus"
                style={{
                  fontSize: "50px",
                  color: "#aaa",
                }}
              />
            </Flex>
          </Flex>
        </HStack>
        {updatedTrip?.length > 0 && (
          <InspirationCard inspirationData={updatedTrip} />
        )}
      </Box>
      <AddTrip
        isOpen={addTripOpen}
        onClose={() => setAddTripOpen(false)}
        selectedTripsData={selectedTripsData}
        setTripChanges={setTripChanges}
      />
    </Box>
  );
}

export default AddInspirationToTrip;
