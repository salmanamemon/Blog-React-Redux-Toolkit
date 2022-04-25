import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
// import "./add-ticket-form.style.css";
// import { useDispatch, useSelector } from "react-redux";
// import { openNewTicket } from "./addTicketAction";
// import { shortText } from "../../utils/validation";
// import { openNewTicketResetSuccess } from './addTicketSlicer';

// const initialFrmDt = {
//   subject: "",
//   issueDate: "",
//   detail: "",
// };
// const initialFrmError = {
//   subject: false,
//   issueDate: false,
//   detail: false,
// };

const AddTicketForm = () => {
  // const dispatch = useDispatch();
  // const { user } = useSelector(state => state.user);
  // const { isLoading, error, successMsg } = useSelector((state) => state.openTicket);

  // const [frmData, setFrmData] = useState(initialFrmDt);
  // const [frmDataErro, setFrmDataErro] = useState(initialFrmError);
  
  // useEffect(() => {
  //   return () => {
  //     successMsg && dispatch(openNewTicketResetSuccess());
  //   }
  // }, [frmData, frmDataErro, successMsg, dispatch]);

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;

  //   setFrmData({
  //     ...frmData,
  //     [name]: value,
  //   });
  // };

  const handleOnSubmit = async (e) => {
    // e.preventDefault();

    // setFrmDataErro(initialFrmError);

    // const isSubjectValid = await shortText(frmData.subject);

    // setFrmDataErro({
    //   ...initialFrmError,
    //   subject: !isSubjectValid,
    // });

    // dispatch(openNewTicket({...frmData, email: user.email}));
    // setFrmData({
    //   subject: '',
    //   issueDate: '',
    //   detail: '',
    // })
    //console.log("Form submit request received", frmData);
  };
  //console.log(frmData);
  return (
    <div className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      {/* <hr />
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="success">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataErro.subject && "SUbject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Detail</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={frmData.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Open Ticket
        </Button>
      </Form> */}
    </div>
  );
};

export default AddTicketForm