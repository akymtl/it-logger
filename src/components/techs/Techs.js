import React, { useRef, useEffect } from 'react';
import { object, func } from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import TechItem from './TechItem';
import Preloader from '../layout/Preloader';
import { getTechs, searchTechs } from '../../actions/techActions';

const Techs = ({ tech: { techs, loading }, getTechs, searchTechs }) => {
  const text = useRef('');

  useEffect(() => {
    getTechs();
  }, [getTechs]);

  const onChange = () => {
    searchTechs(text.current.value);
  };

  const onClose = () => {
    text.current.value = '';
    searchTechs(text.current.value);
  };

  return loading || techs === null ? (
    <Preloader />
  ) : (
    <>
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <ul className='collection with-header container'>
              <li className='collection-header'>
                <div className="row">
                  <h4 className='left col s6'>Technician</h4>
                  <form className="right col s6">
                    <div className='input-field'>
                      <input
                        type='search'
                        placeholder='Search Technician'
                        ref={text}
                        onChange={onChange}
                      />
                      <i className='material-icons' onClick={onClose}>close</i>
                    </div>
                  </form>
                </div>
              </li>
              {!loading && !techs.length ? (
                <p className='center'>No techs to show</p>
              ) : (
                techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
              )}
              <li className='collection-item center-align'>
                <Link to="/add-tech" className="waves-effect waves-light btn">Add Tech</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

Techs.propTypes = {
  tech: object.isRequired,
  getTechs: func.isRequired,
};

const mapStateToProps = ({ tech }) => ({
  tech,
});

export default connect(mapStateToProps, { getTechs, searchTechs })(Techs);