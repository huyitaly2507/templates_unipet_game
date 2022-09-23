/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import logo from '../../../assets/images/logo-Unipet.png';
import fbIcon from '../../../assets/images/FB_icon.png';
import discordIcon from '../../../assets/images/Discord_icon.png';
import telegramIcon from '../../../assets/images/Telegram_icon.png';
import ytIcon from '../../../assets/images/YT_icon.png';
import tiktokIcon from '../../../assets/images/Tiktok_icon.png';

const socialList = [
    {
        icon: fbIcon,
        path: 'https://www.facebook.com',
    },
    {
        icon: discordIcon,
        path: 'https://www.discord.com',
    },
    {
        icon: telegramIcon,
        path: 'https://www.telegram.com',
    },
    {
        icon: ytIcon,
        path: 'https://www.youtube.com',
    },
    {
        icon: tiktokIcon,
        path: 'https://www.tiktok.com',
    },
];

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="footer__link">
                <div className="footer__link__item">PRIVACY POLICY</div>
                <div className="footer__link__item">TERMS OF SALE</div>
                <div className="footer__link__item">EMAIL</div>
                <div className="footer__link__item">CONTRACTS</div>
                <div className="footer__link__item">WHITE PAPER</div>
            </div>
            <div className="footer__social">
                {socialList.map((item, index) => (
                    <a key={index} href={item.path} className="footer__social__item">
                        <img src={item.icon} alt="" />
                    </a>
                ))}
            </div>
        </div>
    );
}
