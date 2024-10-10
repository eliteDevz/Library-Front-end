import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddBook from "./pages/addBook";
import BookDetails from "./pages/bookDetails";
import HomePage from "./pages/homePage";
import Library from './pages/library/index.jsx'
import Categories from './pages/categories/index.jsx'
import Authors from './pages/authors/index.jsx'

function App() {
  const libraryRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/add-new",
      element: <AddBook />,
    },
    {
      path: "/books/:id",
      element: <BookDetails />,
    },
    {
      path: "/all-books",
      element: <Library />,
    },
    {
      path: "/book-categories",
      element: <Categories />,
    },
    {
      path: "/book-authors",
      element: <Authors />,
    },
  ]);

  return <RouterProvider router={libraryRouter} />;
}

export default App;
