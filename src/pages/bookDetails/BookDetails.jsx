import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  console.log(books);
  // console.log(id);
  const expectedBook = books.find((book) => book.bookId == id);
  console.log(expectedBook);
  return (
    <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Left */}
        <div className="rounded-2xl bg-gray-100 p-8">
          <img
            src={expectedBook.image}
            alt={expectedBook.bookName}
            className="mx-auto h[500px] w-auto object-contain"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">{expectedBook.bookName}</h1>

          <p className="mt-2 text-gray-600">
            By : <span className="font-medium">{expectedBook.author}</span>
          </p>

          <hr className="my-5" />

          <p className="text-lg text-gray-600">{expectedBook.category}</p>

          <hr className="my-5" />

          {/* Review */}
          <div>
            <span className="font-bold">Review :</span>

            <span className="ml-2 leading-8 text-gray-600">
              {expectedBook.review}
            </span>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="font-bold">Tag</span>

            {expectedBook.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          <hr className="my-6" />

          {/* Information */}
          <div className="space-y-4 text-sm md:text-base">
            <div className="grid grid-cols-2">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-bold">{expectedBook.totalPages}</span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-gray-500">Publisher:</span>
              <span className="font-bold">{expectedBook.publisher}</span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-bold">{expectedBook.yearOfPublishing}</span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-gray-500">Rating:</span>
              <span className="font-bold">{expectedBook.rating}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-lg border border-gray-300 px-8 py-3 font-semibold transition hover:bg-gray-100">
              Read
            </button>

            <button className="rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white transition hover:bg-sky-600">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
