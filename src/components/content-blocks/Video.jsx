import React from "react";
import Player from 'next-video/player';
import { ContentSection } from "../layout/ContentSection";

export const Video = ({ videoSrc, posterImage, blurDataURL, title, captionText }) => {
    return (
        <ContentSection>
            <section className={`w-full bg-neutral pt-12 md:pt-16 lg:pt-24 pb-20 md:pb-24 lg:pb-40`}>
                <Player src={videoSrc} poster={posterImage} blurDataURL={blurDataURL || null} />
            </section>
        </ContentSection>
    );
}