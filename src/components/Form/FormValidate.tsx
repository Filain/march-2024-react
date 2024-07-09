import { FC, PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";



interface IProps extends PropsWithChildren {

}

type IFormType = {
    name: string,
    age: number,
    password: string
}

const FormValidate: FC<IProps> = () => {
    const [formData, setFormData] = useState<IFormType>({
        name: '',
        age: 0,
        password: ''
    })


    const { formState: { errors, isValid }, register, handleSubmit, reset } = useForm<IFormType>({
        mode: 'all'
    });
    const handleFunction = async (data: IFormType) => {
        console.log(data);
        setFormData(data)
        reset()


    }
    return (
        <div>
            {errors.age && <div>{errors.age.message} {isValid + ''}</div>}
            <form onSubmit={handleSubmit(handleFunction)}>

                <input type="text" {...register('name')} placeholder="name" />
                <input type="number" {...register('age', {
                    required: true, valueAsNumber: true,
                    min: { value: 1, message: 'age too small' },
                    max: { value: 132, message: 'age too big' }
                })} placeholder="age" />
                <input type="password" {...register('password')} placeholder="password" />
                <button>press</button>
            </form>
            {formData.age===0 || <div>age:{formData.age}  name:{formData.name}  password:{formData.password}</div> }
            
        </div>
    );
};

export { FormValidate };