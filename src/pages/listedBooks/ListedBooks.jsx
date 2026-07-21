import { useContext } from "react";
import BookContext from "../../context/BookContext";

const ListedBooks = () => {
  const { storeBook, wishList } = useContext(BookContext);
  console.log(storeBook, wishList);
  return (
    <div>
      <div>read:{storeBook.length}</div>
      <div>wishlist:{wishList.length}</div>
    </div>
  );
};

export default ListedBooks;
