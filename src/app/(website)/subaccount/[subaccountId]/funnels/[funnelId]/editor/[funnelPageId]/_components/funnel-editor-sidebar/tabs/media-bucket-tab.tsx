"use client";
import MediaComponent from "@/components/media";
import { getMedia } from "@/lib/queries";
import { GetMediaFiles } from "@/types/types";
import React, { useEffect, useState } from "react";

type Props = {
  subaccountId: string;
};

const MediaBucketTab = (props: Props) => {
  const [data, setdata] = useState<GetMediaFiles>(null);
  // const data = null;
  useEffect(() => {
    const fetchData = async () => {
      const response = await getMedia(props.subaccountId);
      setdata(response);
    };
    fetchData();
  }, [props.subaccountId]);

  return (
    <div className="h-[900px] overflow-x-scroll box-1 p-4">
      <MediaComponent
        data={data}
        subaccountId={props.subaccountId}
      />
    </div>
  );
};

export default MediaBucketTab;
