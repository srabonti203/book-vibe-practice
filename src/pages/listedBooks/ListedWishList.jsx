import { useContext } from "react";
import BookContext from "../../context/BookContext";
import Book from "../homepage/Book";

const ListedWishList = () => {
  const { wishList } = useContext(BookContext);
  console.log(wishList);
  if (wishList.length == 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-base-200 mt-5 font-semibold text-3xl text-gray-600">
        No Wished Books Added
      </div>
    );
  } else {
    return (
      <div>
        {wishList.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    );
  }
};

export default ListedWishList;
