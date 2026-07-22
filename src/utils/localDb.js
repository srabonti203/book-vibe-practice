// local storage for readlist
const getReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readlist");
  //   console.log(allReadList, "REad list from local DB");
  if (allReadList) return JSON.parse(allReadList);
  return [];
};
const addReadListToLocalDB = (book) => {
  const allBooks = getReadListFromLocalDB();
  const isExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isExist) {
    allBooks.push(book);
    localStorage.setItem("readlist", JSON.stringify(allBooks));
  }
};

// local storage for wishlist
const getWishListFromLocalDB = () => {
  const allWishList = localStorage.getItem("wishlist");
  //   console.log(allReadList, "REad list from local DB");
  if (allWishList) return JSON.parse(allWishList);
  return [];
};
const addWishListToLocalDB = (book) => {
  const allBooks = getWishListFromLocalDB();
  const isExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isExist) {
    allBooks.push(book);
    localStorage.setItem("wishlist", JSON.stringify(allBooks));
  }
};

export {
  getReadListFromLocalDB,
  addReadListToLocalDB,
  getWishListFromLocalDB,
  addWishListToLocalDB,
};
