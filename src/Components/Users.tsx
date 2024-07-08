import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IUser} from "../interfaces/userInterface";
import {userService} from "../services/userService";





interface IProps extends PropsWithChildren {

}

const Users: FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAll().then((res)=>setUsers(res.data.users))
    }, []);

console.log(users);

    return (
       <div>

       </div>
    );
};

export {Users};