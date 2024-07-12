import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";
import {UserPosts} from "./components/UserPosts/UserPosts";

const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <Users/>},
            {path: 'posts', element: <Posts/>},
            {path: 'comments', element: <Comments/>},
            {path: 'users/:id/posts',element: <UserPosts/>}
        ]
    }
])

export {router}