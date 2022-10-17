import PropTypes from 'prop-types';

export const Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = PropTypes.objectOf(
  PropTypes.string.isRequired
).isRequired;
