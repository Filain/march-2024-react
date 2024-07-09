import { FC, PropsWithChildren } from "react";
import { Users } from "./components/Users";
import { Form } from "./components/Form/Form";
import { FormValidate } from "./components/Form/FormValidate";

interface IProps extends PropsWithChildren {

}

const App: FC<IProps> = () => {
    return (
        <div>
            <Form/>
            <hr/>
            <FormValidate/>
            <hr/>
            <Users />
        </div>
    );
};

export { App };
