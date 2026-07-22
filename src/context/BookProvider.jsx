import { useState } from "react";
import BookContext from "../context/BookContext";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  addWishListToLocalDB,
  getReadListFromLocalDB,
  getWishListFromLocalDB,
} from "../utils/localDb";

const BookProvider = ({ children }) => {
  const [storeBook, setStoreBook] = useState(() => getReadListFromLocalDB());
  const [wishList, setWishList] = useState(() => getWishListFromLocalDB());

  // useEffect(() => {
  //   const getReadListFromLocalDB = getReadListFromLocalDB();
  //   console.log(getReadListFromLocalDB);
  // }, []);

  const handleReadBook = (expectedBook) => {
    addReadListToLocalDB(expectedBook);

    console.log(expectedBook);
    const isExistInWishList = wishList.find(
      (book) => book.bookId == expectedBook.bookId,
    );
    if (isExistInWishList) {
      toast.error(`${expectedBook.bookName} already exist in your wish list.`);
      return;
    }
    const isExistBook = storeBook.find(
      (book) => book.bookId === expectedBook.bookId,
    );
    if (isExistBook) {
      toast.error(`${expectedBook.bookName} already exist in your read list.`);
    } else {
      setStoreBook([...storeBook, expectedBook]);
      toast.success(`${expectedBook.bookName} is added to read list.`);
    }
  };

  const handleWishList = (expectedBook) => {
    addWishListToLocalDB(expectedBook);

    const isExistInReadList = storeBook.find(
      (book) => book.bookId == expectedBook.bookId,
    );
    if (isExistInReadList) {
      toast.error(`${expectedBook.bookName} already exist in your read list.`);
      return;
    }
    const isExistBook = wishList.find(
      (book) => book.bookId === expectedBook.bookId,
    );
    if (isExistBook) {
      toast.error(`${expectedBook.bookName} already exist in your wish list.`);
    } else {
      setWishList([...wishList, expectedBook]);
      toast.success(`${expectedBook.bookName} is added to wish list.`);
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
