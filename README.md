# Fastui
Fastui components build with React Native

## Carousel
![carousel](https://raw.githubusercontent.com/roscoe054/fastui-carousel/master/demo.gif)
```jsx
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
```
👉 [fastui-carousel full doc]
[fastui-carousel doc]: https://github.com/roscoe054/fastui-carousel

## Calendar
![calendar](https://raw.githubusercontent.com/roscoe054/fastui-calendar/master/demo.gif)
```jsx
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
```
👉 [fastui-calendar full doc]
[fastui-calendar doc]: https://github.com/roscoe054/fastui-calendar

## Form
![form](https://raw.githubusercontent.com/roscoe054/fastui-form/master/demo.gif)
```jsx
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

var xform = React.createClass({
    render: function() {
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
```
👉 [fastui-form full doc]
[fastui-form doc]: https://github.com/roscoe054/fastui-form
