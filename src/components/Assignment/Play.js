import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Linking,
  ImageBackground,
} from 'react-native';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';

const Play = ({isDark}) => {
  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}>
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          height: '100%',
          padding: 10,
          paddingTop: 0,
          justifyContent: 'flex-start',
        }}>
        <Text style={isDark ? styles.MainHeadingDark : styles.MainHeading}>
          Peca de Teatro O Pequeno Principe
        </Text>

        <View style={{flexDirection: 'row', borderRadius: 25, marginTop: 20}}>
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
            <Text style={{color: 'white', textAlign: 'center'}}>PUBLICADO</Text>
            <Text style={{color: 'white', textAlign: 'center'}}>
              02 DE julhe DE 2020{' '}
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
              PRAZO: ATE
            </Text>
            <Text style={{color: 'white', textAlign: 'center'}}>
              01 DE dezembro DE 2020{' '}
            </Text>
          </View>
        </View>

        {/* <ScrollView> */}

        <View style={{width: '100%', marginTop: 20}}>
          <ScrollView>
            <View style={isDark ? styles.mainViewDark : styles.mainView}>
              <Text>
                <Text style={{color: '#faa452', fontWeight: 'bold'}}>
                  LINGUA PORTUGUESA{' '}
                </Text>
                <Text style={isDark ? styles.white : styles.bl}>
                  FERNANDE OTAVIO FELIX
                </Text>
              </Text>

              <Text style={isDark ? styles.HistoriaDark : styles.Historia}>
                Historia - O pequena=o Principe
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                Click on a Link realizer o download
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                Click on a Link realizer o download
              </Text>
            </View>
          </ScrollView>
        </View>
        {/* </ScrollView> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bl: {
    color: 'black',
  },
  white: {
    color: 'white',
  },
  MainHeading: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  MainHeadingDark: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingTop: 10,
  },
  mainView: {
    width: '100%',
    padding: 20,
    backgroundColor: '#efefef',
    borderRadius: 20,
    height: '90%',
  },
  mainViewDark: {
    height: '90%',
    width: '100%',
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(182, 181, 180, 0.32)',
    borderRadius: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
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
  Historia: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  HistoriaDark: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
  },
});

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Play);
