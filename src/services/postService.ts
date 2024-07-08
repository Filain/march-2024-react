import {AxiosResponse} from "axios";
import {IPosts} from "../interfaces/postInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IForm} from "../interfaces/formIterface";

const postService ={
    getAll:():Promise<AxiosResponse<IPosts>> => axiosService.get(urls.posts),
    getByUserId:(id:string): Promise<AxiosResponse<IPosts>> => axiosService.get(urls.getPostByUserId(id))
    postPost:():Promise<void> => axiosService.post()
}

export {postService}