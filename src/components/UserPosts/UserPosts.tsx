import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IPost} from "../../inerfaces/postInterface";
import {postService} from "../../services/postService";
import {useParams} from "react-router-dom";

import css from "./userPosts.module.css"
import {Post} from "../Posts/Post/Post";

interface IProps extends PropsWithChildren{

}

const UserPosts: FC<IProps> = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const {id} =useParams<{id:string}>()
    useEffect(() => {
        if(id!==undefined){
            postService.getPostById(id).then((res)=>setPosts(res.data))
        }

    }, [id]);
    console.log(posts)
    return (
  <div className={css.wrap}>

      {posts.map((post)=><Post post={post} key={post.id}/> )}
  </div>
 );
};

export {UserPosts};
