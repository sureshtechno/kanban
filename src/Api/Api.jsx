import React from "react";
import axios from "axios";


const baseURL = "https://randomuser.me/api/"


export const GetPost = () => {
    return axios.get(baseURL);
}