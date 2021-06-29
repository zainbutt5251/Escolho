import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';

const Poem = ({isDark}) => {
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
        <Text  style={isDark ? styles.MainHeadingDark : styles.MainHeading}>
          Poema Vamos Cuidar da Natureza
        </Text>

        <View style={{flexDirection: 'row', borderRadius: 25, marginTop: 30}}>
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

        {/* <ScrollView> */}

        <View style={{width: '100%', marginTop: 20}}>
          <ScrollView>
            <View style={isDark ? styles.mainViewDark : styles.mainView}>
              <Text>
                <Text style={{color: '#faa452', fontWeight: 'bold'}}>
                  Língua portuguesa
                </Text>
                <Text style={isDark ? styles.white : styles.bl}>
                  {' '}
                  FERNANDE OTAVIO FELIX
                </Text>
              </Text>

              <Text style={isDark ? styles.whitep : styles.blp}>Poema</Text>
              <Text style={isDark ? styles.white : styles.bl}>
                Cuidando da natureza{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Vamos cuidar{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Da mãe Natureza{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Preservando a vida{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Do nosso Planeta.{' '}
              </Text>
              <Text></Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Não desperdicem água{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Para não faltar{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Separe todo lixo
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Para reciclar.{' '}
              </Text>
              <Text></Text>

              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Não destruam as matas{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Árvores e flores
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Que enfeitam o mundo
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Com as suas cores.
              </Text>
              <Text></Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Não poluam o ar{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Isso não é legal{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Na certa vai causar{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                O aquecimento global.{' '}
              </Text>
              <Text></Text>

              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Vamos trabalhar{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Nessa tarefa urgente{' '}
              </Text>

              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                Para preservar{' '}
              </Text>
              <Text style={isDark ? styles.white : styles.bl}>
                {' '}
                O nosso mai ambiente{' '}
              </Text>
              <Text></Text>
            </View>
          </ScrollView>
        </View>
        {/* </ScrollView> */}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
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
  bl: {
    color: 'black',
  },
  white: {
    color: 'white',
  },
  blp: {
    color: 'black',
    fontWeight: 'bold',
    margin: 15,
  },
  whitep: {
    margin: 15,
    fontWeight: 'bold',
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
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44,
  },
});

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Poem);
