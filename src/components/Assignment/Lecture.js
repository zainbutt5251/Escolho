import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview';
import Date from './Date';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';
class Lecture extends Component {
  state = {
    url: 'atG5qZPqtRI',
  };
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
            padding: 15,
          }}>
          <Text
            style={
              this.props.isDark ? styles.MainHeadingDark : styles.MainHeading
            }>
            Video Contando de 0 a 20 em ingles{' '}
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
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#faa452', fontWeight: 'bold'}}>
                MATEMATICA:
              </Text>
              <Text style={this.props.isDark ? styles.mathQDark : styles.mathQ}>
                {' '}
                ELISANE DUTRA ROSSI CEDANO
              </Text>
            </View>

            <Text
              style={
                this.props.isDark
                  ? styles.videosHeadingDark
                  : styles.videosHeading
              }>
              Video
            </Text>

            <WebView
              style={{
                backgroundColor: 'transparent',
              }}
              source={{
                html: `<iframe width="1280" height="720" src="https://www.youtube.com/embed/${this.state.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
              }}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

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
  videosHeading: {fontWeight: 'bold', margin: 5},
  videosHeadingDark: {fontWeight: 'bold', margin: 5, color: 'white'},
  MainHeading: {fontWeight: '700', fontSize: 20, textAlign: 'center'},
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
});
const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Lecture);
