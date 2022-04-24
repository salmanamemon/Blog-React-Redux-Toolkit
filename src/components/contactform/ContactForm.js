import { useFormik } from "formik";
import React, { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import * as yup from "yup";
import axios from "axios";
import { useDebouncedCallback } from 'use-debounce';
import './ContactForm.css';

const validationSchema = yup.object({
    name: yup
        .string()
        .min(3, "Please add atleast 3 characters")
        .required("Name is required"),
    phone: yup
        .string()
        .min(7, "Please add atleast 3 digits")
        .max(11)
        .required("Phone is required"),
    message:  yup
        .string()
        .min(3, "Please add atleast 3 characters")
        .max(100)
        .required("Message is required"),
    email: yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required')
});

const ContactForm = () => {
    
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const onSubmit = async (values) => {
        //const { ...data } = values;
        const form = values;
        const isSubmitting = true;
        //console.log(form);

        const response = await axios
        .post("http://localhost/a)redux-toolkit-with-projects/blog-redux-01/api/v1/contact.php", form
        )
        .catch((err) => {
            if (err && err.response) setError(err.response.data.message);
            setSuccess(null);
        });

        if (response && response.data) {
            setError(null);
            setSuccess(<Alert variant={response.data.status === 'error' ? 'danger' : 'success'}>{response.data.message}</Alert>);
            
            formik.resetForm();
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "Salman Aziz",
            phone: "05555555",
            email: "memon.salman@gmail.com",
            message: "",
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });

    const updateValFromStore = useDebouncedCallback((key, val) => {
        console.log({ key, val });
    }, 300);

    //console.log("Error", error);
    

    return (
        <>
        
            <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                <Form.Group>
                <Form.Label className="mt-3">Full name*</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={(event) => {
                        formik.handleChange(event)
                        updateValFromStore('name', formik.values.name)
                    }}
                    //onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter full name"
                />
                </Form.Group>
                {formik.errors.name && formik.touched.name ?
                <Alert variant="danger">{formik.errors.name}</Alert>
                : ""}
                <Form.Group>
                <Form.Label className="mt-3">Phone*</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={formik.values.phone}
                    //onChange={formik.handleChange}
                    onChange={(event) => {
                        formik.handleChange(event)
                        updateValFromStore('phone', formik.values.phone)
                    }}
                    onBlur={formik.handleBlur}
                    placeholder="Enter phone"
                />
                </Form.Group>
                {formik.errors.phone && formik.touched.phone ?
                <Alert variant="danger">{formik.errors.phone}</Alert>
                : ""}
                <Form.Group>
                <Form.Label className="mt-3">Email address*</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formik.values.email}
                    //onChange={formik.handleChange}
                    onChange={(event) => {
                        formik.handleChange(event)
                        updateValFromStore('email', formik.values.email)
                    }}
                    onBlur={formik.handleBlur}
                    placeholder="Enter email"
                />
                </Form.Group>
                {formik.errors.email && formik.touched.email ?
                <Alert variant="danger">{formik.errors.email}</Alert>
                : ""}
                
                <Form.Group>
                <Form.Label className="mt-3">Message*</Form.Label>
                <Form.Control
                    as="textarea"
                    name="message"
                    value={formik.values.address}
                    //onChange={formik.handleChange}
                    onChange={(event) => {
                        formik.handleChange(event)
                        updateValFromStore('message', formik.values.message)
                    }}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Message here"
                />
                </Form.Group>
                {formik.touched.message && formik.errors.message ?
                <Alert variant="danger">{formik.errors.message}</Alert>
                : ""}
                
                
                {!error && <div>{success ? success : ""}</div>}
                {!success && <div>{error ? error : ""}</div>}
                <Button className="mt-3" type="submit" disabled={!formik.isValid}>Send</Button>
                {<Spinner variant="primary" animation="border" />}
            </Form>
            <p className="mt-4">By submitting the form, i acknowledge to agree to privacy policy.<br />Fields marks with asterik (*) are required.</p>
        </>
    );
};

export default ContactForm;