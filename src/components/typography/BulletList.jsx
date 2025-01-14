import React, { useState } from "react";
import PropTypes from 'prop-types';
import Link from "next/link";

export const BulletList = ({ title, listItems, bullets = true, textSize = 'normal', spacing = 'normal', className }) => {
    let textClass, spacingClass;
    switch (textSize) {
        case 'small':
            textClass = 'text-sm';
            break;
        case 'normal':
            textClass = 'text-base';
            break;
        case 'large':
            textClass = 'text-lg';
            break;
        default:
            textClass = 'text-base';
    }

    switch (spacing) {
        case 'tight':
            spacingClass = 'space-y-1';
            break;
        case 'normal':
            spacingClass = 'space-y-2';
            break;
        case 'loose':
            spacingClass = 'space-y-3';
            break;
        case 'looser':
            spacingClass = 'space-y-4';
            break;
        default:
            spacingClass = 'space-y-1';
    }

    return (
        <>
            {title && <h4>{title}</h4>}
            <ul className={`${bullets ? 'list-inside' : 'list-none'} ${className} ${spacingClass}`}>
                {listItems.map((item, index) => (
                    <li key={index} className={`${textClass}`}>
                        {item.url ? <>
                            <Link href={item.url}>{item.text}</Link>
                        </> :
                            item.text
                        }
                    </li>
                ))}
            </ul>
        </>

    );
};

BulletList.propTypes = {
    title: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string
    })),
    bullets: PropTypes.bool,
    textSize: PropTypes.oneOf(['small', 'normal', 'large']),
    spacing: PropTypes.oneOf(['tight', 'normal', 'loose', 'looser']),
    className: PropTypes.string,
}

BulletList.defaultProps = {
    title: 'Our Capabilities',
    listItems: [
        { text: 'Strategy & Concept', url: '' },
        { text: 'Design Development & Prototyping', url: '' },
        { text: 'Interactive Media', url: '' },
        { text: 'Film & Linear Media', url: '' },
        { text: 'Immersive Environments', url: '' },
        { text: 'Project Management', url: '' },
    ],
    bullets: true,
    textSize: 'normal',
    spacing: 'normal',
}