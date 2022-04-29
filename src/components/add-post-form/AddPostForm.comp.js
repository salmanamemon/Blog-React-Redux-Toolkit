import React, { useEffect } from "react";
import { openNewPostPending, openNewPostSuccess, openNewPostFail } from "../../features/post/postsSlice";
import { createNewPost } from '../../features/post/postsApi';
import { useFormik } from "formik";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getUserProfile } from '../../features/user/userAction';

const validationSchema = yup.object({
    title: yup
        .string()
        .min(3, "Please add atleast 3 characters")
        .required("Name is required"),
    text:  yup
        .string()
        .min(3, "Please add atleast 3 characters")
        .max(100)
        .required("Message is required"),
});

export const AddPostForm = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    //const navigate = useNavigate();

    useEffect(() => {
        //sessionStorage.getItem('authToken')
        //&& navigate('/dashboard')
      }, []);

    const {isLoading, error, successMsg} = useSelector(state => state.posts);

    const onSubmit = async (values) => {
        //const { ...data } = values;
        const title = values.title;
        const text = values.text;
        const authorid = values.authorid;
        const cat_id = values.cat_id;
        // console.log(email, password);
        dispatch(openNewPostPending());

        try {
            const result = await createNewPost({title, text, authorid, cat_id});
            console.log(result);
    
            if(result.status === 'error'){
                return dispatch(openNewPostFail(result.message));
            }
    
            dispatch(openNewPostSuccess(result.message));
            // dispatch(getUserProfile());
            //navigate("/dashboard");

        } catch (error) {
            dispatch(openNewPostFail(error.message));
        }
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            text: "",
            authorid: `${user.id}`,
            cat_id: '1',
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
        enableReinitialize: true,
    });

    //console.log("Error", error);
    

    return (
        <div className="mt-3 add-new-ticket bg-light p-5">
        <h1 className="text-info text-center">Add New Post</h1>
            <Container className="signUpDiv" >
                <Row>
                    <Col>

                        {error && <Alert variant="danger">{error}</Alert>}
                        {isLoading && <Spinner variant="primary" animation="border" />}
                        {successMsg && <Alert variant="success">{successMsg}</Alert>}


                        <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                            <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="title"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter title"
                            />
                            </Form.Group>
                            {formik.errors.title && formik.touched.title ?
                            <Alert variant="danger">{formik.errors.title}</Alert>
                            : ""}

                            <Form.Group>
                            <Form.Label className="mt-3">Message*</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="text"
                                value={formik.values.text}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter Post Text here"
                            />
                            </Form.Group>
                            {formik.errors.text && formik.touched.text ?
                            <Alert variant="danger">{formik.errors.text}</Alert>
                            : ""}

                            <Form.Group>
                            <Form.Label className="mt-3">Category Select*</Form.Label>
                            <Form.Select 
                                name="cat_id" 
                                aria-label="Default select example"
                                value={formik.values.cat_id}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="1">Travel</option>
                                <option value="2">Food</option>
                                <option value="3">Politics</option>
                                <option value="4">Nature</option>
                                <option value="5">Sports</option>
                                <option value="6">Tech</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group>
                            <Form.Control
                                type="hidden"
                                name="authorid"
                                value={formik.values.authorid}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            </Form.Group>
                            

                            <Button className="mt-3" type="submit" disabled={!formik.isValid}>Add Post</Button>
                            {isLoading && <Spinner variant="primary" animation="border" />}
                        </Form>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
}

export default AddPostForm