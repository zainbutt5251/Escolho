import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
let doveIcon = require('../../../assets/images/doveIcon.png');
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect} from 'react-redux';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';

 class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'java',
      Etapa: 'Today',
      name: '',
      image: '',
      TaskData: [
        {
          time: '07:30',
          day: 'seg',
          taskInfo: [
            {Title: 'Welcome ', Time: '07:30'},
            // {Title: 'Stage Drama', Time: '07:30'},
          ],
        },
        {
          time: '09:30',
          day: 'seg',
          taskInfo: [
            {Title: 'Parent Meeting', },
            {Title: 'Result', Time: '07:30'},

          ],
        },
        {
          time: '10:00',
          day: 'seg',
          taskInfo: [
            {Title: 'Welcome ', Time: '07:30'},
            {Title: 'Stage Drama', },
            {Title: 'Stage Drama', Time: '07:30'},
           
          ],
        },
        {
          time: '11:30',
          day: 'seg',
          taskInfo: [
            {Title: 'Welcome ', Time: '07:30'},
            // {Title: 'Stage Drama', Time: '07:30'},
          ],
        },
        {
          time: '12:30',
          day: 'seg',
          taskInfo: [
            {Title: 'Welcome ', Time: '07:30'},
            {Title: 'Stage Drama', Time: '07:30'},
          ],
        },
      ],
    };
  }
  handleInput = (value, prop) => {
    const state = this.state;
    state[prop] = value;
    this.setState(state);
  
  };
  render() {
    // console.log(this.props.route.params.data);
    let isDark = this.props.isDark;
    return (
      <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}
      >
        <ScrollView style={{top: isDark ? 50 : 0}}>
        <View
          style={isDark ? styles.sndBarDark : styles.sndBar}>
          <View style={{width: '45%', flexDirection: 'row-reverse'}}>
            <DropDownPicker
              style={{
                width: '45%',
                flexDirection: 'row-reverse',
                position: 'relative',
              }}
              items={[
                {label: 'Today', value: 'Today', hidden: true},
                {label: 'Tomorrow', value: 'Tomorrow'},
              ]}
              defaultValue={this.state.Etapa}
              containerStyle={{height: 40, width: 110}}
              style={{backgroundColor: '#8074fe', color: 'white'}}
              labelStyle={{color: 'white'}}
              arrowColor={'white'}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#8074fe', color: 'black'}}
              color={'red'}
              onChangeItem={(item) =>
                this.setState({
                  Etapa: item.value,
                })
              }
            />
          </View>
          <View style={{width: '60%', flexDirection: 'row-reverse'}}>
            <Text
              style={{
                alignSelf: 'center',
                alignContent: 'center',
                color: 'grey',
                fontSize: 22,
              }}>
              Hoje
            </Text>
          </View>
        </View>
        <View style={ !this.props.isDark ? styles.MainViewDark : styles.MainView}>



          {this.state.TaskData.map((data, index) => {
            return (
              <View key={index} style={{marginTop: 10, }}>
                <View style={styles.publicadodiv}>
                  <View style={styles.timeLine}>
                    <View style={styles.textLeftCont}>
                      <Text style={ isDark ? styles.textLeftDark : styles.textLeft }> {data.time} </Text>
                      <Text style={ isDark ? styles.TextDayDark : styles.TextDay } > {data.day} </Text>
                    </View>
                    <View style={styles.lineCont}>
                      <View style={styles.lineGrey}>
                        <View style={styles.lineCircle}></View>
                      </View>
                    </View>
                  </View>
                  <View style={{flexDirection: 'column', width: '70%'}}>
                    {data.taskInfo.map((e, i) => {
                      return (
                        <LinearGradient key={i}
                          style={styles.radius}
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          colors={['#6c89d5', '#6c89d5']}>
                          <View style={styles.textCenter}>
                            <Text style={styles.taskText}> {e.Title} </Text>
                            <Text style={styles.terefadiv}> {e.Time} </Text>
                            {/* <Image source={doveIcon} style={styles.doveIcon} /> */}
                          </View>
                        </LinearGradient>
                      );
                    })}
                  </View>
                </View>
              </View>
            );
          })}

          {/* <View style={{marginTop: 10}}>
            <View
              style={styles.publicadodiv}>
              <View style={styles.timeLine}>
                <View style={styles.textLeftCont}>
                  <Text style={styles.textLeft}> 07:00 </Text>
                  <Text>Seg</Text>
                </View>
                <View style={styles.lineCont}>
                  <View style={styles.lineGrey}>
                    <View style={styles.lineCircle}></View>
                  </View>
                </View>
              </View>
              <View style={{flexDirection:'column', width:'70%'}}>
              <LinearGradient
                style={styles.radius}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#6c89d5', '#6c89d5']}>
                <View style={styles.textCenter}>
                  <Text style={styles.taskText}> Task </Text>
                  <Image source={doveIcon} style={styles.doveIcon} />
                </View>
              </LinearGradient>
              <LinearGradient
                style={styles.radius}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#6c89d5', '#6c89d5']}>
                <View style={styles.textCenter}>
                  <Text style={styles.taskText}> Task </Text>
                  <Image source={doveIcon} style={styles.doveIcon} />
                </View>
              </LinearGradient>
              </View>
            </View>
          </View> */}
        </View>
      </ScrollView>
      </ImageBackground>
      );
  }
}

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Schedule);

const styles = StyleSheet.create({
  MainView:{padding: 10, marginTop: 20, backgroundColor: 'white'},
  MainViewDark:{padding: 10, marginTop: 20, backgroundColor: 'transparent'},
  sndBar:{
    backgroundColor: 'white',
    flexDirection: 'row-reverse',
    zIndex: 10,
    padding: 10,
    width: '100%',
  },
  sndBarDark:{
    backgroundColor: 'transparent',
    flexDirection: 'row-reverse',
    zIndex: 10,
    padding: 10,
    width: '100%',
    // top:50
  },



   image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  sessionDrop: {
    width: 100,
    backgroundColor: '#8074fe',
    alignSelf: 'flex-end',
    borderRadius: 20,
    height: 40,

  },
  sessionDropDark: {
    alignSelf: 'flex-end',
    width: 100,
    color: 'white',
    backgroundColor: 'rgba(182, 181, 180, 0.32)',
  },
  doveIcon: {
    width: 30,
    height: 30,
  },
  lineCircle: {
    width: 15,
    height: 15,
    marginLeft: -7.5,
    borderRadius: 25,
    backgroundColor: '#fd78b4',
    alignItems: 'center',
  },
  lineGrey: {
    borderWidth: 2,
    height: '300%',
    width: 2,
    borderColor: 'grey',
    borderRadius: 25,
  },
  lineCont: {
    width: '30%',
    // borderWidth: 1
  },
  timeLine: {width: '30%', flexDirection: 'row'},
  textLeft: {
    fontWeight: '900',
    fontSize: 20,
  },
  textLeftDark: {
    fontWeight: '900',
    fontSize: 20,
    color:'white'
  },
  TextDay: {
color:'black'
  },
  TextDayDark: {
    color:'white'
      },

  textLeftCont: {
    alignItems: 'center',
    width: '70%',
  },

  radius: {
    borderRadius: 5,
    width: '100%',
    height: 50,
    marginBottom: 5,
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
  textCenter: {
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
    // height: 100,
    flex:1,
    flexWrap:'wrap',
    // borderWidth:1,
    borderColor: 'red',
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
    fontSize: 13,
  },
  taskText: {
    color: 'white',
    fontSize: 18,
  },
});
