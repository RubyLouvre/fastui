'use strict'

var React = require('react-native')
var {StyleSheet} = React

// ui
var Spinner = require('react-native-spinner')

var Fastui = {
    spinner: function(){
        return <Spinner style={styles.commonStyle}/>
    }
}

var styles = StyleSheet.create({
    commonStyle: {
        backgroundColor: 'fff'
    },
})

module.exports = Fastui