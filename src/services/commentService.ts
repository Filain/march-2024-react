import {AxiosResponse} from "axios";
import {IComment} from "../inerfaces/comInterface";
import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

const commentService={
    getAll:():Promise<AxiosResponse<IComment[]>> =>axiosServices.get(urls.comments)
}

export {commentService}