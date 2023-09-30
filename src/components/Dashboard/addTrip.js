import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Input,
  Stack,
  HStack,
  Divider,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { saveTrip, updateTrip } from "../Api/saveTrip";

function AddTrip({ isOpen, onClose, selectedTripsData }) {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: null,
    startDate: null,
    endDate: null,
    location: null,
  });
  useEffect(()=>{
    if (selectedTripsData) {
      setFormData({
        id: selectedTripsData._id,
        name: selectedTripsData.name,
        startDate: selectedTripsData.startDate.split("T")[0],
        endDate: selectedTripsData.endDate.split("T")[0],
        location: selectedTripsData.location,
        item: selectedTripsData.item,
      });
    }
  },[selectedTripsData])
  const handleUpdateTrip = async () => {
    const payload = formData;
    const response = await updateTrip(payload);
    if (response.status === "success") {
      onClose();
      toast({
        description: response.message,
        status: response.status,
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const handleSaveTrip = async () => {
    const payload = formData;
    const response = await saveTrip(payload);
    if (response.status === "success") {
      setFormData({
        name: null,
        startDate: null,
        endDate: null,
        location: null,
      });
      onClose();
      toast({
        description: response.message,
        status: response.status,
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Modal
      size="2xl"
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {selectedTripsData ? "Edit Trip" : "Create Trip"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Stack spacing={3}>
              <Input
                style={{ outline: "none", border: "none" }}
                placeholder="New Trip Name"
                size="md"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Divider orientation="horizontal" />
              <HStack>
                <Heading as="h6" size="sm">
                  Where To ?
                </Heading>
                <Input
                  style={{ width: "80%" }}
                  placeholder="Ex: Shimla,India"
                  size="md"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </HStack>
              <Divider orientation="horizontal" />
              <HStack>
                <Heading as="h6" size="sm" style={{ marginRight: "20px" }}>
                  Dates_?
                </Heading>
                <Heading as="h6" size="sm" style={{ marginRight: "20px" }}>
                  Start
                </Heading>
                <Input
                  type="date"
                  size="md"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                />
                <Heading as="h6" size="sm" style={{ marginRight: "20px" }}>
                  End
                </Heading>
                <Input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                />
              </HStack>
            </Stack>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="gray"
            mr={3}
            onClick={onClose}
            style={{ borderRadius: "20px" }}
          >
            Cancel
          </Button>
          {selectedTripsData ? (
            <Button
              onClick={() => handleUpdateTrip()}
              style={{
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              Save Changes
            </Button>
          ) : (
            <Button
              onClick={() => handleSaveTrip()}
              style={{
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              Save
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddTrip;
