import React, { useState,useEffect } from "react";
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
  ModalFooter,
  Select,
  HStack,
  Tag,
  TagCloseButton,
  TagLabel,
  Tooltip,
  useToast
} from "@chakra-ui/react";
import { saveInspiration } from "../Api/saveInspiration";
import updateInspiration from "../Api/updateInspiration";

function AddInspiration({ isOpen, onClose,selectedInspiration, setInspirationUpdated }) {
  const [formData, setFormData] = useState({
    title: null,
    content: null,
    location: null,
    description: "",
    tags: [],
  });
  const toast = useToast();
  const [tag, setTag] = useState([]);
  useEffect(()=>{
    if (selectedInspiration) {
      setFormData({
        id: selectedInspiration._id,
        title: selectedInspiration.title,
        location: selectedInspiration.location,
        content: selectedInspiration.content,
        description: selectedInspiration.description,
        tags: selectedInspiration.tags
      });
      setTag(selectedInspiration.tags);
    }
  },[selectedInspiration]);
  const handleSaveInspiration = async () => {
    const payload= {...formData,tags:tag}
    if(selectedInspiration){
      const response = await updateInspiration(payload);
      if(response.status==='success'){
        onClose();
        toast({
          description:response.message,
          status: response.status,
          duration: 5000,
          isClosable: true,
        });
      }
    } else{
      const response = await saveInspiration(payload);
      if(response.status==='success'){
        setFormData({
          title: null,
          content: null,
          location: null,
          description: "",
          tags: [],
        })
        onClose();
        toast({
          description:response.message,
          status: response.status,
          duration: 5000,
          isClosable: true,
        });
      }
      setInspirationUpdated(Math.random());
    }
  };
  function handleSelectedTags(e) {
    setTag([...tag, e.target.value]);
  }
  const tagList = [
    "Accommodation",
    "Dining",
    "Museum/Art",
    "Shopping",
    "Landmark",
    "Attraction",
    "Coffee",
    "Drink",
    "Activity",
    "Adventure",
    "Nature",
    "Beach",
    "Historical",
    "Nightlife",
    "Festival/Event",
    "Local Cuisine",
    "Scenic View",
    "Cultural Experience",
    "Outdoor",
    "Entertainment",
  ];
  function clearTag(index) {
    setTag([...tag.slice(0, index), ...tag.slice(index + 1, tag.length)]);
  }
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
        <ModalHeader>{selectedInspiration ? 'Update ':'Add '}Inspiration</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Stack spacing={3}>
              <Input
                placeholder="Add Title"
                size="md"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <Divider orientation="horizontal" />
              <Input
                placeholder="Add Location"
                size="md"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
              <Divider orientation="horizontal" />
              <Input
                placeholder="Add Link (Youtube, Instagram, Tiktok, Blog) (Optional)"
                size="md"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
              />
              <Divider orientation="horizontal" />
              <Textarea
                placeholder="Add Details"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <HStack spacing={4}>
                {tag.map((data, index) => (
                  <Tag
                    size="sm"
                    key={index}
                    borderRadius="full"
                    variant="solid"
                    style={{ backgroundColor: "blueviolet"}}
                  >
                    <Tooltip label={data}>
                      <TagLabel>{data}</TagLabel>
                    </Tooltip>
                    <TagCloseButton onClick={() => clearTag(index)} />
                  </Tag>
                ))}
              </HStack>
              <Select
                placeholder="Search or Select tags"
                onChange={(e) => handleSelectedTags(e)}
              >
                {tagList.map((tag) => (
                  <option value={tag}>{tag}</option>
                ))}
              </Select>
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
            onClick={()=>handleSaveInspiration()}
            style={{
              backgroundColor: "#111",
              color: "#fff",
              borderRadius: "20px",
            }}
          >
            {selectedInspiration ? 'Save Changes':'Save'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddInspiration;
