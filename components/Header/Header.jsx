import React, { useState } from 'react';
import style from './Header.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
    const router = useRouter();
    const [active, setActive] = useState(router.pathname);
    return (
        <div className="mt-2">
            <div className='overflow-auto'>
            <div className="header container">
                <ul className={`nav justify-content-start ` + `${style.tabBar}`} >
                    <li
                        className={
                            `${style.tabItem}` + ' nav-item ' + (active === '/dashboard' && `${style.active}`)
                        }
                        onClick={() => {
                            setActive('/dashboard');
                            router.push('/dashboard');
                        }}
                    >
                        <a
                            className={`nav-link axiformaMedium  ${style.fontSize18} ` + (active === '/dashboard' && `${style.activeText}`)}
                            aria-current="page"
                        >
                            Dashboard
                        </a>
                        <span className={`nav-link  ${style.fontSize14} pt-0`}>
                            Summary & History
                        </span>
                    </li>
                    <li
                        className={
                            `${style.tabItem}` + ' nav-item ' + (active === '/project' && `${style.active}`)
                        }
                        onClick={() => {
                            setActive('/project');
                            router.push('/project');
                        }}
                    >
                        <a className={`nav-link axiformaMedium  ${style.fontSize18} ` + (active === '/project' && `${style.activeText}`)}>Project</a>
                        <span className={`nav-link  ${style.fontSize14} pt-0`}>
                            Inquiries and Projects
                        </span>
                    </li>
                    <li
                        className={
                            `${style.tabItem}` + ' nav-item ' + (active === '/messages' && `${style.active}`)
                        }
                        onClick={() => {
                            setActive('/messages');
                            router.push('/messages');
                        }}
                    >
                        <a className={`nav-link axiformaMedium ${style.fontSize18} ` + (active === '/messages' && `${style.activeText}`)}>Messages</a>
                        <span className={`nav-link  ${style.fontSize14} pt-0`}>
                            Chat box
                        </span>
                    </li>
                    <li
                        className={
                            `${style.tabItem}` + '  nav-item ' + (active === '/profile' && `${style.active}`)
                        }
                        onClick={() => {
                            setActive('/profile');
                            router.push('/profile');
                        }}
                    >
                        <a className={`nav-link axiformaMedium ${style.fontSize18} ` + (active === '/profile' && `${style.activeText}`)}>Profile</a>
                        <span className={`nav-link  ${style.fontSize14} pt-0`}>
                            Account Information
                        </span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;
