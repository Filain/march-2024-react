import {AxiosResponse} from "axios";
import {IPosts} from "../interfaces/postInterface";
import {axiosService} from "./axiosService";

const postService ={
getByUserId:(id:string): Promise<AxiosResponse<IPosts>> => axiosService.get(us)
}