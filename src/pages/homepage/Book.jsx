import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
const Book = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="group w-full max-w[250px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Book Image */}
      <div className="bg-gray-50 p-4">
        <img
          src={book.image}
          alt={book.title}
          className="mx-auto h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="space-y-3 p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold leading-6 text-gray-900">
          {book.title}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-600">
          By : <span className="font-medium">{book.author}</span>
        </p>

        <hr />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{book.category}</span>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">{book.rating}</span>

            <button className="rounded-full p-1 transition hover:bg-gray-100">
              <CiStar className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
