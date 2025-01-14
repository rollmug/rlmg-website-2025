import React from "react";
import PropTypes from 'prop-types';

import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export const SocialMediaIcons = ({ links = [], className, size = 'medium' }) => {
    let iconSize;

    switch (size) {
        case 'small':
            iconSize = `h-4 w-4 lg:h-5 lg:w-5`;
            break;
        case 'medium':
            iconSize = `h-6 w-6 lg:h-6 lg:w-6`;
            break;
        case 'large':
            iconSize = `h-7 w-7 lg:h-8 lg:w-8`;
            break;
        default:
            iconSize = `h-5 w-6 lg:h-6 lg:w-6`
    }

    if (!links || !links.length) {
        return null;
    }

    return (
        <div className={`flex gap-3 ${className}`}>
            {links.map((link, index) => {
                return (
                    <SocialLink key={index} platform={link.platform} displayText={link.displayText} url={link.url} iconSize={iconSize} />
                );
            })}
        </div>
    );
}

const SocialLink = ({ platform, displayText, url, iconSize }) => {
    return (
        <Link href={url} target="_blank" title={displayText} className="btn btn-link text-neutral !px-0">
            {(() => {
                switch (platform) {
                    case 'linkedin':
                        return <FaLinkedin className={`${iconSize}`} />
                    case 'facebook':
                        return <FaFacebook className={`${iconSize}`} />
                    case 'instagram':
                        return <FaInstagram className={`${iconSize}`} />
                    case 'twitter':
                        return <FaSquareXTwitter className={`${iconSize}`} />
                    default:
                        return null;
                }
            })()}
        </Link>
    );
}

SocialMediaIcons.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            displayText: PropTypes.string,
            platform: PropTypes.string,
            url: PropTypes.string,
        })
    ),
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

SocialMediaIcons.defaultProps = {
    links: [
        {
            displayText: 'LinkedIn',
            platform: 'linkedin',
            url: 'https://www.linkedin.com'
        },
        {
            displayText: 'Facebook',
            platform: 'facebook',
            url: 'https://www.facebook.com'
        },
        {
            displayText: 'Instagram',
            platform: 'instagram',
            url: 'https://www.instagram.com'
        },
        {
            displayText: 'Twitter',
            platform: 'twitter',
            url: 'https://www.twitter.com'
        },
    ],
    className: '',
    size: 'medium',
}