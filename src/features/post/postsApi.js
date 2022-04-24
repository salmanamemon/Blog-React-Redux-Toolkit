import axios from "axios";

export const getAllPosts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get('http://localhost/a)redux-toolkit-with-projects/blog-redux-01/api/v1/post/posts.php',
            {
                headers:{
                    "content-type": "application/json; charset=UTF-8",
                    //Authorization: sessionStorage.getItem("authToken"),
                },
            });
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}

export const getSinglePost = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get('http://localhost/a)redux-toolkit-with-projects/blog-redux-01/api/v1/post/singlepost.php?id='+id,
            {
                headers:{
                    "content-type": "application/json; charset=UTF-8",
                    //Authorization: sessionStorage.getItem("authToken"),
                },
            });
            resolve(result);
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
}

export const updateReplyPost = (id, msgObj) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post('http://ticket.salmanaziz.tech/api/v1/ticket/singleticketmessageinsert.php?id='+id,
            {
                headers:{
                    "content-type": "application/json; charset=UTF-8",
                    Authorization: sessionStorage.getItem("authToken"),
                },
                msgObj,
            });
            
            //console.log(result.data);
            resolve(result.data);
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
}

export const updatePostStatusClosed = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post('http://ticket.salmanaziz.tech/api/v1/ticket/singleticketupdatestatus.php?id='+id,
            {
                headers:{
                    Authorization: sessionStorage.getItem("authToken"),
                },
            });
            
            //console.log(result.data);
            resolve(result.data);
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
}

export const createNewPost = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post('http://ticket.salmanaziz.tech/api/v1/ticket/singleticketinsert.php',
                {
                    headers:{
                        Authorization: sessionStorage.getItem("authToken"),
                    },
                    frmData,
                }
            );
            
            //console.log(result.data);
            resolve(result.data);
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
}