import {AxiosResponse} from "axios";
import {IUsers} from "../interfaces/userInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll: ():Promise<AxiosResponse<IUsers>> => axiosService.get(urls.users)
}