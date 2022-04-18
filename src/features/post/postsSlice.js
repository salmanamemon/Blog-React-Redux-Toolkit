import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Posts: [],
    isLoading: false,
    error: "",
    replyPostError: "",
    searchPostList: [],
    selectedPost: {},
    replyMsg: "",
}

const PostListSlice = createSlice({
    name: "PostList",
    initialState,
    reducers:{
        fetchPostLoading: (state) => {
            state.isLoading = true;
        },
        fetchPostSuccess: (state, action) => {
            state.Posts = action.payload;
            state.searchPostList = action.payload;
            state.isLoading = false;
        },
        fetchPostFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        searchPosts: (state, action) => {

            state.searchPostList = state.Posts.filter(row =>{
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
        replyPostLoading: (state) => {
            state.isLoading = true;
        },
        replyPostSuccess: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.replyMsg = action.payload;
        },
        replyPostFail: (state, action) => {
            state.isLoading = false;
            state.replyPostError = action.payload;
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
        resetResponseMsg: (state) => {
            state.isLoading = false;
            state.replyPostError = "";
            state.replyMsg = "";
        },
    },
});

const { reducer, actions } = PostListSlice;


export const { 
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
    closePostFail,
    resetResponseMsg,
} = actions;

export default reducer;

