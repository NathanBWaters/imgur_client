/*
 *
 * TestContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectTestContainer from './selectors';
import styles from './styles.css';

export class TestContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.testContainer}>
        <Helmet
          title="TestContainer"
          meta={[
            { name: 'description', content: 'Description of TestContainer' },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = selectTestContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
