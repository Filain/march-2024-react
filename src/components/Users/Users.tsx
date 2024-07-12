import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IUser} from "../../inerfaces/userInterface";
import {userService} from "../../services/userService";
import {User} from "./User/User";
import css from './users.module.css'

interface IProps extends PropsWithChildren{

}

const Users: FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAll().then((res)=>setUsers(res.data))
    }, []);


    return (
  <div className={css.wrap} >
      {users.map((user)=><User key={user.id} user={user}/>)}
  </div>
 );
};

export {Users};
