import React, { useState } from "react";
import {
  Box,
  Textarea,
  Input,
  Stack,
  Divider,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalFooter
} from "@chakra-ui/react";

function AddTrip({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: null,
    location: null,
    description: "",
  });

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
        <ModalHeader>Create Trip</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Stack spacing={3}>
              <Input
                placeholder="Add Title"
                size="md"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <Divider orientation="horizontal" />
              <Input
                placeholder="Add Location"
                size="md"
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
              <Divider orientation="horizontal" />
              <Input
                placeholder="Add Link (Youtube, Instagram, Tiktok, Blog) (Optional)"
                size="md"
                type="file"
              />
              <Divider orientation="horizontal" />
              <Textarea
                placeholder="Add Details"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              {/* <Select placeholder="Search or Select tags">
          <option value="option1">Food</option>
          <option value="option2">Travel</option>
          <option value="option3">Dining</option>
        </Select> */}
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
          <Button
            style={{
              backgroundColor: "#111",
              color: "#fff",
              borderRadius: "20px",
            }}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddTrip;