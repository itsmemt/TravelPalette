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


// import { useRef, useState, useEffect } from "react";

// export default function Home() {
//   const [image, setImage] = useState<File>();
//   const [preview, setPreview] = useState<string>();
//   const fileInputRef = useRef<HTMLInputElement>();

//   useEffect(() => {
//     if (image) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result as string);
//       };
//       reader.readAsDataURL(image);
//     } else {
//       setPreview(null);
//     }
//   }, [image]);

//   return (
//     <div className={styles.container}>
//       <form>
//         {preview ? (
//           <img
//             src={preview}
//             style={{ objectFit: "cover" }}
//             onClick={() => {
//               setImage(null);
//             }}
//           />
//         ) : (
//           <button
//             onClick={(event) => {
//               event.preventDefault();
//               fileInputRef.current.click();
//             }}
//           >
//             Add Image
//           </button>
//         )}
//         <input
//           type="file"
//           style={{ display: "none" }}
//           ref={fileInputRef}
//           accept="image/*"
//           onChange={(event) => {
//             const file = event.target.files[0];
//             if (file && file.type.substr(0, 5) === "image") {
//               setImage(file);
//             } else {
//               setImage(null);
//             }
//           }}
//         />
//       </form>
//     </div>
//   );
// }