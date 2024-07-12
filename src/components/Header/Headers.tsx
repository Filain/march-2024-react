import {FC, PropsWithChildren} from "react";
import css from "./header.module.css"
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren{

}

const Headers: FC<IProps> = () => {
 return (
  <div className={css.header}>

      <NavLink to={'users'}> users</NavLink>
      <NavLink to={'comments'}> comments</NavLink>
      <NavLink to={'posts'} state={{my:'myState'}}>posts</NavLink>

  </div>
 );
};

export {Headers};
