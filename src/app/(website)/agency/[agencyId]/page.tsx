import React from "react";

const page = ({params}: {params: {agencyId: string}}) => {
  return <div className="relative h-full">{params.agencyId}</div>;
};

export default page;
