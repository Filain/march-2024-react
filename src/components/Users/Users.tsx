import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../servises/userService";
import {User} from "./User/User";
import {postService} from "../../servises/postService";
import {IPost} from "../../interfaces/postInterface";
import {Posts} from "./Posts/Posts";

import css from "./Users.module.css"

interface IProps extends PropsWithChildren {

}

const Users: FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        userService.gerAll().then((res) => setUsers(res.data.users))
    }, []);

    const getPostsOfUser = (id: string) => {
        postService.getByUserId(id).then((res) => setPosts(res.data.posts))
    }
    console.log(getPostsOfUser)

    return (
        <div className={css.container}>
            <div className={css.users}>
                {users.map((user) => <User key={user.id} item={user} getPostsOfUser={getPostsOfUser}/>)}
            </div>
            <hr/>
            <div className={css.posts}>
                {posts.length ?
                    posts.map((item) => <Posts key={item.id} item={item}/>)
                    : <div>User have no posts</div>}
            </div>
        </div>
    );
};

export {Users};
