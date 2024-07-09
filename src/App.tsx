import { FC, PropsWithChildren } from "react";
import { Users } from "./components/Users";
import { Form } from "./components/Form/Form";

interface IProps extends PropsWithChildren {

}

const App: FC<IProps> = () => {
    return (
        <div>
            <Form/>
            <hr/>
            <hr/>
            <Users />
        </div>
    );
};

export { App };
