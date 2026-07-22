import { useContext, useState } from "react";
import BookContext from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "./ListedReadList";
import ListedWishList from "./ListedWishList";

const ListedBooks = () => {
  const [sortType, setSortType] = useState("");
  const { storeBook, wishList } = useContext(BookContext);
  // console.log(storeBook, wishList);
  return (
    <div>
      {/* shorted drop down */}
      <div className="flex justify-center items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By {sortType}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      {/* read and wish list tabs */}
      <div>
        <Tabs>
          <TabList>
            <Tab>Read List ({storeBook.length})</Tab>
            <Tab>Wish List ({wishList.length})</Tab>
          </TabList>

          <TabPanel>
            <ListedReadList sortType={sortType}></ListedReadList>
          </TabPanel>
          <TabPanel>
            <ListedWishList sortType={sortType}></ListedWishList>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
