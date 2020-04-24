import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Real Time Covid 19 data</h1>
          <p className="lead">
            Every 15 minutes updated statistic about Coronavirus. Stats by country are collected from several reliable
            sources. You can also see total stats.
          </p>
          <div className="buttons">
            <Link to="/country">Countries</Link>

            <Link to="/report">Reports</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
