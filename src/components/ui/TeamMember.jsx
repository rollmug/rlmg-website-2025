'use client';

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const formatImageURL = (image, presetKey) => {
    return `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/${image.id}/${encodeURIComponent(image.filename_download)}${presetKey ? `?key=${presetKey}` : ''}`;
};

export const TeamMember = ({ firstName, lastName, jobTitle, photo, bio }) => {
    const photoUrl = typeof photo === 'object' ? formatImageURL(photo) : photo;
    // min-w-44 lg:min-w-56

    const transition = { duration: 1, ease: [.25, .1, .25, 1], delay: .25 };
    const variants = {
        hidden: { filter: "blur(10px)", transform: "translateY(1rem)", opacity: 0 },
        visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
    };

    return (
        <>
            <div className="team-member flex flex-col w-full">
                <div className="_aspect-w-3 _aspect-h-4 _slanted-top-slightly">
                    <motion.div initial={variants.hidden} whileInView={variants.visible} transition={transition} className="relative aspect-w-3 aspect-h-4 slanted-top-slightly">
                        <Image fill src={photoUrl} alt={`${firstName} ${lastName}`} className="object-cover object-center cursor-pointer transition-all duration-500 ease-in-out grayscale hover:grayscale-0" />
                    </motion.div>
                </div>
                <h3 className="text-sm2/4 lg:text-lg/4 mt-2 lg:mt-4 mb-1">{firstName} {lastName}</h3>
                <p className="my-0 text-sm2 hidden md:block">{jobTitle}</p>
                {/* <p>{bio}</p> */}
            </div>
        </>
    );
};

export const sampleMember = {
    "firstName": "Richard",
    "jobTitle": "Founder",
    "lastName": "Lewis",
    "bio": "",
    "photo": {
        "__typename": "directus_files",
        "id": "34dd5344-1489-46f4-8692-e9e089940d5a",
        "filename_disk": "34dd5344-1489-46f4-8692-e9e089940d5a.jpg",
        "filename_download": "2017_0426_021227.jpg"
    }
};