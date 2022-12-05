import React from 'react';
import {useFormik} from "formik";
import Service from "../api/Service";
import {Button, Container, Form, InputGroup} from "react-bootstrap";

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Title can not be empty';
    } else if (values.title.length < 3) {
        errors.title = 'Must have 3 characters or more';
    }

    if (!values.text) {
        errors.text = 'Text can not be empty';
    }

    return errors;
};
const InputBar = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            text: ''
        }, validate,
        onSubmit: values => {
            Service.addPost(values)
        },
    });

    return (
        <Form
            onSubmit={formik.handleSubmit}
            noValidate
        >
                <InputGroup hasValidation>
                    <Form.Control
                        placeholder="Set title"
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        isInvalid={!!formik.errors.title}
                    />
                    <Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
                </InputGroup>
                <InputGroup hasValidation className="mt-2">
                    <Form.Control
                        placeholder="Set text"
                        id="text"
                        name="text"
                        onChange={formik.handleChange}
                        value={formik.values.text}
                        isInvalid={!!formik.errors.text}
                    />
                    <Form.Control.Feedback type="invalid">{formik.errors.text}</Form.Control.Feedback>
                </InputGroup>
                <Button className="btn btn-primary btn-block mt-1"
                       type="submit"
                       value="Create">
                    Create
                </Button>
        </Form>
    );
};

export default InputBar;