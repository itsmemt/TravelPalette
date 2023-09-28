import React, { useState } from "react";
import { Heading, HStack, Stack, Spacer, Flex, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InpirationCard from "./InspirationCard";
import AddTrip from "./addTrip";
function AddInspirationToTrip({ selectedTripsData, setSelectedTab }) {
  const [addTripOpen, setAddTripOpen] = useState(false);
  const handleDelete = () => {
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
            onClick={() => handleDelete()}
            icon="fa-solid fa-trash"
            style={{ fontSize: "35px", color: "#2228", cursor: "pointer" }}
          />
        </HStack>
      </Flex>
      <Box>
        {selectedTripsData.item.length > 0 ? (
          <InpirationCard inspirationData={selectedTripsData.item} />
        ) : (
          <HStack style={{ margin: "10px" }}>
            <Flex
              w="250px"
              h="350"
              alignItems="center"
              justifyContent="center"
              bg="gray.200"
              style={{ borderRadius: "30px" }}
            >
              <Flex
                w="100px"
                h="100px"
                alignItems="center"
                justifyContent="center"
                style={{ borderRadius: "100%", backgroundColor: "#000" }}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-plus"
                  style={{ fontSize: "50px", color: "#aaa", cursor: "pointer" }}
                />
              </Flex>
            </Flex>
          </HStack>
        )}
      </Box>
      <AddTrip
        isOpen={addTripOpen}
        onClose={() => setAddTripOpen(false)}
        selectedTripsData={selectedTripsData}
      />
    </Box>
  );
}

export default AddInspirationToTrip;
