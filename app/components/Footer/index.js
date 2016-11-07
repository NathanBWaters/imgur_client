/**
*
* Footer
*
*/

import React from 'react';

import styles from './styles.css';
import { Button, Grid, Col } from 'react-bootstrap';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  // have to have constructor function if you want to work with component state.
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      button_clicked: false,
    };

    // bind the component methods
    this.buttonClicked = this.buttonClicked.bind(this);
    this.revealHiddenMessage = this.revealHiddenMessage.bind(this);
  }

  // buttonClicked is called when the Button is clicked. 
  buttonClicked() {
    this.setState({
      button_clicked: true
    })
  }

  // when the component state "button_clicked" === true then it will return 
  // the hidden message.
  // revealHiddenMessage is called each time the component is rendered, which 
  // happens each time the component state is changed
  revealHiddenMessage() {
    if (this.state.button_clicked) {
      return <p>Yep, Michael Giacchino rocks!</p>;
    } else {
      return <p></p>
    } 
  }

  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-bottom">
        <Grid>
          <Col className={styles.column} xs={4} md={4} >
            <p className={styles.footer}>This is the footer! Click the button 
            if you love the theme music from the movie "Up"</p>
          </Col>
          <Col className={styles.column} xs={4} md={4} >
            <Button onClick={ this.buttonClicked } type="button">I do!</Button>
          </Col>
          <Col className={styles.column} xs={4} md={4} >
            {this.revealHiddenMessage()}
          </Col>
        </Grid>
    </div>
    );
  }
}

export default Footer;
