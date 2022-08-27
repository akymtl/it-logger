import React from 'react';
import { object, func } from 'prop-types';
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteLog, setCurrent } from '../../actions/logActions';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = (id) => {
    deleteLog(id);
    M.toast({ html: 'Log deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <Link to="/edit-log" className={`${log.attention ? 'red-text' : 'blue-text'}`} onClick={() => setCurrent(log)}>
          {log.message}
        </Link>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <span className='secondary-content' onClick={() => onDelete(log.id)}>
          <i className='material-icons grey-text'>delete</i>
        </span>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: object.isRequired,
  deleteLog: func.isRequired,
  setCurrent: func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
