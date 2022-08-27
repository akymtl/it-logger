import React, { useState } from 'react';
import { func } from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';

import { addTech } from '../../actions/techActions';

const AddTech = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate()

  const onSubmit = async () => {
    if ([firstName, lastName].includes('')) {
      M.toast({ html: 'Please enter the firstName & lastName' });
    }
    else {
      await addTech({
        firstName,
        lastName,
      });
    }

    M.toast({ html: `${firstName} ${lastName} was added as a tech` });

    navigate('/techs');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card">
            <div className="card-content">
              <span className="card-title center">Enter Technician</span>
              <div className='row'>
                <div className='input-field'>
                  <input
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={(evt) => setFirstName(evt.target.value)}
                  />
                  <label htmlFor='firstName' className='active'>
                    First Name
                  </label>
                </div>
                <div className='input-field'>
                  <input
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={(evt) => setLastName(evt.target.value)}
                  />
                  <label htmlFor='lastName' className='active'>
                    Last Name
                  </label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <button
                className='modal-close waves-effect waves-green btn blue'
                onClick={onSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddTech.propTypes = {
  addTech: func.isRequired,
};

export default connect(null, { addTech })(AddTech);
