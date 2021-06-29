import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  _ScrollView,
  ImageBackground
} from 'react-native';
import {Calendar, Agenda, calendarTheme} from 'react-native-calendars';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import Schedule from './Schedule';
let doveIcon = require('../../../assets/images/doveIcon.png');
import { connect } from 'react-redux';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';

const currentDate = new Date();

function CalendarScreen({navigation, isDark}) {

  const [selectedDate, setSelectedDate] = useState(
    `${moment(currentDate).format('YYYY-MM-DD')}`,
  );

  initialState = {
    dummy: [
      {
        date: '2021-06-08',
        key: 'period',
        color: 'skyblue',
        startingDay: true,
        endingDay: true,

      },
      {
        date: '2021-06-09',
        key: 'period',
        color: 'hotpink',
        startingDay: true,
      },
      {
        date: '2021-06-10',
        key: 'period',
        color: 'hotpink',
        // startingDay: true,
      },
      {
        date: '2021-06-11',
        key: 'period',
        color: 'hotpink',
      },
      {
        date: '2021-06-12',
        key: 'period',
        color: 'hotpink',
      },
      {
        date: '2021-06-13',
        key: 'period',
        color: 'hotpink',
        endingDay: true,
      },
      {
        date: '2021-06-22',
        key: 'sports',
        color: 'hotpink',
        startingDay: true,
        endingDay: true,
      },
      {
        date: '2021-06-05',
        marked: true,
        key: 'lab',
        dotColor: 'green',
      },
      {
        date: `${moment(currentDate).format('YYYY-MM-DD')}`,
        key: 'period',
        color: '#8F80FF',
      },
    ],
    tasks: [
      {
        taskDate: '2021-06-09',
        taskName: 'period',
        icon: 'book',
        color: 'hotpink',
      },
      {
        taskDate: '2021-06-11',
        taskName: 'period',
        icon: 'book',
        color: 'hotpink',
      },
      {
        taskDate: '2021-06-12',
        taskName: 'period',
        icon: 'book',
        color: 'hotpink',
      },
      {
        taskDate: '2021-06-13',
        taskName: 'period',
        icon: 'book',
        color: 'hotpink',
      },
      {
        taskDate: '2021-06-22',
        taskName: 'sports',
        icon: 'dribbble',
        color: 'hotpink',
      },
      {
        taskDate: '2021-06-22',
        taskName: 'period',
        icon: 'book',
        color: 'hotpink',
       
      },
      {
        taskDate: '2021-06-05',
        taskName: 'lab',
        icon: 'drink',
        color: 'orange',
      },
    ],
  };
  const [calendarMonths, setCalendarMonths] = useState(
    currentDate.getMonth() + 1,
  );
  const [state, setState] = useState(initialState);

  const month = 2;
  let dateData = {};
  state.dummy.map((item) => {
    let properties = {
      color: item.color,
      startingDay: item.startingDay && item.startingDay,
      endingDay: item.endingDay && item.endingDay,
      marked: item.marked && item.marked,
      dotColor: item.dotColor && item.dotColor,
    };
    dateData = {
      ...dateData,
      [item.date]: properties,
      [selectedDate]: {color: 'skyblue'},
    };
  });

  var monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const taskData = state.tasks.filter((task) => {
    return task.taskDate === selectedDate;
  });

  const ele = taskData.map((task, i) => {
    return (
      <TouchableOpacity style={styles.publicadodiv} key={i} onPress={()=>navigation.navigate('Schedule', {data :monthNames })}>
        <LinearGradient
          style={styles.radiusLeft}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[task.color, 'hotpink']}>
          <View style={styles.TaskIconCalendar}>
            <Entypo name={task.icon} size={30} color={'white'} />
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.radiusRight}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[task.color, 'hotpink']}>
          <View style={styles.textCenter}>
            <Text style={styles.terefadiv}> {task.taskName} </Text>
            <Text style={styles.terefadiv}> Due to: {task.taskDate} </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  });

  return (
    <ImageBackground
    source={isDark ? bgImage : bgImageLight}
    style={styles.image}
    >
    <ScrollView>
      <View style={isDark ? styles.tabViewDark : styles.tabView}>
        <View
          style={{
      
            justifyContent: 'center',
            width: '30%',
            height: month === 1 ? 50 : 30,
            borderTopEndRadius: 5,
            borderTopStartRadius: 5,
            marginBottom: 0,
            padding: 5,
         
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: '#eee',
          }}>
          <Text style={{color: "#ccc",}}>
            {monthNames[calendarMonths === 1 ? 11 : calendarMonths - 2]}
          </Text>
        </View>
        <LinearGradient
          // radiusLeft={15}
          style={{
            borderTopEndRadius: 5,
            borderTopStartRadius: 5,
         
            justifyContent: 'center',
            width: '30%',
            height: month === 2 ? 40 : 30,
            marginBottom: 0,
            padding: 5,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: '#eee',
                   
          }}
          colors={['#8276ff', '#b1a2ff']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <Text style={{color: 'white',fontSize:16}}>{monthNames[calendarMonths - 1]}</Text>
        </LinearGradient>
        <View
          style={{
  
            justifyContent: 'center',
            width: '30%',
            height: month === 3 ? 50 : 30,
            borderTopEndRadius: 5,
            borderTopStartRadius: 5,
            marginBottom: 0,
            padding: 5,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: '#eee',
          }}>
          <Text style={{color: "#ccc",}}>{monthNames[calendarMonths == 12 ? 0 : calendarMonths]}</Text>
        </View>
      </View>

      <Calendar
        style={isDark ? styles.calendarHeaderDark : styles.calendarHeader}
        
        markedDates={dateData}
        markingType={'period'}
        theme={{
          calendarBackground: isDark ? '#21223E' : 'white',
        }}

        onMonthChange={(data) => {
          setCalendarMonths(data.month);
          // setState((prevState) => ({ calendarMonths: data.month}));
        }}
        onDayPress={(data) => {
          setSelectedDate(data.dateString);
        }}
        firstDay={1}
        enableSwipeMonths={true}
       
      />

      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'column', padding: 10}}>
          <View>
            <Text style={{color: isDark ? 'white' : 'black'}}>
              Upcoming Task {`(${ele ? ele.length : 0})`}
            </Text>
          </View>
          {ele}
        </View>
      </View>
    </ScrollView>
    </ImageBackground>
  );
}

// Calendar.propTypes = {};
const styles = StyleSheet.create({
  calendarHeader:{margin: 10, backgroundColor:'white'},
  calendarHeaderDark:{margin: 10, backgroundColor:'#21223E', opacity:0.9},
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },

  tabView: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  tabViewDark: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#21223E',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  textCenter: {
    paddingLeft: 10,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  radiusLeft: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    width: '25%',
  },
  radiusRight: {
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    width: '75%',
  },
  w25: {
    width: '25%',
  },
  w75: {
    width: '75%',
  },
  publicadodiv: {
    flexDirection: 'row',
    marginTop: 15,
    // borderRadius: 16,
    width: '100%',
    height: 100,
  },

  TaskIconCalendar: {
    // alignContent:'center',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 15,
    // borderTopLeftRadius: 8,
    // borderBottomLeftRadius: 8,
    height: 100,
  },

  publicadodivm: {
    paddingBottom: 0,
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  publicadodivd: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  publicadodivname: {color: 'white', textAlign: 'center', fontSize: 14},
  terefadiv: {
    color: 'white',
    // paddingBottom: 0,
    // textAlign: 'left',
    fontSize: 13,
    fontWeight: 'bold',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    // alignSelf:'center',

    // marginTop: 10,
    // paddingBottom: 0,
  },
});

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(CalendarScreen);
