import {FC, PropsWithChildren} from "react";
import {IUser} from "../../../inerfaces/userInterface";
import css from "./user.module.css"
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    user: IUser

}

const User: FC<IProps> = ({user}) => {
    const navigate = useNavigate()
    const {id, name, username, phone} = user
    return (
        <div className={css.wrap} onClick={()=>navigate(`${id}/posts`)}>
            <h2>Id: {id}</h2>
            <p><span>Name:</span> {name}</p>
            <p><span>User Name:</span>  {username}</p>
            <p><span>Phone:</span>  {phone}</p>
        </div>
    );
};

export {User};
