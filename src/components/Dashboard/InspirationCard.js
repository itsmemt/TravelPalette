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
          <div style={{position:'relative'}}>
          <Link
            href={item.content}
            isExternal
            style={{position:'absolute',right:'15px', color: "blueviolet", fontSize: "2rem" }}
          >
            <FontAwesomeIcon icon="fa-solid fa-square-arrow-up-right" />
          </Link>
          <iframe
            src={
              item.content.split("/watch?v=")[1]
                ? `https://www.youtube.com/embed/${
                    item.content.split("/watch?v=")[1]?.split("&")?.[0]
                  }`
                : item.content
            }
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
          </div>
          <Heading as="h3" style={{ textAlign: "center", fontSize: "1.5rem" }}>
            {item.title}
          </Heading>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "5px"}}
          >
            {item.tags.map((data, index) => (
              <Tag
                size="sm"
                key={index}
                borderRadius="full"
                variant="solid"
                style={{ backgroundColor: "blueviolet",height:'35px',marginBottom:'-20px' }}
              >
                <Tooltip label={data}>
                  <TagLabel style={{ paddingLeft:'10px',paddingRight:'10px'}}>{data}</TagLabel>
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
