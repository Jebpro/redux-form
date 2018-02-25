import React from 'react';

export const Text = ({ label, input }) => {
    return (
        <div className="field">
            <label className="label">
                {label}
            </label>
            <div className="control">
                <input {...input} className="input" placeholder={label} type={'text'}/>
            </div>
        </div>
    )
};

export default Text;