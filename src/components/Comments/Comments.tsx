import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IComment} from "../../inerfaces/comInterface";
import {commentService} from "../../services/commentService";
import {Comment} from "./Comment/Comment";
import css from "./comments.module.css"

interface IProps extends PropsWithChildren{

}

const Comments: FC<IProps> = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        commentService.getAll().then((res)=>setComments(res.data))
    }, []);
    console.log(comments)
    return (
  <div className={css.wrap}>
      {comments.map((comment)=><Comment key={comment.id} comment={comment}/>)}
  </div>
 );
};

export {Comments};
