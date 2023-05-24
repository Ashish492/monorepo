import { RouteObject, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import { AddPost, EditPost, PostList } from "../app/features/post"
import SinglePost from "../app/features/post/SinglePost"
import { ErrorElement } from "../component"
import { UserList } from "app/features/user"
import UserPost from "pages/UserPost"
const children: RouteObject[] = [
  {
    path: "addPost",
    element: <AddPost />,
  },
  {
    path: "posts",
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: ":id",
        element: <SinglePost />,
      },
      {
        path: "edit/:id",
        element: <EditPost />,
      },
    ],
  },
  {
    path: "users",
    children: [
      {
        index: true,
        element: <UserList />,
      },
      {
        path: ":id",
        element: <UserPost />,
      },
    ],
  },
]
const route: RouteObject = {
  path: "/",
  element: <Layout />,
  errorElement: <ErrorElement />,
  children,
}
export const router = createBrowserRouter([route])
