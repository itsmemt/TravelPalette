import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";


const Card = (id, title, image, heading) => {
    return (
        <div
        key={id}
        style={{
          border: "1px solid black",
          display: "grid",
          gridTemplateColumns: "repeat(1,1fr",
          height: "auto",
          width: "auto",
        }}
      >
        {/* <div  style={{height:"100%", width:"30%"}}><h1 style={{height:"100%", width:"100%"}}>{card.title}</h1></div>
    <div style={{height:"100%", width:"70%"}}><img src={card.image} alt="product" style={{height:"100%"}}/></div> */}
        <img
          src={image}
          alt="product"
          style={{ height: "400px", width: "100%" }}
        />
        <Heading as="h2" size="xl" style={{ textAlign: "center" }}>
          {title}
        </Heading>
        <Button colorScheme="teal" size="lg">
          {heading}
        </Button>
      </div>
    );
}


export default Card;