import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavBer = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    console.log(categories)
    return (
        <div>
            <button>All Categories({categories.length})</button>
            <div className="flex flex-col border">
                {
                    categories.map(category =>
                        <NavLink
                            to={`/categories/${category.category_id}`}
                            className="border text-left py-2 pl-4"
                            key={category.category_id}
                        >{category.category_name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavBer;