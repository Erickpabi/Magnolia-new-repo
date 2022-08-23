import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  readonly address: string;
  readonly city: string;
  readonly country: string;
  readonly telephone: string;
  readonly email: string;
};

export const Contact: React.FC<Props> = ({
  address,
  city,
  country,
  email,
  telephone,
}) => {
  return (
    <div className="">
      <div className="flex flex-row mb-4">
        <div className="md:basis-1/4 basis-1/3 mt-2">
          <FontAwesomeIcon
            className=" place-self-send"
            fontSize={30}
            icon={faLocationDot}
          />
        </div>
        <div className="text-bold">
          <div>{address}</div>
          <div>
            {city}, {country}
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-2 text-left">
        <div className="md:basis-1/4 basis-1/3">
          <FontAwesomeIcon fontSize={20} icon={faPhone} />
        </div>
        <div>
          <span className="bold">{telephone}</span>
        </div>
      </div>
      <div className="flex flex-row text-left">
        <div className="md:basis-1/4 basis-1/3">
          <FontAwesomeIcon fontSize={20} icon={faEnvelope} />
        </div>
        <div>
          <span className="bold">{email}</span>
        </div>
      </div>
    </div>
  );
};
