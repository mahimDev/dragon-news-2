import { FaEye, FaRegStar, FaStar } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
const NewsCard = (props = {}) => {
    const { article } = props || {}
    const renderRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= Math.round(rating) ? (

                    <FaStar key={i} className="text-yellow-400" />
                ) : (
                    <FaRegStar key={i} className="text-gray-300" />
                )
            );
        }
        return stars
    }
    return (
        <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden mt-5">
            {/* Card Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                    <img
                        src={article.author.img}
                        alt={article.author.name}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700">
                            {article.author.name}
                        </h3>
                        <p className="text-xs text-gray-500">{article?.published_date}</p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                    <FiShare2 size={18} />
                </button>
            </div>

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
                <Link
                    to="/details"
                    className="text-blue-500 text-sm font-medium hover:underline mt-2 inline-block"
                >
                    Read More
                </Link>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200">
                <div className="flex items-center space-x-1">
                    {renderRating(article.rating.number)}
                    <span className="text-gray-600 text-sm ml-2">
                        {article.rating.number}
                    </span>
                </div>
                <div className="flex items-center text-gray-600">
                    <FaEye />
                    <span className="ml-1 text-sm">{article.total_view}</span>
                </div>
            </div>
        </div>

    );
};

export default NewsCard;