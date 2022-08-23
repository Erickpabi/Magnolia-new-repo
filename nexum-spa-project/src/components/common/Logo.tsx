import React from "react";
import Link from "next/link";
import envConstants from "@/constants/env_constants";

type LogoProps = {
  readonly link: string
    readonly image: any
}
export const Logo: React.FC<LogoProps> = ({ link, image}) => {
    const url = envConstants.authorInstance
    console.log(url,image['@link'])
    return (
    <div className="">
        <Link href={'/'}>
            <img alt="logo" className="w-12 h-10 h-full object-cover rounded-lg"
                 src={envConstants.mgnlHost + image["@link"]} />
        </Link>
    </div>
  );
}

