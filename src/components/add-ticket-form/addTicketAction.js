import {openNewTicketPending, 
openNewTicketSuccess, 
openNewTicketFail} from '../add-ticket-form/addTicketSlicer';
import { createNewTicket } from "../../api/ticketApi";

export const openNewTicket = (frmData) => dispatch => {
    return new Promise(async(resolve, reject) => {
        try {
            dispatch(openNewTicketPending())

            // Call API
            const result = await createNewTicket(frmData);

            if(result.status === "error"){
                return dispatch(openNewTicketFail(result.message))
            }
            console.log(result);
            dispatch(openNewTicketSuccess(result.message));


        } catch (error) {
            console.log(error);
            dispatch(openNewTicketFail(error.message));
        }
    })
}