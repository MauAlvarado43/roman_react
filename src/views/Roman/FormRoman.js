import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { postData } from "seed/api";

const useFormRoman = () => {
    return (
        <div className="card">
            <div className="card-header justify-content-center">
                <h3 className="card-header-title">Ejecutar proceso</h3>
            </div>
            <div className="card-body justify-content-center">
                <Formik
                    initialValues={{decimal: ""}}
                    onSubmit={(values) => {
                        postData('/processes/decimal_to_roman/', {
                            decimal: values.decimal,
                            user_id: localStorage.getItem("id")
                        }).then(data => {
                            return null
                        })
                    }}>
                    {({ values, setFieldValue}) =>
                    <Form>
                        <div className="row">
                            <Field type="number" name="decimal" class="form-control" />
                        </div>
                        <br/>
                        <div className="row">
                            <button type="submit" class="btn btn-block btn-primary">Eejcutar</button>
                        </div>
                    </Form>}
                </Formik>
            </div>
        </div>     
    )
}

export default useFormRoman;