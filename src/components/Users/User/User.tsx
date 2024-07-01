import {FC, PropsWithChildren} from "react";
import {IUser} from "../../../interfaces/userInterface";

import css from "./User.module.css"

interface IProps extends PropsWithChildren{
    item: IUser;
    getPostsOfUser: (id: string) => void;
}

const User: FC<IProps> = ({ item, getPostsOfUser }) => {
    const { id, firstName, lastName, email } = item;
 return (
     <div className={css.container}>
         <p>User id: {id}</p>
         <p>Name: {firstName}</p>
         <p>Last name: {lastName}</p>
         <p>Email: {email}</p>
         <div className={css.button}>
         <button onClick={() => getPostsOfUser(id.toString())}>Get user posts</button></div>
     </div>
 );
};

export {User};
