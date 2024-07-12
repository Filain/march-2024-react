import {FC, PropsWithChildren} from "react";
import {IPost} from "../../../inerfaces/postInterface";
import css from "./post.module.css"

interface IProps extends PropsWithChildren{
post: IPost
}

const Post: FC<IProps> = ({post}) => {
 const {id,userId, title,body} =post
    return (
  <div className={css.wrap}>
      <h2>Id :{id}</h2>
      <p>User Id: {userId}</p>
      <p>Title: {title}</p>
      <p>Body: {body}</p>

  </div>
 );
};

export {Post};
