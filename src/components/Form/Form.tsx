import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { postService } from "../../services/postService";
;

interface IProps extends PropsWithChildren {

}

type IFormType = {
    title: string,
    body: string
}

const Form: FC<IProps> = () => {

    const { register, handleSubmit } = useForm<IFormType>()
    const handleFunction = async(data: IFormType) => {
        const userId:number= 1
        console.log({userId, ...data});
        await postService.postPost({userId, ...data})

    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleFunction)}>
                <input type="text" {...register('body')} />
                <input type="text" {...register('title')} />
                <button>press</button>
            </form>
        </div>
    );
};

export { Form };