import {
    fetchPostLoading,
    fetchPostSuccess,
    fetchPostFail,
    searchPosts,
    fetchSinglePostLoading,
    fetchSinglePostSuccess,
    fetchSinglePostFail,
    replyPostLoading,
    replyPostSuccess,
    replyPostFail,
    closePostLoading,
    closePostSuccess,
    closePostFail
} from './PostsSlice';

import { getAllPosts, getSinglePost, updateReplyPost, updatePostStatusClosed } from '../../api/PostApi';

export const fetchAllPosts = () => async (dispatch) => {
    dispatch(fetchPostLoading());
    // Fetch the Data From API
    try{
        const result = await getAllPosts();
        //console.log(result.data)
        dispatch(fetchPostSuccess(result.data))
        
    } catch(error){
        dispatch(fetchPostFail(error.message));
    }
}

export const filterSearchPost = (str) => async (dispatch) => {
    dispatch(searchPosts(str))
}

// Action For Single Post
export const fetchSinglePost = (id) => async (dispatch) => {
    dispatch(fetchSinglePostLoading());
    // Fetch the Data From API
    try{
    const result = await getSinglePost(id);
        //console.log(result.data)
        dispatch(fetchSinglePostSuccess(result.data));
        
    } catch(error){
        dispatch(fetchSinglePostFail(error.message));
    }
}

// Action For Replying on single Post
export const replyOnPost = (id, msgObj) => async (dispatch) => {
    dispatch(replyPostLoading());
    // Fetch the Data From API
    try{
        const result = await updateReplyPost(id, msgObj);

        console.log(result.status);
        if(result.status === "error"){
          return dispatch(replyPostFail(result.message));
        }
        dispatch(fetchSinglePost(id));
        dispatch(replyPostSuccess(result.message));
        
    } catch(error){
        console.log(error)
        dispatch(replyPostFail(error));
    }
}

// Action For Replying on single Post
export const closePost = (id) => async (dispatch) => {
    dispatch(closePostLoading());
    // Fetch the Data From API
    try{
        const result = await updatePostStatusClosed(id);

        console.log(result.status);
        if(result.status === "error"){
          return dispatch(closePostFail(result.message));
        }
        dispatch(fetchSinglePost(id));
        dispatch(closePostSuccess(result.message));
        
    } catch(error){
        console.log(error)
        dispatch(closePostFail(error));
    }
}