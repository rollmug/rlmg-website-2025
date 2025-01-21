import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Logo } from "./Logo";

export const Navbar = ({ img = null, orgName, listItems, fixed = false }) => {

    /**
     * logo
     * fallback text (no logo) from short name in cms
     * links list with urls
     * { pathname: '/', query: { path: '/story/ui-elements-navbar--navigation' }
     */

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <>
            <header className={`${fixed ? 'fixed' : 'absolute'} top-0 left-0 bg-white shadow-md flex w-screen z-[1]`}>
                <nav className="navbar section-padded justify-between min-h-14 lg:min-h-16 py-0 lg:py-3">
                    <div className="flex-1">
                        <Link href="/" className="btn btn-link text-xl !px-0 py-[6px] lg:py-0 text-left">
                            <Logo img={img} orgName={orgName} />
                        </Link>
                    </div>
                    <div className="navbar-center hidden">
                        {/* optional centered content */}
                    </div>
                    <div className="flex-none">
                        <div className="dropdown static lg:hidden">
                            <div tabIndex={0} role="button" className="!px-0 btn btn-ghost text-center lg:hidden" onClick={() => setMobileNavOpen((pv) => !pv)}>
                                <MenuIcon open={mobileNavOpen} />
                            </div>
                            <MobileLinks listItems={listItems} open={mobileNavOpen} />
                        </div>

                        <ul className="menu menu-horizontal hidden lg:flex gap-12">
                            <Links listItems={listItems} className="text-sm" />
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

const MenuIcon = ({ open }) => {

    if (open) {
        return (
            <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                        fill="currentColor"
                    ></path>
                </g>
            </svg>
        )
    } else {
        return (
            <svg className="h-6 w-7 _mr-[3px] -translate-x-[3px] text-primary" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <rect className="h-8 w-full" x="80" y="96" fill="currentColor" />
                <rect className="h-8 w-full" x="80" y="240" fill="currentColor" />
                <rect className="h-8 w-full" x="80" y="384" fill="currentColor" />
            </svg>
        )
    }
}

const MobileLinks = ({ listItems, open }) => {
    // if(!listItems || !listItems?.length) return null;
    return (
        <AnimatePresence mode="popLayout">
            {open && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    className=""
                >
                    <ul tabIndex={0} className="left-0 mt-0 !mx-0 w-full absolute menu menu-mobile menu-lg bg-base-100 z-[1 p-0 shadow-md [&_li>*]:rounded-none items-stretch text-center">
                        <Links listItems={listItems} />
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const Links = ({ listItems, className }) => {
    listItems = listItems && listItems.length > 0 ? listItems : [ { url: '/', text: 'Home'} ]; // fallback to home
    return (
        <>
            {listItems.map((item, index) => (
                <li key={index} className={className}>
                    <Link className="inline-block" href={item.url}>{item.text}</Link>
                </li>
            ))}
        </>
    );
}

Navbar.propTypes = {
    /** Image source for the logo */
    img: PropTypes.string,
    /** Organization name */
    orgName: PropTypes.string,
    /** List of navigation items */
    listItems: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    })),
    /** Fixed position at the top of the screen */
    fixed: PropTypes.bool
}

Navbar.defaultProps = {
    img: null,
    orgName: "RLMG",
    fixed: false,
}