import React, {useEffect, useState} from "react";
import Link from "next/link";
import { ChevronRight } from "../ChevronRight";
import envConstants from "@/constants/env_constants";
import type {ImageLink} from "@/types/page-helper-types";

export const PressReleaseCard = (props: any) => {
    const [pressData, setPressData] = useState<any>(props.pressData)
    const [imageLink, setImageLink] = useState<ImageLink>();
    const getImageLink = () => {
        setImageLink(props?.pressData.imageLink)
    }

    useEffect(() => {
        getImageLink()
    }, [])


    return (
        <Link href={`/press-release/press-details?id=${pressData.id}`} as={`/press-release/press-details?id=${pressData.id}`} passHref>
            <div className="border-b-4 border-b-blue-200 mb-10 cursor-pointer" key={pressData.id}>
                <div className="grid md:grid-cols-12 grid-cols-1 gap-4 p-3">
                    <div className='flex justify-center md:col-span-3'>
                        <img className='object-cover rounded-lg w-full' style={{ height: "120px" }} src={`${envConstants.mgnlHost}${imageLink?.renditions?.["350x200"].link}`} />
                    </div>
                    <div className='md:col-span-8'>
                        <p className="text-[30px] font-bold text-slate-600 w-full overflow-hidden whitespace-nowrap text-ellipsis">{pressData.title}</p>
                        <span className='bg-slate-200 name-badge px-4 py-1 rounded-xl'> {pressData.organization}</span>
                        <p className='text-[15px] font-bold text-amber-900 my-1'>{pressData.createdAt}</p>
                        <p className='w-full overflow-hidden whitespace-nowrap text-ellipsis' dangerouslySetInnerHTML={{ __html: pressData.content && pressData.content.length > 100 ? pressData.content.slice(0, 124) : pressData.content }}>
                        </p>
                    </div>

                    <div className='md:col-span-1 hidden md:flex justify-end items-center'>
                        <div className="w-10">
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
