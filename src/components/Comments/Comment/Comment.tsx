import {FC, PropsWithChildren} from "react";
import css from "./comment.module.css"
import {IComment} from "../../../inerfaces/comInterface";

interface IProps extends PropsWithChildren {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, name, postId, email, body} = comment
    return (
        <div className={css.wrap}>
            <h2>Id: {id}</h2>
            <p>name: {name}</p>

        </div>
    );
};

export {Comment};
