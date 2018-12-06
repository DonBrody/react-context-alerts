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

const Header = ({ style, text, classes }) => (
  <Typography
    className={classes.typography}
    style={style}
    component="h5"
    variant="h6"
    color="inherit"
  >
    {text}
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
