import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorpage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
import Book from "../pages/homepage/Book";
import ListedBooks from "../pages/listedBooks/ListedBooks";
import PagesToRead from "../pages/pagesToRead/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/books",
        element: <Book></Book>,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/page-to-read",
        element: <PagesToRead></PagesToRead>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
