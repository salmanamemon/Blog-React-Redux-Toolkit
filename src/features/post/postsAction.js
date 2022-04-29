import {
    fetchPostLoading,
    fetchPostSuccess,
    fetchPostFail,
    searchPosts,
    fetchSinglePostLoading,
    fetchSinglePostSuccess,
    fetchSinglePostFail,
    fetchRelatedPostLoading,
    fetchRelatedPostSuccess,
    fetchRelatedPostFail,
    addCommentLoading,
    addCommentSuccess,
    addCommentFail,
    closePostLoading,
    closePostSuccess,
    closePostFail,
    closeCommentLoading,
    closeCommentSuccess,
    closeCommentFail,
} from './postsSlice';

import { getAllPosts, getSinglePost, getRelatedPost, updatePostStatusClosed, updateCommentStatusClosed, addCommentPost } from './postsApi';

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
    dispatch(searchPosts(str));
    console.log(str);
}

// Action For Single Ticket
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

// Action For Related Post
export const fetchRelatedPost = (id) => async (dispatch) => {
    dispatch(fetchRelatedPostLoading());
    // Fetch the Data From API
    try{
    const result = await getRelatedPost(id);
        //console.log(result.data)
        dispatch(fetchRelatedPostSuccess(result.data));
        
    } catch(error){
        dispatch(fetchRelatedPostFail(error.message));
    }
}



// Action For Replying on single Ticket
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

// Action For Replying on single Ticket
export const closeComment = (id) => async (dispatch) => {
    dispatch(closeCommentLoading());
    // Fetch the Data From API
    try{
        const result = await updateCommentStatusClosed(id);

        console.log(result.status);
        if(result.status === "error"){
          return dispatch(closeCommentFail(result));
        }
        //dispatch(fetchSinglePost(id));
        dispatch(closeCommentSuccess(result));
        
    } catch(error){
        console.log(error)
        dispatch(closeCommentFail(error));
    }
}

// Action For Replying on single Ticket
export const AddCommentOnPost = (id, msgObj) => async (dispatch) => {
    dispatch(addCommentLoading());
    // Fetch the Data From API
    try{
        const result = await addCommentPost(id, msgObj);

        console.log(result.status);
        if(result.status === "error"){
          return dispatch(addCommentFail(result.message));
        }
        dispatch(fetchSinglePost(id));
        dispatch(addCommentSuccess(result.message));
        
    } catch(error){
        console.log(error)
        dispatch(addCommentFail(error));
    }
}
