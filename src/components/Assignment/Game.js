import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {WebView} from 'react-native-webview';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Date from './Date';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';

const Game = ({isDark}) => {
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
        }}>
        <Text style={isDark ? styles.MainHeadingDark : styles.MainHeading}>
          SISTEMA SOLAR!
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderRadius: 25,
            marginTop: 30,
          }}>
          <Date />
        </View>

        <View style={{width: '100%', flex: 5}}>
          <Text style={isDark ? styles.solarDark : styles.solar}>
            SISTEMA SOLAR
          </Text>

          <WebView
            originWhitelist={['*']}
            style={{backgroundColor: 'transparent'}}
            source={{
              html:
                '<iframe width="100%" height="50%" src="http://essemble.co.uk/escript/drag_drop_engine/dragdrop1.html" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  solar: {
    textAlign: 'center',
    color: 'black',
  },
  solarDark: {
    textAlign: 'center',
    color: 'white',
  },
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
});

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Game);
