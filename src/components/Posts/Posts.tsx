import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IPost} from "../../inerfaces/postInterface";
import {postService} from "../../services/postService";
import css from "./posts.module.css"
import {Post} from "./Post/Post";
import {useLocation} from "react-router-dom";

interface IProps extends PropsWithChildren{

}

const Posts: FC<IProps> = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const {state}=useLocation()
    useEffect(() => {
        postService.getAll().then((res)=>setPosts(res.data))
    }, []);
    console.log(state)
    return (
  <div className={css.wrap}>
      {posts.map((post)=><Post key={post.id} post={post}/>)}
  </div>
 );
};

export {Posts};
