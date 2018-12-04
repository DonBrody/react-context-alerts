import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const defaultStyle = (theme) => ({
  button: {
    fontSize: '0.65em',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.75em',
    },
  },
});

const ActionButton = props => (
  <Button
    className={props.classes.button}
    style={props.style}
    color="inherit"
    onClick={props.onClick}
    variant="text"
  >
  {props.text}
  </Button>
);

ActionButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

ActionButton.defaultProps = {
  text: '',
  onClick: () => {},
  style: {},
};

export default withStyles(defaultStyle)(ActionButton);
