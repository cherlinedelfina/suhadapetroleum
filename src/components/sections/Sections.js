import React, { Fragment } from 'react';

import Home from './Home/Home-welcome';
import About from './Home/Home-about';
import Project from './Home/Home-projects';
import Certificate from './Home/Home-certificate';
import Client from './Home/Home-client';


const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Certificate />
      <Project />
      <Client />
     
    </Fragment>
  );
};

export default sections;
