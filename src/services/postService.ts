import {AxiosResponse} from "axios";
import {IPost} from "../inerfaces/postInterface";
import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

const postService ={
    getAll: ():Promise<AxiosResponse<IPost[]>> =>axiosServices.get(urls.posts),
    getPostById: (id:string):Promise<AxiosResponse<IPost[]>> =>axiosServices.get(urls.userPosts(id)),
 }

 export {postService}