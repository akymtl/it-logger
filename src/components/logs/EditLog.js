import React, { useState, useEffect } from 'react';
import { object, func } from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';

import { updateLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const EditLog = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.attention);
    }
  }, [current]);

  const onSubmit = async () => {
    if ([message, tech].includes(''))
      M.toast({ html: 'Please enter a message & tech' });
    else {
      await updateLog({
        message,
        attention,
        tech,
        date: new Date(),
        id: current.id,
      });

      navigate('/logs');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card">
            <div className="card-content">
              <span className="card-title center">Enter System Log</span>
              <div className='row'>
                <div className='input-field'>
                  <input
                    type='text'
                    name='message'
                    value={message}
                    onChange={(evt) => setMessage(evt.target.value)}
                  />
                </div>
                <div className='input-field'>
                  <select
                    name='tech'
                    value={tech}
                    className='browser-default'
                    onChange={(evt) => setTech(evt.target.value)}
                  >
                    <option value='' disabled>
                      Select Technician
                    </option>
                    <TechSelectOptions />
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='input-field'>
                  <p>
                    <label>
                      <input
                        type='checkbox'
                        className='filled-in'
                        checked={attention ? 1 : 0}
                        value={attention}
                        onChange={() => setAttention(!attention)}
                      />
                      <span>Needs Attention</span>
                    </label>
                  </p>
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

EditLog.propTypes = {
  current: object,
  updateLog: func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLog);
