import {AxiosResponse} from "axios";
import {IPosts} from "../interfaces/postInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService ={
    getByUserId: (id:string): Promise<AxiosResponse<IPosts>> => axiosService.get(urls.posts(id))
}
export {postService}