import {AxiosResponse} from "axios";
import {IPost} from "../interfaces/postInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IForm} from "../interfaces/formIterface";

const postService ={
    getByUserId:(id:string): Promise<AxiosResponse<IPost[]>> => axiosService.get(urls.getPostByUserId(id)),
    postPost:(data:IForm):Promise<void> => axiosService.post(urls.posts)
}

export {postService}