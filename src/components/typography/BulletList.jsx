import React, { useState } from "react";
import PropTypes from 'prop-types';

export const BulletList = ({ title, listItems }) => {
    return (
        <>
            {title && <h4>{title}</h4>}
            <ul>
                {listItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>

    );
};

BulletList.propTypes = {
    title: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
}

BulletList.defaultProps = {
    title: 'Our Capabilities',
    listItems: [],
}