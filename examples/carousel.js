'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, Image} from 'react-native';

// fastui
var fastui = require('../src/ui.js'),
    Carousel = fastui.Carousel

class xCarousel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Carousel>
                    <View style={styles.page}>
                        <Image
                            style={styles.img}
                            source={{uri: 'http://7xkm02.com1.z0.glb.clouddn.com/page1.png'}}
                        />
                    </View>
                    <View style={styles.page}>
                        <Image
                            style={styles.img}
                            source={{uri: 'http://7xkm02.com1.z0.glb.clouddn.com/page2.png'}}
                        />
                    </View>
                    <View style={styles.page}>
                        <Image
                            style={styles.img}
                            source={{uri: 'http://7xkm02.com1.z0.glb.clouddn.com/page3.png'}}
                        />
                    </View>
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
    },
    page: {
        width: 320,
        flex: 1,
        alignItems: 'stretch',
    },
    img: {
        flex:1,
    },
});

module.exports = xCarousel
