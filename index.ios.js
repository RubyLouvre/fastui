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

var UIList = {
    Form: require('./examples/form'),
    Spinner: require('./examples/spinner'),
    Carousel: require('./examples/carousel'),
    Calendar: require('./examples/calendar'),
},
theme = require('./styles/theme')

var HomeScene = React.createClass({
    onPress: function(uiName){
        this.props.navigator.push({
            title: uiName,
            test: "my prop",
            component: UIList[uiName]
        });
    },
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(['Form', 'Spinner', 'Carousel', 'Calendar']),
        };
    },
    render() {
        return (
            <View style={[styles.scene]}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(uiItem) =>
                    <TouchableHighlight onPress={() => this.onPress(uiItem)} style={styles.uiItem} underlayColor='#eee'>
                        <Text style={styles.uiItemText}>{uiItem}</Text>
                    </TouchableHighlight>}
                  />
            </View>
        );
    }
});

var fastui = React.createClass({
    render() {
        return (
            <NavigatorIOS ref="nav"
                style={styles.container}
                barTintColor='#2db7f5'
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
    }
});

AppRegistry.registerComponent('fastui', () => fastui);
