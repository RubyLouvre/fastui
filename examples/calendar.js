'use strict'
import React, {AppRegistry, Component, StyleSheet, View} from 'react-native';

// fastui
var fastui = require('../src/ui.js'),
    Calendar = fastui.Calendar

class CalendarDemo extends Component {
    render() {

        // prepare options
        const today = new Date(),
            todayStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            aWeekLater = new Date(today.getTime() +  7 * 24 * 60 * 60 * 1000),
            aWeekLaterStr = aWeekLater.getFullYear() + '-' + (aWeekLater.getMonth() + 1) + '-' + aWeekLater.getDate()

        // Options
        const holiday = {
                '2016-01-01': '元旦',
                '2016-02-07': '除夕',
                '2016-02-08': '春节',
                '2016-02-22': '元宵节',
                '2016-04-03': '清明节',
                '2016-05-01': '劳动节',
                '2016-06-09': '端午节',
            },

            active = {
                [todayStr]: 'fill',
                [aWeekLaterStr]: 'fill',
                ['2016-03-05']: 'border',
                ['2016-04-10']: 'border',
                ['2016-04-25']: 'border',
                ['2016-05-05']: 'border',
                ['2016-06-25']: 'border',
            },

            note = {
                [todayStr]: '出发',
                [aWeekLaterStr]: '返程',
                ['2016-03-05']: '特价',
                ['2016-04-10']: '特价',
                ['2016-04-25']: '特价',
                ['2016-05-05']: '特价',
                ['2016-06-25']: '特价',
            }

        return (
            <View style={styles.container}>
                <Calendar
                    holiday={holiday}
                    active={active}
                    note={note}
                    startTime='2016-01-01'
                    endTime='2016-06-01'
                    onPress={this.showDate}
                />
            </View>
        );
    }

    showDate(d) {
        alert(d.date)
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 64,
        flex: 1,
    }
})

module.exports = CalendarDemo
