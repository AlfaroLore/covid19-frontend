import React, { useState } from 'react';
import { getInfoByCountry } from '../../actions/country';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CountryInfo } from './CountryInfo';
import Spinner from '../layout/Spinner';

const Country = ({ getInfoByCountry, country: { country: countryInfo, loading } }) => {
  const [formData, setFormData] = useState({
    countryName: null,
  });
  const { countryName } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    getInfoByCountry(countryName);
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Covid 19 info by country</h1>
      <small>Choose your country</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="countryName" value={countryName} onChange={onChange}>
            <option value="0">* Select Country</option>
            <option value="italy">Italy</option>
            <option value="spain">Spain</option>
            <option value="bolivia">Bolivia</option>
            <option value="argentina">Argentina</option>
            <option value="ecuador">Ecuador</option>
            <option value="usa">United States</option>
            <option value="china">China</option>
            <option value="taiwan">Taiwan</option>
          </select>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
      </form>
      {loading ? <Spinner /> : countryInfo !== null && <CountryInfo country={countryInfo} />}
    </section>
  );
};

Country.propTypes = {
  getInfoByCountry: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  country: state.country,
});

export default connect(mapStateToProps, { getInfoByCountry })(Country);
