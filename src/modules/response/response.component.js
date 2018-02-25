import React, { Component } from 'react';

export const Response = ({ values }) => {
    return (
        <pre className="response-container">
            {values}
        </pre>
    )
};

export default Response;