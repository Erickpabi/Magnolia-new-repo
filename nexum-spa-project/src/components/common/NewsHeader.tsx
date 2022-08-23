import React, {useEffect, useState} from "react";
import NewsHeaderItem from "./NewsHeaderItem";
import deliveryEndpointService from "@/services/delivery_endpoint_service";

interface NewsHeaderProps {
  callback: (title: string) => void;
}
function NewsHeader({ callback }: NewsHeaderProps) {
    const [categories, setCategories] = useState([])
    const getCategoriesData = async () => {
        const newsCategories = await deliveryEndpointService.getCategories();
        setCategories(newsCategories);
    };

    useEffect(() => {
        getCategoriesData();
    }, []);

    return (
    <div className="news-header">
        <NewsHeaderItem callback={callback} title="see all" id={'see all'} />
        {
            categories && categories.map((cat) =>
                <NewsHeaderItem callback={callback} title={cat['@name']} id={cat['@id']} />
            )
        }
    </div>
  );
}

export default NewsHeader;
