import React from 'react';
import {useFormik} from "formik";
import Service from "../api/Service";

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
        <form className="container w-25 mt-3 border "
              onSubmit={formik.handleSubmit}>
            <form>
            <input
                className="form-control mt-2"
                placeholder="Set title"
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            {formik.errors.title ? <p style={{color: "red", fontSize: "small"}}>{formik.errors.title}</p> : null}
            </form>
            <form>
            <textarea
                className="form-control mt-3"
                placeholder="Set text"
                id="text"
                name="text"
                onChange={formik.handleChange}
                value={formik.values.text}
            />
                {formik.errors.text ? <p style={{color: "red", fontSize: "small"}}>{formik.errors.text}</p> : null}
            </form>
            <input className="btn btn-primary btn-block mt-1"
                   type="submit"
                   value="Create"/>
        </form>
    );
};

export default InputBar;