import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: false,
    error: "",
    replyPostError: "",
    searchPostList: [],
    selectedPost: {},
    relatedPost: [],
    comment: "",
    replyMsg: "",
}

const postListSlice = createSlice({
    name: "postList",
    initialState,
    reducers:{
        fetchPostLoading: (state) => {
            state.isLoading = true;
        },
        fetchPostSuccess: (state, action) => {
            state.posts = action.payload;
            state.searchPostList = action.payload;
            state.isLoading = false;
        },
        fetchPostFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        searchPost: (state, action) => {

            state.searchPostList = state.posts.filter(row =>{
                if(!action.payload) return row

                return row.subject.toLowerCase().includes(action.payload.toLowerCase());
            })
        },
        fetchSinglePostLoading: (state) => {
            state.isLoading = true;
        },
        fetchSinglePostSuccess: (state, action) => {
            state.selectedPost = action.payload;
            state.isLoading = false;
            state.error = "";
        },
        fetchSinglePostFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchRelatedPostLoading: (state) => {
            state.isLoading = true;
        },
        fetchRelatedPostSuccess: (state, action) => {
            state.relatedPost = action.payload;
            state.isLoading = false;
            state.error = "";
        },
        fetchRelatedPostFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        replyTicketLoading: (state) => {
            state.isLoading = true;
        },
        replyTicketSuccess: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.replyMsg = action.payload;
        },
        replyTicketFail: (state, action) => {
            state.isLoading = false;
            state.replyTicketError = action.payload;
        },
        closePostLoading: (state) => {
            state.isLoading = true;
        },
        closePostSuccess: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.replyMsg = action.payload;
        },
        closePostFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        closeCommentLoading: (state) => {
            state.isLoading = true;
        },
        closeCommentSuccess: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.comment = action.payload;
        },
        closeCommentFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        resetResponseMsg: (state) => {
            state.isLoading = false;
            state.replyPostError = "";
            state.replyMsg = "";
        },
    },
});

const { reducer, actions } = postListSlice;


export const { 
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
    closePostLoading,
    closePostSuccess,
    closePostFail,
    closeCommentLoading,
    closeCommentSuccess,
    closeCommentFail,
    resetResponseMsg,
} = actions;

export default reducer;

