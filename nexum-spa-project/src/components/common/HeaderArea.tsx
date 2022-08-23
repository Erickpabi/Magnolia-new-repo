import { EditableArea } from "@magnolia/react-editor";
import type { AuthorPageProps } from "@/types/page-helper-types";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import deliveryEndpointService from "@/services/delivery_endpoint_service";
import {useRouter} from "next/router";

const HeaderArea: React.FC<AuthorPageProps> = (props) => {
    const [pathLink, setPathLink] = useState('');
    const [navLinks, setNavLinks] = useState([]);
    const { asPath } = useRouter()
    const fecthNavLinks = async () => {
        const links = await deliveryEndpointService.getNavLinks();
        setPathLink(links[0]['@name'])
        console.log('asPath', asPath)
        // @ts-ignore
        setNavLinks(links);
    };
    useEffect(() => {
        fecthNavLinks()
    }, []);

    const activeLink = (link: string) => {
        console.log('linl', link)
        return asPath === `/${link}`
            ? "text-white text-xl border-b-4 border-b-[#eeff00] mx-2 py-5"
            : "text-white text-xl mx-2 py-5";
    };
    // @ts-ignore
    return (
        <div className="relative bg-blue-500">
            <div className="max-w-full bg-blue-500 px-4 sm:px-6 sticky md:sticky top-0 z-40">
            <div className="flex justify-between items-center">
                <div className="px-4">
                    {props["pageAreaItems"] && (
                        <EditableArea
                            key="Area"
                            content={props["pageAreaItems"]}
                        />
                    )}
                </div>
                <div className="">
                    <div className="flex justify-space-around">
                        {navLinks.length && navLinks.map(link => <div key={link['@id']} className={activeLink(link['@name'])}>
                            {link['show'] === 'true' && (<Link href={`/${link['@name']}`}>{link['title']}</Link>)}
                        </div>)
                        }
                    </div>
                </div>
                <div></div>

            </div>
            </div>
        </div>
    );
};

export default HeaderArea;
