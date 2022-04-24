import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: false,
    error: "",
    replyTicketError: "",
    searchPostList: [],
    selectedPost: {},
    relatedPost: [],
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
        closeTicketLoading: (state) => {
            state.isLoading = true;
        },
        closeTicketSuccess: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.replyMsg = action.payload;
        },
        closeTicketFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        resetResponseMsg: (state) => {
            state.isLoading = false;
            state.replyTicketError = "";
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
    closeTicketLoading,
    closeTicketSuccess,
    closeTicketFail,
    resetResponseMsg,
} = actions;

export default reducer;

