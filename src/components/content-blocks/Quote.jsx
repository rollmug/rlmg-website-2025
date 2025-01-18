import React from "react";
import PropTypes from 'prop-types';
import { ContentSection } from "../layout/ContentSection";
import { MdFormatQuote } from "react-icons/md";

export const Quote = ({ quoteText, sourceAuthor, sourceOrg, template = 'dark', className }) => {

    return (
        <ContentSection>
            <div className={`quote-container py-10 lg:py-16 px-[10%] lg:px-[15%] ${template} ${className}`}>

                <blockquote className={`quote pb-3`}>
                    <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
                        <div className="w-14 h-14">
                            <MdFormatQuote className="text-primary w-14 h-14 -scale-[1]" />
                        </div>

                        <p className="quote-text font-bold grow md:text-lg md:w-min md:max-w-prose px-3 mt-0 md:mt-4">{quoteText}</p>
                        
                        <div className="self-end w-14 h-14 order-4 md:order-3">
                            <MdFormatQuote className="text-primary w-14 h-14" />
                        </div>

                        {/* md:pl-14 ml-3 */}
                        {/*  md:w-min md:max-w-prose px-3 */}

                        <div className="basis-full order-3 md:order-4 flex flex-row justify-center">
                            <div className="w-14 hidden md:block"></div>
                            <p className="my-0 grow md:w-min md:max-w-prose px-3 md:text-lg">
                                {sourceAuthor && <cite className="quote-author font-bold not-italic">{sourceAuthor}</cite>}
                                {sourceAuthor && sourceOrg && <span className="quote-source-divider"> | </span>}
                                {sourceOrg && <cite className="quote-source not-italic">{sourceOrg}</cite>}
                            </p>
                            <div className="w-14 hidden md:block"></div>
                        </div>
                    </div>
                </blockquote>

            </div>
        </ContentSection>
    );
}

Quote.propTypes = {
    quoteText: PropTypes.string.isRequired,
    sourceAuthor: PropTypes.string,
    sourceOrg: PropTypes.string,
    template: PropTypes.oneOf(['light', 'dark']),
    className: PropTypes.string,
}

Quote.defaultProps = {
    template: 'dark',
}