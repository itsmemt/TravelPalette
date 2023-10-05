import React,{useState} from "react";
import "./dashboard.css";
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
import AddInspiration from "./addInspiration";
function InpirationCard({
  inspirationData,
  delInspiration,
  accessButton,
}) {
  const [addInspirationOpen, setAddInspirationOpen] = useState(false);
  const [selectedInspiration, setSelectedInspiration] = useState('');
  const handleUpdateInspiration = (data) =>{
    setAddInspirationOpen(true);
    setSelectedInspiration(data)
  }
  const generateEmbedCode = (link) => {
    if (link?.includes("youtube.com")) {
      // It's a YouTube link, extract the video ID
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
    } else if (link?.includes("instagram.com/p/")) {
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
    } else if (link?.includes("instagram.com/reel/")) {
      // It's an Instagram reel link, extract the reel ID
      const reelMatch = link.match(/\/reel\/([a-zA-Z0-9_-]+)/);
      if (reelMatch) {
        const reelId = reelMatch[1];
        // Construct the Instagram embed code for reels
        return (
          <iframe
            height="300px"
            src={`https://www.instagram.com/reel/${reelId}/embed`}
            title="Embedded Instagram Reel"
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
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
        overflowY: "scroll",
      }}
    >
      {inspirationData?.map((item) => (
        <div
          key={item._id}
          className="inspiration_card"
          style={{
            border: "1px solid black",
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
            borderRadius: "30px",
            height: "500px",
            maxWidth: "300px",
          }}
        >
          <div>
            <div
              style={{ position: "relative" }}
              className="inspiration_access_btn"
            >
              {accessButton ? (
                <FontAwesomeIcon
                  icon="fa-solid fa-trash"
                  style={{
                    color: "#d12310",
                    position: "absolute",
                    top: "10px",
                    right: "85px",
                    height: "28px",
                  }}
                  onClick={() => delInspiration(item._id ? item._id : 500)}
                />
              ) : (
                <></>
              )}
              {accessButton ? (
                <FontAwesomeIcon
                  icon="fa-solid fa-square-pen"
                  style={{
                    color: "#aaa9",
                    position: "absolute",
                    top: "10px",
                    right: "55px",
                    height: "28px",
                  }}
                  onClick={() => handleUpdateInspiration(item)}
                />
              ) : (
                <></>
              )}
              <Link href={item.content} isExternal>
                <FontAwesomeIcon
                  icon="fa-solid fa-square-arrow-up-right"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "15px",
                    color: "blueviolet",
                    height: "28px",
                  }}
                />
              </Link>
            </div>
            {generateEmbedCode(item.content)}
          </div>
          <Heading as="h4" style={{ textAlign: "center", fontSize: "1.2rem" }}>
            {item.title}
          </Heading>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              overflowX: "scroll",
            }}
          >
            {item.tags?.map((data, index) => (
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
                width: "80%",
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
      <AddInspiration
        isOpen={addInspirationOpen}
        onClose={() => setAddInspirationOpen(false)}
        selectedInspiration={selectedInspiration}
      />
    </div>
  );
}

export default InpirationCard;
