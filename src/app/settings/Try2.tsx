// "use client";
// import React, { useState } from "react";

// const Try1 = () => {
//   const [data, setData] = useState([
//     {
//       content: [
//         {
//           content: [
//             {
//               content: { innerText: "Azeorex" },
//               id: "052637de-68f7-49e0-ab4c-db5311f9e9e2",
//               name: "Text",
//               styles: {
//                 color: "white",
//                 backgroundPosition: "center",
//                 objectFit: "cover",
//                 backgroundRepeat: "no-repeat",
//                 textAlign: "left",
//                 opacity: "100%",
//                 "font-weight": "bold",
//                 fontSize: "30px",
//               },
//               type: "text",
//             },
//           ],
//           id: "196e535c-d52f-4519-a344-318fa569dc4a",
//           name: "Container",
//           styles: { backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "left", opacity: "100%" },
//           type: "container",
//         },
//         {
//           content: [
//             {
//               content: { innerText: "About" },
//               id: "1babadb4-2abc-4bc4-bf6b-69363a794702",
//               name: "Text",
//               styles: { color: "white", backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "left", opacity: "100%" },
//               type: "text",
//             },
//             {
//               content: { innerText: "Pricing" },
//               id: "eb31c07f-6f09-4dbf-8e47-b933d3484c90",
//               name: "Text",
//               styles: { color: "white", backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "left", opacity: "100%" },
//               type: "text",
//             },
//             {
//               content: { innerText: "Product" },
//               id: "c720c362-068f-488b-9b59-50eb75c077a4",
//               name: "Text",
//               styles: { color: "white", backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "left", opacity: "100%" },
//               type: "text",
//             },
//             {
//               content: { innerText: "Blog" },
//               id: "d31dcc26-0545-4ffa-b21d-9c0cc87ca94e",
//               name: "Text",
//               styles: { color: "white", backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "left", opacity: "100%" },
//               type: "text",
//             },
//             {
//               content: { innerText: "Contact" },
//               id: "521a0e3e-0523-499f-8092-61aa6804b6ac",
//               name: "Text",
//               styles: { color: "white", backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "left", opacity: "100%" },
//               type: "text",
//             },
//           ],
//           id: "44caa0d4-adf8-4ed4-9a61-d04b37952c9a",
//           name: "Container",
//           styles: { backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "left", opacity: "100%", display: "flex", justifyContent: "space-evenly" },
//           type: "container",
//         },
//         {
//           content: [
//             {
//               content: [
//                 {
//                   content: { innerText: "Log In" },
//                   id: "e9c63a1d-dac7-4efc-b2fb-99c8035175d8",
//                   name: "Text",
//                   styles: {
//                     color: "whi",
//                     backgroundPosition: "center",
//                     objectFit: "cover",
//                     backgroundRepeat: "no-repeat",
//                     textAlign: "right",
//                     opacity: "100%",
//                     paddingTop: "2px",
//                     paddingBottom: "2px",
//                     paddingLeft: "2px",
//                     paddingRight: "2px",
//                   },
//                   type: "text",
//                 },
//               ],
//               id: "ed67dde9-c148-44db-b8b1-e67a73c4f52d",
//               name: "Container",
//               styles: { backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "right", opacity: "100%", justifyContent: "end", display: "flex" },
//               type: "container",
//             },
//             {
//               content: [
//                 {
//                   content: { innerText: "Element" },
//                   id: "6ed2e74c-909a-45b5-9132-daa35a9bfb91",
//                   name: "Text",
//                   styles: {
//                     color: "black",
//                     backgroundPosition: "center",
//                     objectFit: "cover",
//                     backgroundRepeat: "no-repeat",
//                     textAlign: "left",
//                     opacity: "100%",
//                     paddingBottom: "0px",
//                     display: "flex",
//                     alignItems: "normal",
//                     backgroundSize: "contain",
//                     marginLeft: "4px",
//                     marginRight: "6px",
//                   },
//                   type: "text",
//                 },
//                 {
//                   content: [],
//                   id: "7f735c35-f02a-4d39-80fb-2a25e136074d",
//                   name: "Container",
//                   styles: {
//                     backgroundPosition: "center",
//                     objectFit: "cover",
//                     backgroundRepeat: "no-repeat",
//                     textAlign: "left",
//                     opacity: "100%",
//                     borderRadius: "100px",
//                     backgroundColor: "#000000",
//                   },
//                   type: "container",
//                 },
//               ],
//               id: "deb83ed7-9b8b-4fc0-b569-8117f60929b6",
//               name: "Container",
//               styles: {
//                 backgroundPosition: "center",
//                 objectFit: "cover",
//                 backgroundRepeat: "no-repeat",
//                 textAlign: "left",
//                 opacity: "100%",
//                 display: "flex",
//                 borderRadius: "100px",
//                 paddingTop: "4px",
//                 paddingBottom: "4px",
//                 paddingLeft: "12px",
//                 paddingRight: "4px",
//                 justifyContent: "space-evenly",
//                 backgroundColor: "#73ff00",
//                 height: "",
//                 width: "200px",
//                 alignItems: "center",
//               },
//               type: "container",
//             },
//           ],
//           id: "b5c1ceee-8304-47a5-be61-d3987722b158",
//           name: "Container",
//           styles: { backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "left", opacity: "100%", display: "flex", alignItems: "center", zIndex: "" },
//           type: "container",
//         },
//       ],
//       id: "24db9e86-8795-4dfb-806d-07d08913fed2",
//       name: "Container",
//       styles: { backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "left", opacity: "100%", display: "flex", alignItems: "center", paddingTop: "0" },
//       type: "container",
//     },
//     {
//       content: [
//         {
//           content: { innerText: "Elevate Your Presence with Us" },
//           id: "c902afce-3d78-4b71-b5ed-641e4d7ce2bc",
//           name: "Text",
//           styles: { color: "#73ff00", backgroundPosition: "center", objectFit: "cover", backgroundRepeat: "no-repeat", textAlign: "left", opacity: "100%" },
//           type: "text",
//         },
//         {
//           content: { innerText: "Saas Website Builder And Project Tool" },
//           id: "90bb576f-94cd-408b-b301-7f345c07c7db",
//           name: "Text",
//           styles: {
//             color: "",
//             backgroundPosition: "center",
//             objectFit: "cover",
//             backgroundRepeat: "no-repeat",
//             textAlign: "center",
//             opacity: "100%",
//             fontSize: "80px",
//             "font-weight": "bold",
//             width: "890px",
//             height: "",
//             lineHeight: "1.1",
//             marginBottom: "",
//           },
//           type: "text",
//         },
//       ],
//       id: "5c70c3e7-5c5c-465a-8a15-a447167c3d7d",
//       name: "Container",
//       styles: {
//         backgroundPosition: "center",
//         objectFit: "cover",
//         backgroundRepeat: "no-repeat",
//         textAlign: "left",
//         opacity: "100%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         paddingTop: "100px",
//         marginBottom: "80px",
//       },
//       type: "container",
//     },
//     {
//       content: [],
//       id: "f949e405-557e-4454-8464-8f76b5081264",
//       name: "Container",
//       styles: {
//         backgroundPosition: "center",
//         objectFit: "cover",
//         backgroundRepeat: "no-repeat",
//         textAlign: "left",
//         opacity: "100%",
//         backgroundImage: "url(https://utfs.io/f/yYTfcV3kOFma5mFzM7pimldPMzSGg8CVJT2xQ9fyKIhAwEok)",
//         height: "600px",
//         backgroundSize: "cover",
//         "z-index": "1",
//         zIndex: "10",
//         borderRadius: "45px",
//         width: "1200px",
//       },
//       type: "container",
//     },
//   ]);

//   // Recursive function to search for the object with the given ID
//   const [draggingId, setDraggingId] = useState<string | null>(null);

//   // Recursive function to search for the object with the given ID and remove it
//   const findAndRemoveObjectById = (objArray: Content[], targetId: string): Content | null => {
//     for (let i = 0; i < objArray.length; i++) {
//       const obj = objArray[i];
//       if (obj.id === targetId) {
//         objArray.splice(i, 1);
//         return obj;
//       }
//       if (obj.content && Array.isArray(obj.content)) {
//         const result = findAndRemoveObjectById(obj.content, targetId);
//         if (result) return result;
//       }
//     }
//     return null;
//   };

//   // Recursive function to search for the object with the given ID and add a new object to its content array
//   const findAndAddObjectById = (objArray: Content[], targetId: string, newObj: Content): boolean => {
//     for (const obj of objArray) {
//       if (obj.id === targetId) {
//         if (!Array.isArray(obj.content)) obj.content = [];
//         obj.content.push(newObj);
//         return true;
//       }
//       if (obj.content && Array.isArray(obj.content)) {
//         const result = findAndAddObjectById(obj.content, targetId, newObj);
//         if (result) return result;
//       }
//     }
//     return false;
//   };

//   const moveObject = (data: Content[], draggableId: string, perentId: string) => {
//     const objToMove = findAndRemoveObjectById(data, draggableId);
//     if (objToMove) {
//       findAndAddObjectById(data, perentId, objToMove);
//     }    
//   };

//   const handleDragStart = (e: React.DragEvent, id: string) => {
//     const targetedId = e.target.id
//     setDraggingId(targetedId);
//   };

//   const handleDrop = (e: React.DragEvent, id: string) => {
//     e.preventDefault();
//     e.stopPropagation()
//     console.log("id", id);
//     console.log("drag id", draggingId);
    
    
//     if (draggingId) {
//       moveObject(data, draggingId, id);
//       setDraggingId(null);
//     }
//   };

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//     e.stopPropagation()
//   };

//   const renderContent = (content: Content[]) => {
//     return content.map((item) => (
//       <div
//         id={item.id}
//         key={item.id}
//         draggable
//         onDragStart={(e) => handleDragStart(e, item.id)}
//         onDrop={(e) => handleDrop(e, item.id)}
//         onDragOver={handleDragOver}
//         style={{ border: "1px solid white", margin: "10px", padding: "10px", ...item.style }}
//       >
//         <div>ID: {item.id}</div>
//         <div>Name: {item.name}</div>
//         {item.content && item.content.length > 0 && <div style={{ marginLeft: "20px" }}>{renderContent(item.content)}</div>}
//       </div>
//     ));
//   };

//   return <div>{renderContent(data)}</div>;
// };

// export default Try1;
