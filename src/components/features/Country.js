import React, { useState } from 'react';

const Country = () => {
  const [formData, setFormData] = useState({
    country: '',
  });
  const { country } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Covid 19 info by country</h1>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="country" value={country} onChange={onChange}>
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
    </section>
  );
};

export default Country;
