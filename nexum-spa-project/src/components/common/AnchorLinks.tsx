import React from "react";
import NextLink from "next/link"
import type {Url} from "url";
type Props = {
    readonly title: string
    readonly hashLink: string
}

const AnchorLinks: React.FC<Props> = ({title, hashLink}) => {
    let div = <div>
        <NextLink href={{hash: hashLink}}>
            <a>
                <div className="flex p-5">
                    <div>
                        <div className=" pl-3 font-medium text-white">
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>
            </a>
        </NextLink>
    </div>;
    return div;
};

export default AnchorLinks;