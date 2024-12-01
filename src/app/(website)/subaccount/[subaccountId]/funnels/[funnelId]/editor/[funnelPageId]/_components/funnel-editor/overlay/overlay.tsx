import React from "react";
type Props = {
  isOpen: boolean;
  onClose: string;
  children: React.ReactNode;
};

const overlay = ({ isOpen, onClose, children }: Props) => {
  return <>{isOpen ? <div></div> : <></>}</>;
};

export default overlay;
