
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../components/NewsCard/NewsCard";

const Categories = () => {
    const { data } = useLoaderData();
    return (
        <div>
            <h1 className="text-xl font-bold mb-5">News</h1>
            {
                data.map(item => <NewsCard key={item._id} article={item}></NewsCard>)
            }
        </div>
    );
};

export default Categories;