import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import Home from '../sections/Home/Home.js';
import About from '../sections/About/About.js';
import Contact from '../sections/Contact/Contact.js';
import Service from '../sections/Service/Service.js';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Service" component={Service} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
