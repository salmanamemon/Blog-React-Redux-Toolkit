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
    replyTicketLoading,
    replyTicketSuccess,
    replyTicketFail,
    closeTicketLoading,
    closeTicketSuccess,
    closeTicketFail
} from './postsSlice';

import { getAllPosts, getSinglePost, getRelatedPost } from './postsApi';

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
// export const replyOnTicket = (id, msgObj) => async (dispatch) => {
//     dispatch(replyTicketLoading());
//     // Fetch the Data From API
//     try{
//         const result = await updateReplyTicket(id, msgObj);

//         console.log(result.status);
//         if(result.status === "error"){
//           return dispatch(replyTicketFail(result.message));
//         }
//         dispatch(fetchSingleTicket(id));
//         dispatch(replyTicketSuccess(result.message));
        
//     } catch(error){
//         console.log(error)
//         dispatch(replyTicketFail(error));
//     }
// }

// Action For Replying on single Ticket
// export const closeTicket = (id) => async (dispatch) => {
//     dispatch(closeTicketLoading());
//     // Fetch the Data From API
//     try{
//         const result = await updateTicketStatusClosed(id);

//         console.log(result.status);
//         if(result.status === "error"){
//           return dispatch(closeTicketFail(result.message));
//         }
//         dispatch(fetchSingleTicket(id));
//         dispatch(closeTicketSuccess(result.message));
        
//     } catch(error){
//         console.log(error)
//         dispatch(closeTicketFail(error));
//     }
// }