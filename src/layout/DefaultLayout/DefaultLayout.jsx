import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './default-layout.scss';

export default function DefaultLayout({ children }) {
    return (
        <div className="default-layout">
            <div className="main">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
}
