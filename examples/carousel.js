/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View} from 'react-native';

// fastui
var fastui = require('../src/ui.js'),
    Carousel = fastui.Carousel

var imgs = [
    'http://7xkm02.com1.z0.glb.clouddn.com/1.jpeg',
    'http://7xkm02.com1.z0.glb.clouddn.com/2.jpeg',
    'http://7xkm02.com1.z0.glb.clouddn.com/3.jpeg',
    'http://7xkm02.com1.z0.glb.clouddn.com/4.jpeg',
    'http://7xkm02.com1.z0.glb.clouddn.com/5.jpeg',
]
class xCarousel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Carousel imgs={imgs}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
        paddingTop: 64,
    }
});

module.exports = xCarousel
