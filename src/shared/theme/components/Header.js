import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const defaultStyle = theme => ({
  typography: {
    fontSize: '1.1em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25em',
    },
  },
});

const Header = props => (
  <Typography
    className={props.classes.typography}
    style={props.style}
    component="h5"
    variant="h6"
    color="inherit"
  >
    {props.text}
  </Typography>
);

Header.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
};

Header.defaultProps = {
  text: null,
  style: {},
};

export default withStyles(defaultStyle)(Header);
