import React from 'react';
import PropTypes from 'prop-types';
import './Base.css';

const Base = ({
  contentChildren,
}) => (
  <div className="parent">
    {contentChildren}
  </div>
);

Base.propTypes = {
  contentChildren: PropTypes.shape({}).isRequired,
};

export default Base;
