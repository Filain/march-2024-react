import {FC, PropsWithChildren} from "react";
import {Outlet} from "react-router-dom";
import {Headers} from "../components/Header/Headers";

interface IProps extends PropsWithChildren {

}

const MainLayout: FC<IProps> = () => {
    return (
        <div>
            <Headers/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
