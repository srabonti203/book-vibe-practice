import { useState } from "react";
import BookContext from "../context/BookContext";
const BookProvider = ({ children }) => {
  const [storeBook, setStoreBook] = useState([]);
  const [wishList, setWishList] = useState([]);
  const handleReadBook = (expectedBook) => {
    console.log(expectedBook);
    const isExistBook = storeBook.find(
      (book) => book.bookId === expectedBook.bookId,
    );
    if (isExistBook) {
      alert(`${expectedBook.bookName} already exist in your read list.`);
    } else {
      setStoreBook([...storeBook, expectedBook]);
      alert(`${expectedBook.bookName} is added to read list.`);
    }
  };

  const handleWishList = (expectedBook) => {
    const isExistInReadList = storeBook.find(
      (book) => book.bookId == expectedBook.bookId,
    );
    if (isExistInReadList) {
      alert(`${expectedBook.bookName} already exist in your read list.`);
      return;
    }
    const isExistBook = wishList.find(
      (book) => book.bookId === expectedBook.bookId,
    );
    if (isExistBook) {
      alert(`${expectedBook.bookName} already exist in your wish list.`);
    } else {
      setWishList([...wishList, expectedBook]);
      alert(`${expectedBook.bookName} is added to wish list.`);
    }
  };
  const data = {
    storeBook,
    setStoreBook,
    handleReadBook,
    wishList,
    setWishList,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
