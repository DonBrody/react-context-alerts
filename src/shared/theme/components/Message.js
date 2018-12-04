import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const defaultStyle = theme => ({
  typography: {
    fontSize: '0.85em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.0em',
    },
  },
});

const Message = props => (
  <Typography
    className={props.classes.typography}
    style={props.style}
    component="p"
    variant="body1"
    color="inherit"
  >
    {props.text}
  </Typography>
);

Message.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
};

Message.defaultProps = {
  text: null,
  style: {},
};

export default withStyles(defaultStyle)(Message);
