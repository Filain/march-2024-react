import { FC, PropsWithChildren, useEffect, useState } from "react";
import { IUser } from "../interfaces/userInterface";
import { userService } from "../services/userService";

interface IProps extends PropsWithChildren {
    user: IUser
    hanlePost:(id:string)=>void
}

const User: FC<IProps> = ({ user ,hanlePost}) => {
    const { id, name, username, email } = user


    return (
        <div>
            <p>id:{id}</p>
            <p>name: {name}</p>
            <p>UserName: {username}</p>
            <p>email: {email}</p>
            <button onClick={()=>hanlePost(id.toString())}>Posts</button>
            <hr/>
        </div>
    );
};

export { User };