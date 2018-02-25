import React, { Component } from 'react';
import { Field } from 'redux-form';
import Text from '../components/text';

export const FormComponent = ({handleSubmit, onSubmit}) => {
    return(
        <form className="card" onSubmit={handleSubmit(onSubmit)}>
            <div className="card-header">
                <div className="card-header-title-centered">
                    Simple Form
                </div>
            </div>
            <div className="card-content">
                    <Field name={'username'} label={'Username'} component={Text}/>
                    <Field name={'firstName'} label={'First name'} component={Text}/>
                    <Field name={'lastName'} label={'Last name'} component={Text}/>
            </div>
            <div className="card-footer">
                <div className="card-footer-item">
                    <div className="field">
                    <button className="button is-link" type={'submit'}>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default FormComponent;