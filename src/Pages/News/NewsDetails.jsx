import { Link, useLoaderData } from "react-router-dom";
import Header from "../../components/header/Header";
import RightNavBer from "../../components/RightNavber/RightNavBer";

const NewsDetails = () => {
    const data = useLoaderData()
    const article = data.data[0]
    return (
        <div>
            <header><Header></Header></header>
            <main className="w-11/12 mx-auto grid grid-cols-12">
                <section className="col-span-9">
                    <h1 className="text-xl font-bold">Dragon News</h1>
                    <div>
                        <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden mt-5">
                            {/* Thumbnail */}
                            <img
                                src={article.thumbnail_url}
                                alt={article.title}
                                className="w-full h-72 object-cover"
                            />

                            {/* Card Content */}
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-gray-800">{article.title}</h2>
                                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                                    {article.details}
                                </p>

                            </div>

                            {/* Card Footer */}
                            <Link
                                to={`/categories/${article.category_id}`}
                                className="py-2 px-5 bg-red-600 text-white font-bold">👈 All news in this category</Link>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavBer></RightNavBer>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;