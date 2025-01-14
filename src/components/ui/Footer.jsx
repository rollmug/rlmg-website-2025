import React from "react";
import PropTypes from 'prop-types';
import { Logo } from "./Logo";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { BulletList } from "../typography/BulletList";

export const Footer = ({ logoImg, orgName, email, address, listItems, socialLinks, className }) => {
    return (
        <footer className={`py-4 ${className}`}>
            <section className="section-padded">
                <div className="flex w-full flex-col lg:flex-row items-stretch lg:justify-between lg:items-start gap-4 lg:gap-10">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-12 flex-1">
                        <div className="pl-2 lg:pl-0">
                            <Logo img={logoImg} orgName={orgName} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="my-0 font-extrabold text-xl lg:text-2xl text-primary">{email}</h3>
                            <p className="my-0 text-sm lg:text-sm2">{address}</p>
                            <SocialMediaIcons links={socialLinks} className="my-2" size="medium" />
                        </div>
                    </div>
                    {/* border border-warning flex flex-row justify-start items-start shrink grow flex-wrap */}
                    {/* basis-1/2 */}
                    {/* https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/ */}
                    <div className="flex flex-col gap-4 flex-0 pb-4 lg:pb-0 lg:px-8 xl:px-10">
                        <BulletList bullets={false} textSize="small" spacing="looser" listItems={listItems} className={``} />
                    </div>
                    <div className="flex flex-col gap-6 lg:gap-10 flex-1">
                        <div className="flex flex-col gap-4">
                            <h3 className="my-0">Subscribe to Our Newsletter</h3>
                            <p className="my-0">Enter Email*</p>
                        </div>
                        <div className="lg:self-end">
                            <p className="text-xs">&copy; 2025 {orgName}</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

Footer.propTypes = {
    logoImg: PropTypes.string,
    orgName: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
    })),
    socialLinks: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        url: PropTypes.string,
    })),
    className: PropTypes.string,
}

Footer.defaultProps = {
    logoImg: '',
    orgName: 'RLMG',
    email: 'hello@rlmg.com',
    address: '70 Coolidge Hill Road, Watertown, MA 02472',
    listItems: [
        { text: 'About Us', url: '/about' },
        { text: 'Services', url: '/services' },
        { text: 'Portfolio', url: '/portfolio' },
        { text: 'Contact', url: '/contact' },
    ],
    socialLinks: [
        { platform: 'linkedin', displayText: 'LinkedIn', url: 'https://www.linkedin.com/company/rlmg' },
        { platform: 'facebook', displayText: 'Facebook', url: 'https://www.facebook.com/rlmg' },
        { platform: 'instagram', displayText: 'Instagram', url: 'https://www.instagram.com/rlmg' },
        { platform: 'twitter', displayText: 'Twitter', url: 'https://www.twitter.com/rlmg' },
    ],
    className: '',
}