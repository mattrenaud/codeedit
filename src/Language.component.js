import React from 'react'
import PropTypes from 'prop-types'

import './Language.styles.css';

const { keys } = Object;

const opts = {
  JavaScript: 'javascript',
  HTML: 'htmlmixed',
  CSS: 'css',
  SASS: 'sass',
  Java: 'clike',
  PHP: 'php'
}

const Language = ({ onSelect, selection }) => (
  <div className="Language d-flex flex-column">
    <label>Language</label>
    <select
      name="language"
      className="form-control"
      onChange={({ target }) => onSelect(target.value)}
      value={selection}>
      {
        keys(opts)
          .map(key =>
            <option key={opts[key]} value={opts[key]}>{key}</option>
          )
      }
    </select>
  </div>
)

Language.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selection: PropTypes.string.isRequired,
}

export default Language







