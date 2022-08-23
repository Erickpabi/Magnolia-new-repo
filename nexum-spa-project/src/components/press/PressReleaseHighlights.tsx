import React, { useState, useEffect } from "react";
import axios from "axios";
import { PressCard } from "@/components/press/PressCard";
import deliveryEndpointService from "@/services/delivery_endpoint_service";
import type { PressReleaseProps } from "@/types/delivery_endpoint_props";

type Props = {
  readonly image: any;
  readonly text: string;
};
const PressReleaseHighlights: React.FC<Props> = (props) => {
  const [pressData, setPressData] = useState<PressReleaseProps[]>([]);
  const getPressData = async () => {
    const data = await deliveryEndpointService.getPressHiglightsData()
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
      <div className="grid md:grid-cols-4 gap-auto">
        {pressData &&
          pressData.map((data) => {
              console.log('data', data)
            return data["title"] ? <PressCard key={data.id} pressData={data} /> : null;
          })}
      </div>
    </div>
  );
};

export default PressReleaseHighlights;
