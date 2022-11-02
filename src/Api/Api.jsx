import React, { useEffect } from "react";
import axios from "axios";


const baseURL = "https://randomuser.me/api/"

export const Post = (data) => {

}

export const GetPost = () => {
    return axios.get(baseURL);
}