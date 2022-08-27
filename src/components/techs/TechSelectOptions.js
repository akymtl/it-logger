import React, { useEffect } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';

import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, [getTechs]);

  return (
    !loading && techs !== null && techs.map(({ id, firstName, lastName }) => (
      <option key={id} value={`${firstName} ${lastName}`}>
        {firstName} {lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  tech: object.isRequired,
  getTechs: func.isRequired,
};

const mapsStateToProps = ({ tech }) => ({
  tech,
});

export default connect(mapsStateToProps, { getTechs })(TechSelectOptions);
