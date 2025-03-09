import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import Home from '../sections/Home/Home-welcome.js';
import Section from '../sections/Sections.js';
import About from '../sections/About/About.js';
import Contact from '../sections/Contact/Contact.js';
import Service from '../sections/Service/Service.js';
import Product from '../sections/Product/Product.js';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Section} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Service" component={Service} />
          <Route path="/Product" component={Product} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
