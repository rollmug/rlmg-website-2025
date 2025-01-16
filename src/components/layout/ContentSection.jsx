import React from "react";
import PropTypes from 'prop-types';

export const ContentSection = ({ children, className, standout = false }) => {
    return (
        <>
            <section className={`w-full mx-auto ${standout ? 'bg-base-200 py-5 lg:py-16' : 'py-1 lg:py-4'}  ${className}`}>
                {children}
            </section>
        </>
    );
}