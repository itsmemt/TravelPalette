import React from "react";
import {
  TagLabel,
  Tooltip,
  Heading,
  Button,
  HStack,
  Link,
  Tag,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function InpirationCard({ inspirationData }) {
  console.log(
    "https://www.youtube.com/watch?v=Y7_1rCuioeI"
      .split("/watch?v=")[1]
      ?.split("&")?.[0]
  );
  const generateEmbedCode = (link) => {
    if (link.includes("youtube.com")) {
      // It's a YouTube link, extract the video ID

      console.log(
        "https://www.youtube.com/watch?v=Y7_1rCuioeI"
          .split("/watch?v=")[1]
          ?.split("&")?.[0]
      ); 
      
      const videoIdMatch = link.match(/v=([a-zA-Z0-9_-]+)/);
      if (videoIdMatch) {
        const videoId = videoIdMatch[1];
        // Construct the YouTube embed code
        return (
          <iframe
            width="100%"
            height="200px"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Embedded YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      }
    } else if (link.includes("instagram.com")) {
      // It's an Instagram link, extract the post ID
      const postMatch = link.match(/\/p\/([a-zA-Z0-9_-]+)/);
      if (postMatch) {
        const postId = postMatch[1];
        // Construct the Instagram embed code
        return (
          <iframe
            width="100%"
            height="200px"
            src={`https://www.instagram.com/p/${postId}/embed`}
            title="Embedded Instagram post"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          // <blockquote
          //   className="instagram-media"
          //   data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
          //   data-instgrm-version="13"
          // ></blockquote>
        );
      }
    }
    // If the link is not recognized as YouTube or Instagram, return null or handle it accordingly.
    return (
      <iframe
        src={link}
        title="Link Preview"
        width="100%"
        height="400px"
        frameBorder="0"
        sandbox="allow-same-origin allow-scripts"
        style={{
          height: "200px",
          width: "100%",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      ></iframe>
    );
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
      }}
    >
      {inspirationData.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid black",
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr",
            width: "auto",
            borderRadius: "30px",
            height: "400px",
          }}
        >
          <div style={{ position: "relative" }}>
            <Link
              href={item.content}
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
            {generateEmbedCode(item.content)}
          </div>
          <Heading as="h3" style={{ textAlign: "center", fontSize: "1.5rem" }}>
            {item.title}
          </Heading>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "5px" }}
          >
            {item.tags.map((data, index) => (
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
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
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
                width: "90%",
                margin: "auto",
                fontSize: "12px",
              }}
              size="md"
            >
              {item.location}
            </Button>
          </HStack>
        </div>
      ))}
    </div>
  );
}

export default InpirationCard;
