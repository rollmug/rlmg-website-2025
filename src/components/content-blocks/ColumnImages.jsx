'use client';
import React from "react";
import { ContentSection } from "../layout/ContentSection";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import PropTypes from 'prop-types';

export const ColumnImages = ({ headerText, columnImages, columnSize, className }) => {
    let gridClass;
    columnSize = Number(columnSize) || 3;
    if (columnImages && columnImages.length >= 1) {
        switch (columnSize) {
            case 1: gridClass = 'grid-cols-1'; break;
            case 2: gridClass = 'md:grid-cols-2'; break;
            case 3: gridClass = 'grid-cols-1 md:grid-cols-3'; break;
            case 4: gridClass = 'grid-cols-2 lg:grid-cols-4'; break;
            default: gridClass = 'grid-cols-1';
        }
    }

    return (
        <>
            <ContentSection>
                <section className={`section-padded ${className}`}>
                    <div className="flex flex-col justify-start items-center gap-7">
                        {headerText && (<h2 className="my-0">{headerText}</h2>)}
                        {columnImages && columnImages.length > 0 && (
                            <div className={`grid ${gridClass} self-stretch lg:self-center justify-start items-center lg:justify-items-center gap-8 md:gap-10 lg:gap-12 xl:gap-16`}>
                                {columnImages.map((image, index) => {
                                    const delay = index * .2; 
                                    return (
                                        <AnimatePresence key={index}>
                                            <motion.div
                                                initial={{ scale: .5, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: .5, delay: delay }}
                                                className="">
                                                <Image src={image.src} alt={image.alt} width={450} height={0} className="w-auto max-w-full h-auto max-h-40" />
                                            </motion.div>
                                        </AnimatePresence>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </section>
            </ContentSection>
        </>
    );
}

ColumnImages.propTypes = {
    headerText: PropTypes.string,
    columnImages: PropTypes.array,
    columnSize: PropTypes.number,
    className: PropTypes.string,
}