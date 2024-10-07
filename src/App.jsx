import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddBook from "./pages/addBook";
import BookDetails from "./pages/bookDetails";
import HomePage from "./pages/homePage";

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
  ]);

  return <RouterProvider router={libraryRouter} />;
}

export default App;
