import React from 'react';
import  { object } from 'prop-types';
import Header from '../views/components/header/Header';
import Footer from '../views/components/footer/Footer';

const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

Layout.propTypes = {
    children: object.isRequired,

};
export default Layout;
