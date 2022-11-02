import React, {useEffect} from "react";
import axios from "axios";


const baseURL = "https://randomuser.me/api/"

export const Post = (data) => {

}

export const Get = (data) => {
    const [post, setPost] = React.useState([]);

    useEffect(() => {
        axios.get(baseURL + data).then((response) => {
            setPost(response.data.results);
        });
    }, [])
    return post;
}

export const GetPost = () => {
    return  axios.get(baseURL) ;
}