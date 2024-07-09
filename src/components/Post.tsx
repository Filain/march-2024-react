import { FC } from "react"
import { PropsWithChildren } from "react";
import { IPost } from "../interfaces/postInterface";

interface IProps extends PropsWithChildren {
    post: IPost
}

const Post: FC<IProps> = ({ post }) => {
    const { userId, body, title, id } = post
    return (
        <div>
            <p>userId:{userId}</p>
            <p>body:{body}</p>
            <p>title:{title}</p>
            <p>id:{id}</p>
        </div>
    )
}

export { Post }