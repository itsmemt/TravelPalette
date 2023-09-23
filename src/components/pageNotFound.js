import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

function PageNotFound(props) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading as="h2" size="lg">
        Page Not Found
      </Heading>
      <Heading as="h4" size="md">
        <Link to="/" style={{color:'blueviolet',textDecoration:'underline'}}>Go To Home Page</Link>
      </Heading>
    </div>
  );
}

export default PageNotFound;
