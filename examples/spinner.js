'use strict';

var React = require('react-native');

var {
    View,
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    SwitchIOS,
} = React;

// fastui
var fastui = require('../src/ui.js'),
    Spinner = fastui.Spinner

var Form = React.createClass({
    getInitialState: function () {
        return {
            step: '2',
            disabled: false,
            spinnerVal: '5',
            settedSpinnerVal: '5'
        }
    },
    getSpinnerValue: function(val){
        this.setState({spinnerVal: val})
    },
    render: function () {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Spinner
                    value={this.state.spinnerVal}
                    step={this.state.step}
                    disabled={this.state.disabled}
                    onChange={this.getSpinnerValue}
                />

                <View style={styles.operation}>
                    <Text>设置step</Text>
                    <TextInput
                        style={[styles.opeComponent, styles.input]}
                        onChangeText={(text) => this.setState({step: text})}
                        value={this.state.step}
                    />
                </View>

                <View style={styles.operation}>
                    <Text>Set value</Text>
                    <TextInput
                        style={[styles.opeComponent, styles.input]}
                        onChangeText={(text) => this.setState({spinnerVal: text})}
                        value={String(this.state.settedSpinnerVal)}
                    />
                </View>

                <View style={styles.operation}>
                    <Text>Get value</Text>
                    <Text style={styles.opeComponent}>
                        {this.state.spinnerVal}
                    </Text>
                </View>

                <View style={styles.operation}>
                    <Text>设置disabled</Text>
                    <SwitchIOS
                        style={styles.opeComponent}
                        onValueChange={(value) => this.setState({disabled: value})}
                        value={this.state.disabled} />
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingLeft: 10,
        paddingRight: 10
    },
    operation: {
        marginTop: 20
    },
    opeComponent: {
        marginTop: 5
    },
    input: {
        height: 30,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: 'gray',
        borderWidth: 1
    },
});

module.exports = Form
