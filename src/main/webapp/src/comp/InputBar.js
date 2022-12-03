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
        <form className="container w-25 mt-2"
              onSubmit={formik.handleSubmit}>
            <div className="form-group mt-2">
            <input
                className="form-control"
                placeholder="Set title"
                id="title"
                name="title"
                type="text"
                required
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            {formik.errors.title ? <div style={{color: "red"}}>{formik.errors.title}</div> : null}


            <textarea
                className="form-control mt-2"
                placeholder="Set text"
                id="text"
                name="text"
                onChange={formik.handleChange}
                value={formik.values.text}
                required
            />
                {formik.errors.text ? <div style={{color: "red"}}>{formik.errors.text}</div> : null}
            </div>
            <input className="btn btn-primary btn-block mt-2"
                   type="submit"
                   value="Create"/>
        </form>
    );
};

export default InputBar;