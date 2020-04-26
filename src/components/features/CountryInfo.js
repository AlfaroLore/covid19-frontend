import React, { Fragment } from 'react';
import InfoCard from './InfoCard';
import Spinner from '../layout/Spinner';

export const CountryInfo = ({ country }) => {
  return (
    <Fragment>
      {country === null || country === undefined ? (
        <Spinner />
      ) : (
        <div>
          <InfoCard color={'red'} msg={'Critical'} number={country.critical} />
          <InfoCard color={'black'} msg={'Deaths'} number={country.deaths} />
          <InfoCard color={'green'} msg={'Recovered'} number={country.recovered} />
          <InfoCard color={'gray'} msg={'Confirmed'} number={country.confirmed} />
        </div>
      )}
    </Fragment>
  );
};

export default CountryInfo;
