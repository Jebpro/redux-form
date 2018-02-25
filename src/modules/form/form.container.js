import React from 'react';
import { reduxForm } from 'redux-form';
import FormComponent from './form.component';
import ResponseComponent from '../response/response.component';

export let state = '';

export const FormContainer = ({ handleSubmit }) => {
    const submitForm = (formValues) => {
        return (
            state = JSON.stringify(formValues)
        )
    };
    return (
        <div className="login-container">
            <div className="columns">
                <div className="column">
                    <FormComponent onSubmit={submitForm}
                                   handleSubmit={handleSubmit}/>
                </div>
                <div className="column">
                    <ResponseComponent values={state}/>
                </div>
            </div>
        </div>
    )
};

const formConfiguration = {
    form: 'simple-form'
};

export default reduxForm(formConfiguration)(FormContainer);