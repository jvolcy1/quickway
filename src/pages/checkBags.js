import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Button from 'react-bootstrap/Button';

import data from "../redux/data.js";

function CheckBagsPage(props) {
  const { navigation, dispatch, dummyData } = props;

  const { navigate, goBack } = navigation;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  }

  return (
    <View
      style={styles.container}>
      <Button class={styles.button} variant="primary">Primary</Button>{' '}
      <Button class="button" variant="primary">Primary</Button>{' '}
      <Button class="button" variant="primary">Primary</Button>{' '}
    </View>
  );
}

function mapStateToProps(state) {
  const { dummyData } = state;
  return { dummyData };
}

export default connect(mapStateToProps)(CheckBagsPage)

const styles = StyleSheet.create({
  button: {
    marginVertical: 32
  }
});
