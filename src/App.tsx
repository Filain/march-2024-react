import {FC, PropsWithChildren} from "react";
import {Users} from "./components/Users/Users";

interface IProps extends PropsWithChildren{

}

const App: FC<IProps> = () => {
 return (
  <div>
   <Users/>
  </div>
 );
};

export {App};
