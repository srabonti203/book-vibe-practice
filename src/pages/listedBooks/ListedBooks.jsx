import { useContext } from "react";
import BookContext from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "./ListedReadList";
import ListedWishList from "./ListedWishList";

const ListedBooks = () => {
  const { storeBook, wishList } = useContext(BookContext);
  console.log(storeBook, wishList);
  return (
    <div>
      {/* shorted drop down */}
      <div className="dropdown flex justify-center items-center m-6">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm m-4"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      {/* read and wish list tabs */}
      <div>
        <Tabs>
          <TabList>
            <Tab>Read List ({storeBook.length})</Tab>
            <Tab>Wish List ({wishList.length})</Tab>
          </TabList>

          <TabPanel>
            <ListedReadList></ListedReadList>
          </TabPanel>
          <TabPanel>
            <ListedWishList></ListedWishList>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
