'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,
    ListView,
} = React;

var Form = require('./src/form')
var Spinner = require('./src/spinner')

var UIList = {
    Form: Form,
    Spinner: Spinner
}

var HomeScene = React.createClass({
    onPress: function(uiName){
        this.props.navigator.push({
            title: 'Form',
            component: UIList[uiName]
        });
    },
    getInitialState: function() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dataSource: ds.cloneWithRows(['Form', 'Spinner']),
      };
    },
    render() {
        return (
            <View style={[styles.scene]}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(uiItem) =>
                    <TouchableHighlight onPress={() => this.onPress(uiItem)} style={styles.uiItem}>
                        <Text>{uiItem}</Text>
                    </TouchableHighlight>}
                  />
            </View>
        );
    }
});

var ForTouchScene = React.createClass({
    getInitialState: function() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dataSource: ds.cloneWithRows(['Form', 'Spinner']),
      };
    },
    render() {
        return (
            <Form />
        );
    }
});

var fastui = React.createClass({
    render() {
        return (
            <NavigatorIOS ref="nav"
                style={styles.container}
                barTintColor="#7ecaf6"
                titleTextColor="#fff"
                tintColor="#fff"
                initialRoute={{
                    component: HomeScene,
                    title: 'Fastui',
                }}/>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scene: {
        flex: 1,
    },
    uiItem: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderRadius: 3,
        borderColor: '#ccc',
    },
    uiItemText: {
        fontSize: 17,
        color: '#5c6b76',
        backgroundColor: "#09c",
    }
});

AppRegistry.registerComponent('fastui', () => fastui);
