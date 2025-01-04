"use client"

const findAndRemoveObjectById = (objArray: EditorElement[], targetId: string): EditorElement | null => {
  for (let i = 0; i < objArray.length; i++) {
    const obj = objArray[i];
    if (obj.id === targetId) {
      objArray.splice(i, 1);
      return obj;
    }
    if (obj.content && Array.isArray(obj.content)) {
      const result = findAndRemoveObjectById(obj.content, targetId);
      if (result) return result;
    }
  }
  return null;
};

// Recursive function to search for the object with the given ID and add a new object to its content array
const findAndAddObjectById = (objArray: EditorElement[], targetId: string, newObj: EditorElement): boolean => {
  for (const obj of objArray) {
    if (obj.id === targetId) {
      if (!Array.isArray(obj.content)) obj.content = [];
      obj.content.push(newObj);
      return true;
    }
    if (obj.content && Array.isArray(obj.content)) {
      const result = findAndAddObjectById(obj.content, targetId, newObj);
      if (result) return result;
    }
  }
  return false;
};

export const moveObject = (data: EditorElement[], draggableId: string, perentId: string) => {
  console.log("hhhh");

  const objToMove = findAndRemoveObjectById(data, draggableId);
  if (objToMove) {
    findAndAddObjectById(data, perentId, objToMove);
  }
};
