import AxiosInstance from "../api/AxiosInstance";
import { Stories } from "../type/type";


export const getDetails = async(page:string) => {
    try {
        const {data,status} = await AxiosInstance.get(`/api/v1/stories/${page}`);
        return data;
    } catch (e) {
        console.log("Error");
    }
}