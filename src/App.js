import React, { useState } from 'react';
import Form from './Form';
import { info } from './info';

function App() {
  const [kids, setKids] = useState(info);
  const [details, setDetails] = useState({
    name: '',
    age: '',
    parents: '',
  });
  details.id = kids.length + 1;
  const handleChange = (e) =>
    setDetails({ ...details, [e.target.id]: e.target.value });
  const handleDel = (id) => setKids(kids.filter((kid) => kid.id !== id));
  const handlesubmit = (e) => {
    e.preventDefault();
    setKids([...kids, details]);
    setDetails({
      name: '',
      age: '',
      parents: '',
    });
  };
  return (
    <div className='container'>
      <div>
        <h5 className='center'>ID | Name | Age | Parents</h5>
        <hr />
        <div className='card-panel orange'>
          {kids.length ? (
            kids.map(({ id, name, age, parents }) => (
              <div className='card-panel' key={id}>
                <h5>
                  {id} | {name} | {age} | {parents}
                </h5>
                <div className='btns right'>
                  <button
                    className='btn btn-small red'
                    onClick={() => handleDel(id)}>
                    del
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h3 className="center white-text">Nothing</h3>
          )}
        </div>
      </div>
      <Form
        handleChange={handleChange}
        details={details}
        handleSubmit={handlesubmit}
      />
    </div>
  );
}

export default App;
