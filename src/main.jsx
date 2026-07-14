import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: ,
  },

  {
    path: "/about",
    element: <div className="text-4xl text-amber-500 text-center">About Page</div>
  },

  {
    path: "/products",
    element : <div className="text-4xl text-red-500 text-center">Products Page</div>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
   </StrictMode>
);
