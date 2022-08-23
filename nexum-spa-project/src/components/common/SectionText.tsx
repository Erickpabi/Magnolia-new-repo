import React, {useEffect, useState} from "react";
import { useRouter } from "next/router"
type Props = {
    readonly title: string,
    readonly content: string
    readonly hashLink: string
}
export const SectionText: React.FC<Props> = ({ title, content, hashLink}) => {
    const router = useRouter()

    const [sectionId, setSectionId] = useState("")

    /*useEffect(() => {
        const hashPath = router.asPath.split("#")[1] || ""
    }, [router.query])*/
    return (
        <div
            id={hashLink}
            className={
                router.asPath.split("#")[1] === hashLink
                    ? `border-solid border-2 rounded-sm border-slate-600 shadow-lg `
                    : `my-5 border-2 rounded-md shadow-lg`
            }
        >
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3">
                    <div
                        className="bg-slate-600 text-lg text-white pl-3 h-10 flex items-center font-bold"
                    >
                        {title}
                    </div>
                    <div className="p-3" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </div>
    );
}