import Link from 'next/link';
import React from 'react';
import { usePage } from '../contexts/PageContext';

const pages = [
    {
        title: "Home",
        href: "/"
    }, {
        title: "Test",
        href: "/test"
    }, {
        title: "Subroute",
        href: "/test/testing-the-slug"
    }, {
        title: "Subroute 2",
        href: "/test/testing-the-slug-2"
    }, {
        title: "Server side",
        href: "/serverside"
    }, {
        title: "Join a room",
        href: "/joinroom"
    }, {
        title: "Test mongo",
        href: "/db"
    }
];

const Layout = ({ children }) => {
    const [page, setPage] = usePage();
    return (
        <div className="layout">
            <div className="menu">
                <ul>
                    {
                        pages.map(pageMenu => (
                            <li key={pageMenu.href}>
                                <Link href={pageMenu.href}>
                                    <a className={pageMenu.href == page ? "active" : ""} onClick={() => { setPage(pageMenu.href) }}>
                                        {pageMenu.title}
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="appbar">
                Next.js proj
            </div>
            <main className="content">
                {children}
            </main>
        </div>
    )
};

export default Layout;