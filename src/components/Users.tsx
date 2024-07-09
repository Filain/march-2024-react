import { FC, PropsWithChildren, useEffect, useState } from "react";
import { IUser } from "../interfaces/userInterface";
import { userService } from "../services/userService";
import { User } from "./User"
import { IPost } from "../interfaces/postInterface";
import { postService } from "../services/postService";
import {Post} from "../components/Post"

interface IProps extends PropsWithChildren {
    
}

const Users: FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [posts, setPosts]=useState<IPost[]>([])

    useEffect(() => {
        userService.getAll().then((res) => setUsers(res.data))
    }, []);

    const hanlePost =(id:string)=>{
        postService.getByUserId(id).then((res)=>setPosts(res.data))
    }

    console.log(posts)
    
    return (
        <div>
        
            {users.map((user)=><User key={user.id} user={user} hanlePost={hanlePost} />) }
       <hr/>
       {posts.map((post)=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export { Users };