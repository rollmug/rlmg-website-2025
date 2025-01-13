import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from "./Button";

export const Banner = ({ bannerTextPlacement, bannerHeader, bannerSubheader, bannerCallToActionLink, bannerCallToActionText, bannerImage }) => {

    let justifyContent, bannerGradient;
    switch (bannerTextPlacement) {
        case 'top':
            justifyContent = 'justify-start pt-[15%] sm:pt-[12%] md:pt-[10%] lg:pt-[7%] xl:pt-[5%]';
            bannerGradient = 'bg-gradient-to-b h-2/3 lg:h-2/3 w-full top-0';
            break;
        case 'center':
            justifyContent = 'justify-center';
            bannerGradient = 'bg-gradient-to-r h-full w-2/3 lg:w-2/3 left-0';
            break;
        case 'bottom':
            justifyContent = 'justify-end pt-[10%]';
            bannerGradient = 'bg-gradient-to-t h-2/3 lg:h-2/3 w-full bottom-0';
            break
        default:
            justifyContent = 'justify-start pt-[15%] sm:pt-[12%] md:pt-[10%] lg:pt-[7%] xl:pt-[5%]';
            bannerGradient = 'bg-gradient-to-b h-2/3 lg:h-2/3 w-full top-0';
    }

    const classNames = [
        `${bannerImage ? 'min-h-[calc(70vh)]' : 'min-h-[calc(50vh)]'}  pb-14 sm:pb-24`, // mobile portrait
        'landscape:min-h-[calc(80vh)] landscape:pb-20', // mobile landscape
        'landscape:lg:pb-32', // tablet landscape
        'landscape:xl:pb-36',
    ];

    const className = classNames.join(' ');

    return (
        <>
            <div className={`relative bg-neutral slanted w-full flex flex-col  ${justifyContent} ${className} `}>
                {bannerImage && (
                    <div className="absolute inset-0 z-0">
                        <Image src={bannerImage} layout="fill" objectFit="cover" alt="" className={`object-left lg:object-center`} />
                        {(bannerHeader || bannerSubheader) && (
                            <div className={`${bannerGradient} from-black to-transparent absolute opacity-50`}></div>
                        )}
                    </div>
                )}
                <div className="section-padded z-[1]">
                    {bannerHeader && <h1 className={`${bannerSubheader ? 'smaller' : ''} md:max-w-screen-sm lg:max-w-screen-md lg:-translate-x-1`}>{bannerHeader}</h1>}
                    {bannerSubheader && <p className="text-white leading-normal lg:text-lg md:max-w-screen-sm lg:max-w-screen-md">{bannerSubheader}</p>}
                    {(bannerCallToActionLink && bannerCallToActionText) && <Button label={bannerCallToActionText} />}
                </div>


            </div>

        </>
    );
}

Banner.propTypes = {
    bannerTextPlacement: PropTypes.oneOf(['top', 'center', 'bottom']),
    bannerHeader: PropTypes.string,
    bannerSubheader: PropTypes.string,
    bannerCallToActionLink: PropTypes.string,
    bannerCallToActionText: PropTypes.string,
    bannerImage: PropTypes.string,
};

Banner.defaultProps = {
    bannerTextPlacement: 'center',
    bannerHeader: 'Banner Header',
    bannerSubheader: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
}