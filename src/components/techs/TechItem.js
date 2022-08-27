import React from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDelete = (id) => {
    deleteTech(id);
    M.toast({ html: `${firstName} ${lastName} technician deleted` });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <span className='secondary-content' onClick={() => onDelete(id)}>
          <i className='material-icons grey-text'>delete</i>
        </span>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: object.isRequired,
  deleteTech: func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
