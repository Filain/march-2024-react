import {AxiosResponse} from "axios";
import {IUser} from "../interfaces/userInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll: ():Promise<AxiosResponse<IUser[]>> => axiosService.get(urls.users)
}
export {userService}