import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const defaultStyle = {
  position: 'absolute',
  top: 0, bottom: 0, left: 0,
};

class ProgressBar extends Component {
  state = {
    progressWidth: 100,
  };

  componentDidMount() {
    this.setState({ progressWidth: 0 });
  }

  render() {
    const { progressColor, timeout } = this.props;
    return (
      <div
        style={{
          ...defaultStyle,
          width: `${this.state.progressWidth}%`,
          background: progressColor,
          transition: `width ${timeout}ms linear`,
        }}
      />
    );
  }
};

ProgressBar.propTypes = {
  progressColor: PropTypes.string,
  timeout: PropTypes.number,
};

ProgressBar.defaultProps = {
  progressColor: '#1976D2',
  timeout: 5000,
};

export default ProgressBar;
