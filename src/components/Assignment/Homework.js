import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, FlatList, StyleSheet, ImageBackground} from 'react-native';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';

class Homework extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={this.props.isDark ? bgImage : bgImageLight}
        style={styles.image}>
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            height: '100%',
            padding: 10,
            paddingTop: 0,
          }}>
          <Text
            style={
              this.props.isDark ? styles.MainHeadingDark : styles.MainHeading
            }>
            Tarefa de Casa Exercícios Matemática
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              // borderRadius: 25,
              marginTop: 30,
              // borderWidth:1,
              // borderColor:'blue'
            }}>
            <View
              style={{
                backgroundColor: '#40b759',
                flex: 1,
                alignContent: 'center',
                borderTopStartRadius: 5,
                borderBottomStartRadius: 5,
                justifyContent: 'center',
                height: 80,
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                PUBLICADO
              </Text>
              <Text style={{color: 'white', textAlign: 'center'}}>
                02 DE julho DE 2020{' '}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#bb2b29',
                flex: 1,
                alignContent: 'center',
                borderTopEndRadius: 5,
                borderBottomEndRadius: 5,
                justifyContent: 'center',
                height: 80,
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                PRAZO: ATÉ
              </Text>
              <Text style={{color: 'white', textAlign: 'center'}}>
                01 DE dezembro DE 2020{' '}
              </Text>
            </View>
          </View>
          <View style={{width: '100%', flex: 5}}>
            <View
              style={this.props.isDark ? styles.mainViewDark : styles.mainView}>
              <Text>
                <Text style={{color: '#faa452', fontWeight: 'bold'}}>
                  Matemática
                </Text>
                <Text
                  style={this.props.isDark ? styles.mathQDark : styles.mathQ}>
                  {' '}
                  ELISANE DUTRA ROSSI CEDANO
                </Text>
              </Text>

              <Text
                style={
                  this.props.isDark ? styles.exerciseDark : styles.exercise
                }>
                Exercícios
              </Text>
              <Text
                style={
                  this.props.isDark ? styles.mathQSubDark : styles.mathQSub
                }>
                Copie no caderno e resolva os seguintes exercicios
              </Text>

              <View style={styles.container}>
                <FlatList
                  data={[
                    {key: 'a) 5 + 8 + 9'},
                    {key: 'b) 100 - 33 -2'},
                    {key: 'c) 2 * 25 * 2'},
                    {key: 'd) 1000 / 4'},
                  ]}
                  renderItem={({item}) => (
                    <Text
                      style={this.props.isDark ? styles.itemDark : styles.item}>
                      {item.key}
                    </Text>
                  )}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainHeading: {fontWeight: '700', fontSize: 20, textAlign: 'center',paddingTop: 10,},
  MainHeadingDark: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingTop: 10,
  },
  exercise: {
    color: 'black',
    fontWeight: 'bold',
  },
  exerciseDark: {
    fontWeight: 'bold',
    color: 'white',
  },
  mathQSub: {
    textDecorationLine: 'underline',
    color: 'black',
    paddingTop: 10,
  },
  mathQSubDark: {
    paddingTop: 10,
    textDecorationLine: 'underline',
    color: 'white',
  },

  mathQ: {
    color: 'black',
  },
  mathQDark: {
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  mainView: {
    width: '100%',
    padding: 20,
    backgroundColor: '#efefef',
    height: 300,
    borderRadius: 20,
  },
  mainViewDark: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(182, 181, 180, 0.32)',
    height: 300,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44,
  },
  itemDark: {
    color: 'white',
    padding: 10,
    fontSize: 15,
    height: 44,
  },
});

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Homework);
