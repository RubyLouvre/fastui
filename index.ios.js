/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Fastui = require("./src/ui"),
    Spinner = Fastui.spinner

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var fastui = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          spinner
        </Text>
        <Spinner />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('fastui', () => fastui);
