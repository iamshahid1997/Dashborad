import React, { PureComponent } from 'react';
import Styles from './divider.module.css';

class Divider extends PureComponent {
  render() {
    return (
      <div className = {Styles.divider} />
    );
  }
}

export default Divider;
