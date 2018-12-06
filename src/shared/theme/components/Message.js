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

const Message = ({ text, style, classes }) => (
  <Typography
    className={classes.typography}
    style={style}
    component="p"
    variant="body1"
    color="inherit"
  >
    {text}
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
