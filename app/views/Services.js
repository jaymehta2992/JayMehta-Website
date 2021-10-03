import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Services/Education';
import Experience from '../components/Services/Experience';
import References from '../components/Services/References';

import degrees from '../data/services/degrees';
import positions from '../data/services/positions';

const sections = [
  'Web Development',
  'Mobile App Development',
  // 'Skills',
  // 'Courses',
  'General Programming',
];

const Services = () => (
  <Main>
    <Helmet title="Services" />
    <article className="post" id="services">
      <header>
        <div className="title">
          <h2><Link to="services">Services</Link></h2>
          <div className="link-container">
            {sections.map(sec => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <References />

    </article>
  </Main>
);

export default Services;
