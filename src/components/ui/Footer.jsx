import React from "react";
import PropTypes from 'prop-types';
import { Logo } from "./Logo";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { BulletList } from "../typography/BulletList";

import { HiArrowLongRight } from "react-icons/hi2";

export const Footer = ({ logoImg, orgName, email, address, listItems, socialLinks, className }) => {
    return (
        <footer className={`py-4 ${className}`}>
            <section className="section-padded">
                <div className="flex w-full flex-col lg:flex-row items-stretch lg:justify-between gap-4 lg:gap-10">

                    {/* colum one */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-12 flex-1">
                        <div className="pl-2 lg:pl-0">
                            <Logo img={logoImg} orgName={orgName} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="my-0 font-extrabold text-xl lg:text-2xl text-primary">{email}</h3>
                            <p className="my-0 text-sm lg:text-sm2 xl:text-nowrap">{address}</p>
                            <SocialMediaIcons links={socialLinks} className="my-2" size="medium" />
                        </div>
                    </div>

                    {/* column two */}
                    <div className="flex-0 pb-4 lg:pb-0 lg:px-8 xl:px-10 order-3 lg:order-2">
                        <BulletList bullets={false} textSize="small" spacing="looser" listItems={listItems} className={``} columns={2} columnsOnMobile={true} />
                    </div>

                    {/* column three */}
                    <div className="flex flex-col justify-between gap-6 lg:gap-10 flex-1 lg:order-3 xl:px-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="my-0">Subscribe to Our Newsletter</h3>
                            
                            <div className="flex flex-row items-center justify-between gap-2 border-b border-base-300 mb-6 lg:mb-4">
                                <div className="flex-1">
                                    <input type="email" placeholder="Enter Email*" className="input input-sm input-ghost p-1 pl-0 h-auto w-full max-w-full " />
                                </div>
                                <button className="btn btn-ghost text-right !px-1">
                                    <HiArrowLongRight className="text-primary w-6 h-6" />
                                </button>
                            </div>
                        </div>
                        <div className="lg:self-end hidden lg:block">
                            <p className="text-xs my-0">&copy; 2025 {orgName}</p>
                        </div>
                    </div>

                    <div className="order-4 block mt-6 lg:hidden">
                        <p className="text-xs my-0">&copy; 2025 {orgName}</p>
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