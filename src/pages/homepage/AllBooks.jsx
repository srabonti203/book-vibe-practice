import { use } from "react";
import Book from "./Book";

const bookPromise = fetch("/data.json").then((res) => res.json());
const AllBooks = () => {
  const books = use(bookPromise);
  console.log(books);
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="font-bold text-2xl">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {books.map((book) => {
          return <Book key={book.bookId} book={book}></Book>;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
