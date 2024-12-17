// "use client"
// import React, { useState } from "react";

// const App = () => {
//   const [divs, setDivs] = useState({
//     container1: ["div1", "div2"],
//     container2: ["div3", "div4"],
//     outside: [],
//   });

//   const [draggedDiv, setDraggedDiv] = useState(null);
//   console.log(draggedDiv);
  

//   const onDragStart = (e, divId) => {
//     setDraggedDiv(divId);
//   };

//   const onDrop = (e, container) => {
//     e.preventDefault();

//     // Remove the dragged div from its current container
//     let updatedDivs = { ...divs };
//     for (const key in updatedDivs) {
//       updatedDivs[key] = updatedDivs[key].filter((id) => id !== draggedDiv);
//     }

//     // Add the dragged div to the new container
//     updatedDivs[container].push(draggedDiv);

//     setDivs(updatedDivs);
//     setDraggedDiv(null);
//   };

//   const onDragOver = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="text-center font-sans">
//       <h1 className="text-2xl font-bold mb-6">Draggable Divs</h1>

//       <div className="flex justify-around mt-8">
//         {Object.keys(divs).map((container) => (
//           <div
//             key={container}
//             className="border-2 border-dashed border-gray-300 rounded-md p-4 min-w-[150px] min-h-[200px] bg-gray-100"
//             onDragOver={onDragOver}
//             onDrop={(e) => onDrop(e, container)}
//           >
//             <h2 className="text-lg font-semibold mb-4">{container}</h2>
//             {divs[container].map((divId) => (
//               <div
//                 key={divId}
//                 className="bg-blue-500 text-white rounded-md p-2 mb-2 cursor-grab text-center"
//                 draggable
//                 onDragStart={(e) => onDragStart(e, divId)}
//               >
//                 {divId}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
