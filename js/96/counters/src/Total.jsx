import React from 'react'
import PropTypes from 'prop-types'

export default function Total(props) {
  return (
    <div>Total {props.total}</div>
  )
}

Total.propTypes = {
  total: PropTypes.number.isRequired
};
