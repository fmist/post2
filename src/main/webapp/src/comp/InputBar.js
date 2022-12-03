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
    } else if (values.text.length < 3) {
        errors.text = 'Must be 3 characters or more';
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
        <form className="container w-400 mw-full"
              onSubmit={formik.handleSubmit}>
            <label htmlFor="title">Set title</label>
            <input
                className="form-control"
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            {formik.errors.title ? <div>{formik.errors.title}</div> : null}

            <label htmlFor="text">Set text</label>
            <div className="form-group">
            <textarea
                className="form-control"
                id="text"
                name="text"
                onChange={formik.handleChange}
                value={formik.values.text}
            />
                {formik.errors.text ? <div>{formik.errors.text}</div> : null}
            </div>
            <input className="btn btn-primary btn-block"
                   type="submit"
                   value="Create"/>
        </form>
    );
};

export default InputBar;