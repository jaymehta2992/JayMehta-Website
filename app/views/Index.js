import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Hello there.</Link></h2>
        </div>
      </header>
      <p>
        Hi, welcome. I&apos;m Jay Mehta (I also go by Jay). For one more thrilling
        year, I will be finishing my post-graduation in Computer Science at
        Centennial College
        <br></br> 
        <br></br>
        Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="\Resume_JayMehta_IT.pdf">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
