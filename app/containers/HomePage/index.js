/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styles from './styles.css';
import { FETCH_GALLERY } from './constants';
import { Row, Grid, Col, Button } from 'react-bootstrap';


export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);

    // important to bind the _loadGallery method to container context
    // this is always done in the constructor
    this._loadGallery = this._loadGallery.bind(this);
    this._renderGallery = this._renderGallery.bind(this);

  }

  // when clicked, calls the Imgur API
  _loadGallery() {
    console.log("clicked _loadGallery");
    this.props.dispatch({type: FETCH_GALLERY});
  }

  // render the gallery of images
  _renderGallery() {
    if (this.props.gallery.data && this.props.gallery.data.length > 0){
      console.log("!!")
      const images = this.props.gallery.data.map((img_post) =>
        <Col xs={6} sm={6} md={6} className={ styles.img_post }>
          <h5 className={ styles.post_title }><b>{ img_post.title }</b></h5>
          <img className={styles.image} src = { img_post.link } />
          <p className={ styles.post_author }> - { img_post.link }</p>
        </Col>
      )
      return images
    } else{
      console.log("...")
    }
  }

  render() {
    return (
      <div className={styles.homePage2}>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        <h3>Gallery</h3>
        <Button onClick={this._loadGallery}>Load Gallery</Button>
        <Grid>
          <Row>
          { this._renderGallery() }
          </Row>
        </Grid>
      </div>
    );
  }
}

// this is getting the application state and mapping it to
// our props of the component, so we can render it easily
function mapStateToProps(state){
  console.log("state updated");
  const gallery = state.get('home')
  console.log(gallery);
  return {gallery: gallery};
}

// this allows us to dispatch actions to the reducers
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
