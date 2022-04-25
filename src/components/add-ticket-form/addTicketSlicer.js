import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: '',
    successMsg: ''
}
const newTicketSlice = createSlice({
    name: 'newTicket',
    initialState,
    reducers:{
        openNewTicketPending:(state)=>{
            state.isLoading = true
        },
        openNewTicketSuccess:(state, action)=>{
            state.isLoading = false
            state.successMsg = action.payload
        },
        openNewTicketFail:(state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
        openNewTicketResetSuccess:(state)=>{
            state.isLoading = false
            state.successMsg = ''
        },
    },
});

export const {
    openNewTicketPending,
    openNewTicketSuccess,
    openNewTicketFail,
    openNewTicketResetSuccess
} = newTicketSlice.actions;

export default newTicketSlice.reducer;