import React, { useState } from "react";
import { ContentSection } from "../layout/ContentSection";
import DOMPurify from "isomorphic-dompurify";
import PropTypes from 'prop-types';
import Link from "next/link";

export const ColumnText = ({ headerText, columnSize, columnText, standout = false, className }) => {
    let gridClass;
    if (columnText && columnText.length >= 1) {
        switch (columnSize) {
            case 1: gridClass = 'grid-cols-1'; break;
            case 2: gridClass = 'lg:grid-cols-2'; break;
            case 3: gridClass = 'grid-cols-1 md:grid-cols-3'; break;
            case 4: gridClass = 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'; break;
        }
    }

    const [showMore, setShowMore] = useState(false);

    const handleShowMore = (e) => {
        e.preventDefault();
        setShowMore(!showMore);
    }

    return (
        <>
            <ContentSection standout={standout}>
                <section className={`section-padded ${className}`}>
                    <div className="flex flex-col justify-start gap-5">
                        {headerText && (<h2 className="my-0">{headerText}</h2>)}

                        {columnText && columnText.length > 0 && (
                            <div>
                                <div className={`equal-colum-text grid ${gridClass} gap-0 md:gap-16 xl:gap-20`}>
                                    {columnText.map((block, index) => {
                                        const cleanText = DOMPurify.sanitize(block.content);
                                        return (
                                            <div key={index} className={`${index > 0 ? `${showMore ? 'block' : 'hidden'} md:block` : ''}`} dangerouslySetInnerHTML={{ __html: cleanText }} />
                                        )
                                    })}
                                </div>
                                <Link href="#" className="btn btn-link inline-block md:hidden !px-0 !text-base" onClick={handleShowMore}>{showMore ? 'See Less' : 'See More'}</Link>
                            </div>
                        )}
                    </div>
                </section>
            </ContentSection>
        </>
    );
}

ColumnText.propTypes = {
    headerText: PropTypes.string,
    columnSize: PropTypes.number,
    columnText: PropTypes.array,
    className: PropTypes.string,
}