import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddBook from "./pages/addBook";
import BookDetails from "./pages/bookDetails";
import HomePage from "./pages/homePage";
import Library from './pages/library/index.jsx'

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
  ]);

  return <RouterProvider router={libraryRouter} />;
}

export default App;
