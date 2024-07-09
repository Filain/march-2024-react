import { FC, PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import userValidator from "../../validators/user.validator"



interface IProps extends PropsWithChildren {

}

type IFormType = {
    name: string,
    age: number,
    password: string
}

const FormJoiValidate: FC<IProps> = () => {
    const [formData, setFormData] = useState<IFormType>({
        name: '',
        age: 0,
        password: ''
    })


    const { formState: { errors, isValid }, register, handleSubmit, reset } = useForm<IFormType>({
        mode: 'all', resolver: joiResolver(userValidator)
    });
    const handleFunction = async (data: IFormType) => {
        console.log(data);
        setFormData(data)
        reset()


    }
    return (
        <div>
            {errors.name && <div>username errors: {errors.name?.message}</div>}
            {errors.password && <div>password errors: {errors.password?.message}</div>}
            {errors.age && <div>age errors: {errors.age?.message}</div>}

            <form onSubmit={handleSubmit(handleFunction)}>

                <input type="text" {...register('name')} placeholder="name" />
                <input type="number" {...register('age', {
                    required: true, valueAsNumber: true,
                    min: { value: 1, message: 'age too small' },
                    max: { value: 132, message: 'age too big' }
                })} placeholder="age" />
                <input type="password" {...register('password')} placeholder="password" />
                <button disabled={!isValid}>press</button>
            </form>
            {formData.age === 0 || <div>age:{formData.age}  name:{formData.name}  password:{formData.password}</div>}

        </div>
    );
};

export { FormJoiValidate };