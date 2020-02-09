import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ text }) => (
  <li
      style={{textDecoration: 'none'}}
  >
    {text}
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo