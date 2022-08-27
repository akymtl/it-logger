import React, { useRef, useEffect } from 'react';
import { object, func } from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { getLogs, searchLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs, searchLogs }) => {
  const text = useRef('');

  useEffect(() => {
    getLogs();
  }, [getLogs]);

  const onChange = () => {
    searchLogs(text.current.value);
  };

  const onClose = () => {
    text.current.value = '';
    searchLogs(text.current.value);
  };

  return loading || logs === null ? (
    <Preloader />
  ) : (
    <>
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <ul className='collection with-header'>
              <li className='collection-header'>
                <div className="row">
                  <h4 className='left col s6'>System Logs</h4>
                  <form className="col s6">
                    <div className='input-field'>
                      <input
                        type='search'
                        placeholder='Search Logs'
                        ref={text}
                        onChange={onChange}
                      />
                      <i className='material-icons' onClick={onClose}>close</i>
                    </div>
                  </form>
                </div>
              </li>
              {!loading && !logs.length ? (
                <p className='center'>No logs to show</p>
              ) : (
                logs.map((log) => <LogItem key={log.id} log={log} />)
              )}
              <li className='collection-item center-align'>
                <Link to="/add-log" className="waves-effect waves-light btn">Add Log</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

Logs.propTypes = {
  log: object.isRequired,
  getLogs: func.isRequired,
};

const mapStateToProps = ({ log }) => ({
  log,
});

export default connect(mapStateToProps, { getLogs, searchLogs })(Logs);