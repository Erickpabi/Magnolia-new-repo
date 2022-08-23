import React, { useState, useEffect } from "react";
import { PressReleaseCard } from "./PressReleaseCard";
import deliveryEndpointService from "@/services/delivery_endpoint_service";
import type { PressReleaseProps } from "@/types/delivery_endpoint_props";

type Props = {
  readonly image: any;
  readonly text: string;
};
const PressReleaseList: React.FC<Props> = (props) => {
  const [pressData, setPressData] = useState<PressReleaseProps[]>([]);

  const getPressData = async () => {
    const data = await deliveryEndpointService.getPressData();
    setPressData(data);
  };

  useEffect(() => {
    getPressData();
  }, []);

  return (
    <div className="">
      <div className="mb-5 mt-10">
        <div className="font-bold text-2xl block">
          {props.text ? props.text : ""}
        </div>
      </div>
      {pressData &&
        pressData.map((data, index) => {
          return data["title"] ? <PressReleaseCard pressData={data}  key={"press-card-"+index}/> : null;
        })}
    </div>
  );
};

export default PressReleaseList;
