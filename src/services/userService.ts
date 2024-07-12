import {AxiosResponse} from "axios";
import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";
import {IUser} from "../inerfaces/userInterface";

const userService ={
    getAll:() :Promise<AxiosResponse<IUser[]>> => axiosServices.get(urls.users),
}
export {userService}

