import React, { useEffect } from "react";
import { loginPending, loginSuccess, loginFail } from "../../features/login/loginSlice";
import { userLogin } from '../../api/userApi';
import { useFormik } from "formik";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { getUserProfile } from '../../features/user/userAction';

const validationSchema = yup.object({
    password: yup
        .string()
        .required('Please enter your password.')
        .min(5, 'Your password is too short.'),
    email: yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required')
});

export const Login = () => {
    const dispatch = useDispatch();
    //const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.getItem('authToken')
        //&& navigate('/dashboard')
      }, []);

    const {isLoading, error} = useSelector(state => state.login);

    const onSubmit = async (values) => {
        //const { ...data } = values;
        const email = values.email;
        const password = values.password
        // console.log(email, password);
        dispatch(loginPending());

        try {
            const isAuth = await userLogin({email, password});
            console.log(isAuth);
    
            if(isAuth.status === 'error'){
                return dispatch(loginFail(isAuth.message));
            }
    
            dispatch(loginSuccess());
            dispatch(getUserProfile());
            //navigate("/dashboard");

        } catch (error) {
            dispatch(loginFail(error.message));
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "memon.salman@gmail.com",
            password: "12345",
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });

    //console.log("Error", error);
    

    return (
        <>
        <Container className="signUpDiv" >
            <Row>
                <Col>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter email"
                        />
                        </Form.Group>
                        {formik.errors.email && formik.touched.email ?
                        <Alert variant="danger">{formik.errors.email}</Alert>
                        : ""}
                        <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter password"
                        />
                        </Form.Group>
                        {formik.touched.password && formik.errors.password ?
                        <Alert variant="danger">{formik.errors.password}</Alert>
                        : ""}
                        
                        <Button className="mt-3" type="submit" disabled={!formik.isValid}>Login</Button>
                        {isLoading && <Spinner variant="primary" animation="border" />}
                    </Form>
                </Col>
            </Row>
        </Container> 
        </>
    );
}

export default Login