import React from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '~/assets/images/logo-Unipet.png';
import homeIcon from '../../../assets/images/home_icon.png';
import playIcon from '../../../assets/images/play_icon.png';
import boxIcon from '../../../assets/images/box_icon.png';
import marketIcon from '../../../assets/images/market_icon.png';

const navLeft = [
    {
        icon: homeIcon,
        display: 'Homes',
        path: '/',
    },
    {
        icon: playIcon,
        display: 'Play',
        path: '/play',
    },
];

const navRight = [
    {
        icon: boxIcon,
        display: 'Box',
        path: '/box',
    },
    {
        icon: marketIcon,
        display: 'Market',
        path: '/market',
    },
];

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__left">
                        {navLeft.map((item, index) => (
                            <div key={index} className="header__menu__item header__menu__left__item">
                                <NavLink to={item.path} className={({ isActive }) => `${isActive ? 'active' : ''}`}>
                                    <img src={item.icon} alt="" />
                                    <span>{item.display}</span>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__right__wrapper">
                            {navRight.map((item, index) => (
                                <div key={index} className="header__menu__item header__menu__right__item">
                                    <NavLink to={item.path} className={({ isActive }) => `${isActive ? 'active' : ''}`}>
                                        <img src={item.icon} alt="" />
                                        <span>{item.display}</span>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
