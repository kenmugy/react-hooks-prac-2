import React from 'react';

const Form = ({ details, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='card-panel'>
      <div className='input-field'>
        <input
          type='text'
          id='name'
          onChange={handleChange}
          value={details.name}
        />
        <label htmlFor='name'>Name</label>
      </div>
      <div className='input-field'>
        <input
          type='text'
          id='age'
          onChange={handleChange}
          value={details.age}
        />
        <label htmlFor='age'>age</label>
      </div>
      <div className='input-field'>
        <input
          type='text'
          id='parents'
          onChange={handleChange}
          value={details.parents}
        />
        <label htmlFor='parents'>Parents</label>
      </div>
      <div className='input-field'>
        <button className='btn green btn-small'>submit</button>
      </div>
    </form>
  );
};

export default Form;
