import React from "react";
import { auth } from "../../../auth";

const page = async () => {
  const session = await auth();
  if (session?.user) {
    return (
      <div>{JSON.stringify(session.user)}</div>
    );
  }
};

export default page;
