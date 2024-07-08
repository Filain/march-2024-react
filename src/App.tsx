import {FC, PropsWithChildren} from "react";
import { Users } from "./Components/Users";

interface IProps extends PropsWithChildren{

}

const App: FC<IProps> = () => {
 return (
  <div>
   App
   <Users/>
  </div>
 );
};

export {App};
