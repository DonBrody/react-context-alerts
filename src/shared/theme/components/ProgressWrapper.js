import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  bar: {
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
  },
  progress: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0,
  },
};

const defaultStyle = {
  position: 'relative',
  width: '100%',
  height: 4,
};

class ProgressWrapper extends Component {
  state = {
    progressWidth: 100,
  };

  componentDidMount() {
    this.setState({ progressWidth: 0 });
  }

  render() {
    const { barColor, progressColor, timeout, style, classes } = this.props;
    return (
      <div
        style={{ ...defaultStyle, ...style}}
      >
        <div className={classes.bar} style={{ background: barColor }} />
        <div
          className={classes.progress}
          style={{
            width: `${this.state.progressWidth}%`,
            background: progressColor,
            transition: `width ${timeout}ms linear`,
          }}
        />
      </div>
    );
  }
}

ProgressWrapper.propTypes = {
  barColor: PropTypes.string,
  progressColor: PropTypes.string,
  timeout: PropTypes.number,
  style: PropTypes.object,
};

ProgressWrapper.defaultProps = {
  barColor: '#90CAF9',
  progressColor: '#1976D2',
  timeout: 100,
  style: {},
};

export default withStyles(styles)(ProgressWrapper);
