'use strict';

var React = require('react-native');

// fastui
var fastui = require('../src/ui.js'),
    f = fastui.Form

var {
    View,
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
} = React;

var model = {
        studentName: {
            type: f.fieldType.String,
            label: "学生姓名",
            value: "Giulio",
            disabled: true,
            placeholder: "请填写姓名"
        },
        age: {
            type: f.fieldType.Number,
            label: "年龄",
            value: 18,
            placeholder: "请填写年龄"
        },
        password: {
            type: f.fieldType.Password,
            label: "密码",
            value: "",
            placeholder: "请填写密码"
        },
        year: {
            type: f.fieldType.Spinner,
            label: "入学年份",
            value: "2015",
        },
        rememberMe: {
            type: f.fieldType.Boolean,
            label: "记住我",
            value: true,
        }
    },
    Form = f.Form

var xForm = React.createClass({
    render: function() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Form model={model} ref="form"/>
                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#68CBE0'>
                    <Text style={styles.buttonText}>提交</Text>
                </TouchableHighlight>
            </View>
        );
    },
    onPress : function() {
        var value = this.refs.form.getValue();
        if (value) {
            alert(JSON.stringify(value));
        }
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
        paddingLeft: 10,
        paddingRight: 10,
    },
    button: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#26B4D3',
    },
    buttonText: {
        fontSize: 17,
        color: '#fff',
    },
});

module.exports = xForm
