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


export const getRelatedPost = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get('http://localhost/a)redux-toolkit-with-projects/blog-redux-01/api/v1/post/relatedpost.php?id='+id,
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


// PUBLISH OR UNPUBLISH POST
export const updatePostStatusClosed = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post('http://localhost/a)redux-toolkit-with-projects/blog-redux-01/api/v1/post/singlepostupdatestatus.php?id='+id,
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

// PUBLISH OR UNPUBLISH COMMENT
export const updateCommentStatusClosed = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post('http://localhost/a)redux-toolkit-with-projects/blog-redux-01/api/v1/post/deletepostcomment.php?id='+id,
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

// Add A Reply to A Comment Using Form
export const addCommentPost = (id, msgObj) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post('http://localhost/a)redux-toolkit-with-projects/blog-redux-01/api/v1/post/singletpostmessageinsert.php?id='+id,
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