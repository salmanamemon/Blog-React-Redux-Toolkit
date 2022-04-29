import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: false,
    error: "",
    replyPostError: "",
    searchPostList: [],
    selectedPost: {},
    relatedPost: [],
    replyMsg: "",
    successMsg: '',
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
            //debugger
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
        addCommentLoading: (state) => {
            state.isLoading = true;
        },
        addCommentSuccess: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.replyMsg = action.payload;
        },
        addCommentFail: (state, action) => {
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
        closeCommentLoading: (state) => {
            state.isLoading = true;
        },
        closeCommentSuccess: (state, action) => {
            const { id, message } = action.payload;
            state.isLoading = false;
            state.error = "";
            state.replyMsg = message ;
            state.selectedPost = {
                ...state.selectedPost,
                comments: state.selectedPost.comments.filter(c => c.com_id !== id)
            };
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
        openNewPostPending:(state)=>{
            state.isLoading = true
        },
        openNewPostSuccess:(state, action)=>{
            state.isLoading = false
            state.successMsg = action.payload
        },
        openNewPostFail:(state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
        openNewPostResetSuccess:(state)=>{
            state.isLoading = false
            state.successMsg = ''
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
    addCommentLoading,
    addCommentSuccess,
    addCommentFail,
    closePostLoading,
    closePostSuccess,
    closePostFail,
    closeCommentLoading,
    closeCommentSuccess,
    closeCommentFail,
    resetResponseMsg,
    openNewPostPending,
    openNewPostSuccess,
    openNewPostFail,
    openNewPostResetSuccess,

} = actions;

export default reducer;

