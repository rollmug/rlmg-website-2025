import React from 'react';
import Image from "next/image";
import PropTypes from 'prop-types';
import Link from 'next/link';

export const Navbar = ({ img = null, orgName, listItems, fixed = false }) => {

    /**
     * logo
     * fallback text (no logo) from short name in cms
     * links list with urls
     * { pathname: '/', query: { path: '/story/ui-elements-navbar--navigation' }
     */

    return (
        <>
            <header className={`${fixed ? 'fixed' : 'absolute'} top-0 left-0 bg-white shadow-md flex w-screen`}>
                <nav className="navbar max-w-screen-lg w-full mx-auto justify-between min-h-12 lg:min-h-16 py-0 lg:py-3">
                    <div className="flex-1">
                        <Link href="/" className="btn btn-link text-xl flex items-center py-[6px] lg:py-0">
                            {img ? (
                                <Image src={img} alt="RLMG Logo" width={40} height={40} className="h-full w-auto" />
                            ) : <span className="text-lg">{orgName}</span>
                            }
                        </Link>
                    </div>
                    <div className="navbar-center hidden">
                        {/* optional centered content */}
                    </div>
                    <div className="flex-none">
                        <details className="dropdown static lg:hidden">
                            <summary tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg className="h-6 w-7 text-primary" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="h-8 w-full" x="80" y="96" fill="currentColor" />
                                    <rect className="h-8 w-full" x="80" y="240" fill="currentColor" />
                                    <rect className="h-8 w-full" x="80" y="384" fill="currentColor" />
                                </svg>
                            </summary>
                            <ul tabIndex={0} className="text-sm left-0 mt-0 w-full dropdown-content menu menu-sm bg-base-100 z-[1 p-0 shadow-md [&_li>*]:rounded-none">
                                {listItems.map((item, index) => (
                                    <li key={index} className="text-sm">
                                        <Link href={item.url}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </details>

                        <ul className="menu menu-horizontal hidden lg:flex gap-12">
                            {listItems.map((item, index) => (
                                <li key={index} className="text-sm">
                                    <Link href={item.url}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                </nav>
            </header>
        </>
    );
};

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