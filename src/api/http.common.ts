import axios from "axios";
import {Base_URL,Public_URL} from "./api.config"


const http_MdVerse = axios.create({
    baseURL: `${Base_URL}/`,
    headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
});


export const http = {
    http_MdVerse
}
