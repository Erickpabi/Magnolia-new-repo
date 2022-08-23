import React, { useState, useEffect } from "react";
import Link from "next/link";
import type { PathInterface } from "@/types/page-helper-types";
import {NewsProps} from "@/types/delivery_endpoint_props";
import deliveryEndpointService from "@/services/delivery_endpoint_service";

type Props = {
  readonly image: any;
  readonly text: string;
};
export const Header: React.FC<Props> = ({ image, text }) => {
  const [pathLink, setPathLink] = useState("/homepage");
  const [navLinks, setNavLinks] = useState([]);

  const fecthNavLinks = async () => {
    const links = await deliveryEndpointService.getNavLinks();
    // @ts-ignore
    setNavLinks(links);
  };
  useEffect(() => {
    fecthNavLinks()
    // if (path) {
    //   setPathLink(path["@path"]);
    // }
  }, []);

  const activeLink = (link: string) => {
    return pathLink === link
      ? "text-white text-xl border-b-4 border-b-[#eeff00] mx-2"
      : "text-white text-xl mx-2";
  };
  return (
    <div className="relative">
      <div className="max-w-full mx-auto bg-blue-500 px-4 sm:px-6 sticky md:sticky top-0 z-40">
        <div>logo</div>
        <div className="flex justify-center py-5">
          <div className="flex justify-between">
            {navLinks.length && navLinks.map(link => <div className={activeLink(link['@path'])}>
              {link['show'] === 'true' && (<Link href={`/${link['@name']}`}>{link['title']}</Link>)}
            </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};
