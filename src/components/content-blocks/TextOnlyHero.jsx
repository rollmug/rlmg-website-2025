import React from "react";
import PropTypes from 'prop-types';
import { Button } from "../ui/Button";
// import DOMPurify from 'dompurify';
import DOMPurify from "isomorphic-dompurify";

export const TextOnlyHero = ({ headerText, mainText, buttonText, buttonURL, className }) => {
    const cleanText = DOMPurify.sanitize(mainText);

    return (
        <section className={`w-full bg-neutral pt-12 md:pt-16 lg:pt-24 pb-20 md:pb-24 lg:pb-40 slanted-bottom ${className}`}>
            <div className={`section-padded`}>
                <div className="flex flex-col justify-start lg:justify-center items-start lg:items-center gap-4">
                    <h2 className="my-0 text-neutral-content">{headerText}</h2>
                    <p className="mt-0 mb-2 leading-normal font-bold text-neutral-content max-w-lg lg:text-center" dangerouslySetInnerHTML={{ __html: cleanText }} />
                    <p className="my-0"><Button label={buttonText} url={buttonURL} /></p>
                </div>
            </div>
        </section>
    );
}

TextOnlyHero.propTypes = {
    headerText: PropTypes.string,
    mainText: PropTypes.string,
    buttonText: PropTypes.string,
    buttonURL: PropTypes.string,
    className: PropTypes.string,
}

TextOnlyHero.defaultProps = {
    headerText: 'Let’s Connect!',
    mainText: `Idea for a new project? Question about a new technology? Just want to chat? <strong>We would love to hear from you!</strong>`,
    buttonText: 'Work With Us',
    buttonURL: '/',
    className: '',
}