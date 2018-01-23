import React from 'react';
import './Collaborators.styles.css';
import PropTypes from 'prop-types'

const Collaborators = ({ names }) => (
  <div className="Collaborators d-flex flex-column">
    <label>Collaborators</label>
    <select name="collaborators" size="3" className="form-control" multiple readOnly>
      {
        names.map(name =>
          <option key={name}>{name}</option>
        )
      }
    </select>
  </div>
)

Collaborators.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Collaborators;
