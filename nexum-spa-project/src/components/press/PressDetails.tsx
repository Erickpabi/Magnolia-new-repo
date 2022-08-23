import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NewsHeading } from "@/components/newsDetails/NewsTitle";
import { DatePosted } from "@/components/newsDetails/DatePosted";
import { NewsImage } from "@/components/newsDetails/NewsImage";
import { NewsAuthor } from "@/components/newsDetails/NewsAuthor";
import { NewsContent } from "@/components/newsDetails/NewsContent";
import type { PressReleaseProps } from "@/types/delivery_endpoint_props";
import deliveryEndpointService from "@/services/delivery_endpoint_service";
import type {ImageLink} from "@/types/page-helper-types";
import envConstants from "@/constants/env_constants";

export const SinglePressPage = () => {
  const router = useRouter();
  const id = router.query["id"] as string;
  const url: string | undefined = process.env["NEXT_PUBLIC_MGNL_HOST"];

  const [singlePressData, setSinglePressData] =
    useState<PressReleaseProps | null>();
  const [imageLink, setImageLink] = useState<ImageLink>();

  const getPressData = async () => {
    const nexumPress = await deliveryEndpointService.getSinglePressData(id);
    setSinglePressData(nexumPress);
    setImageLink(nexumPress?.imageLink[0])
  };



  useEffect(() => {
    getPressData()
  }, []);

  return (
    <div>
      <div className="container">
        {!singlePressData ? (
          <p>Loading</p>
        ) : (
          <div className="grid grid-cols-1 ipad-pro:gap-4 mb-10 mx-4 ipad-pro:grid-cols-3 ipad:grid-cols-1 ipad:gap-0">
            <div className="mt-14">
              <NewsHeading title={singlePressData.title} />
              <DatePosted date={singlePressData.date} />
              <div>
                <NewsImage image={`${envConstants.mgnlHost}${imageLink?.renditions?.["1200x500"]?.link}`} />
              </div>
              <NewsAuthor author={singlePressData.organization} />
              <div className="w-[30%] mx-[35%] mt-[15px] bg-black">
                <hr className="bg-black" />
              </div>
              <NewsContent content={singlePressData.content} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
