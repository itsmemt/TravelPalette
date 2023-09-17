import React from "react";
import { Box, Textarea, Input, Stack, Select, Divider } from "@chakra-ui/react";

function AddInspiration() {
  return (
    <Box>
      <Stack spacing={3}>
        <Input placeholder="Add Title" size="md" />
        <Divider orientation="horizontal" />
        <Input placeholder="Add Location" size="md" />
        <Divider orientation="horizontal" />
        <Input
          placeholder="Add Link (Youtube, Instagram, Tiktok, Blog) (Optional)"
          size="md"
        />
        <Divider orientation="horizontal" />
        <Input
          placeholder="Add Link (Youtube, Instagram, Tiktok, Blog) (Optional)"
          size="md"
          type="file"
        />
        <Textarea placeholder="Add Details" />
        <Select placeholder="Search or Select tags">
          <option value="option1">Food</option>
          <option value="option2">Travel</option>
          <option value="option3">Dining</option>
        </Select>
      </Stack>
    </Box>
  );
}

export default AddInspiration;
