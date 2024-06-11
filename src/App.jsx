import React from "react";
import ErrorPage from "./components/ErrorPage";
import Posts, { postsLoader } from "./pages/Posts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/layout/Root";
import PostDetails, { postDetailsLoader } from "./pages/PostDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "/posts/:postId",
          element: <PostDetails />,
          loader: postDetailsLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
