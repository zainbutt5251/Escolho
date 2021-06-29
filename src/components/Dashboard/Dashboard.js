import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MModal from '../Modal/updatePassModal';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import { connect } from 'react-redux';
import { firebase, Auth } from '../../../App';


const Dashboard = ({ navigation, isDark, route }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const goToFeeRecord = () => {
    console.log('FEE RECORD!!!');
    navigation.navigate('FeeRecord');
  };
  const goToPerformance = () => {
    console.log('Performance!!!');
    navigation.navigate('Performance'), { rollno: route.params.rollno };
  };
  const goToTimetable = () => {
    console.log('goToTimetable!!!');
    navigation.navigate('TimeTable');
  };
  const goToComunicados = () => {
    console.log('goToComunicados!!!');
    navigation.navigate('Comunicados');
  };
  const goToFirstSession = () => {
    console.log('FirstSession!!!');
    navigation.navigate('FirstSession' , { rollno: route.params.rollno });
  };
  const goToSecondSession = () => {
    console.log('SecondSession!!!');
    navigation.navigate('SecondSession', { rollno: route.params.rollno });
  };
  const goToThirdSession = () => {
    console.log('ThirdSession!!!');
    navigation.navigate('ThirdSession', { rollno: route.params.rollno });
  };
  const goToOnlineClass = () => {
    console.log('OnlineClass!!!');
    navigation.navigate('OnlineClass');
  };
  console.log(route.params.rollno)
  useEffect(() => {
    firebase.firestore().collection('students').doc(route.params.rollno).get().then(res => {
      // console.log(res.data().name)
      setImage(res.data().image)
      setName(res.data().name)
    })


  }, [])
  // console.log(name)

  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}>
      <View>
        <ScrollView>
          <MModal />
          <View style={{ flex: 1 }}>
            <View style={styles.main}>

              <View style={isDark ? styles.divDark : styles.div}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={styles.imagsetboy}
                    source ={{uri:'data:image/png;base64,' + image}}
                    // source={require('../../../assets/images/boy.png')}
                  />
                  <View>
                    <Text
                      style={
                        isDark ? styles.textsboydivDark : styles.textsboydiv
                      }>
                      {name}
                    </Text>
                    <Text
                      style={
                        isDark ? styles.textsmallboyDark : styles.textsmallboy
                      }>
                      Codigo:2020000006
                    </Text>
                    <Text style={styles.textsmallboyB}>
                      ENSINO FUNDAMETAL 1° ANO
                    </Text>
                  </View>
                </View>
              </View>

              <View>
              <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                  }}
                  onPress={(e) => goToComunicados(e)}>
                  <LinearGradient
                    style={styles.div1}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#0299d9','#43a7d1' ]}>
                    <View>
                      <Text style={styles.textinner}>Comunicados</Text>
                    </View>
                    <View style={styles.baloon}>
                      <Text style={{color:'white'}}>3</Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                  }}
                  onPress={(e) => goToTimetable(e)}>
                  <LinearGradient
                    style={styles.div2}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#FDA96B', '#FF9A50']}>
                    <View>
                      <Text style={styles.textinner}>Boletim</Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ flexDirection: 'row' }}
                  onPress={(e) => goToOnlineClass(e)}>
                  <LinearGradient
                    style={styles.div2}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#FB6D9B', '#FE6292']}>
                    <View>
                      <Text style={styles.textinner}>
                        Sala de aula virtual{' '}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flexDirection: 'row' }}
                  onPress={(e) => navigation.navigate('Performance', { rollno: route.params.rollno })}>
                  <LinearGradient
                    style={styles.div3}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#4ADAC6', '#43DBC6']}>
                    <View>
                      <Text style={styles.textinner}>Desempenho </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flexDirection: 'row' }}
                  onPress={(e) => goToFeeRecord(e)}>
                  <LinearGradient
                    style={styles.div4}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#4177F1', '#4579F1']}>
                    <View>
                      <Text style={styles.textinner}>Mensalidades</Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={(e) => goToFirstSession(e)}>
                  <LinearGradient
                    style={styles.div5}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#655CFF', '#9B6EFF']}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={styles.imagetopicon}>
                        <Image
                          style={styles.imagseticon1}
                          source={require('../../../assets/images/todoo.png')}
                        />
                      </View>
                      <View>
                        <Text style={styles.icontext}> 1ª Etapa </Text>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={(e) => goToSecondSession(e)}>
                  <LinearGradient
                    style={styles.div6}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#FA8985', '#F5548A']}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={styles.imagetopicon1}>
                        <Image
                          style={styles.imagseticon1}
                          source={require('../../../assets/images/todoo.png')}
                        />
                      </View>
                      <View>
                        <Text style={styles.icontext}> 2ª Etapa </Text>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={(e) => goToThirdSession(e)}>
                  <LinearGradient
                    style={styles.div7}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#FDA868', '#FF9A50']}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={styles.imagetopicon2}>
                        <Image
                          style={styles.imagseticon1}
                          source={require('../../../assets/images/todoo.png')}
                        />
                      </View>
                      <View>
                        <Text style={styles.icontext}> 3ª Etapa </Text>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                <Text
                  style={
                    isDark ? styles.underlineTextFDark : styles.underlineTextF
                  }>
                  Regulamento da Biblioteca
                </Text>
                <Text
                  style={
                    isDark ? styles.underlineTextDark : styles.underlineText
                  }>
                  Cardápio Almoço
                </Text>
                <Text
                  style={
                    isDark ? styles.underlineTextDark : styles.underlineText
                  }>
                  Cardápio Lanche
                </Text>
                <Text
                  style={
                    isDark ? styles.underlineTextDark : styles.underlineText
                  }>
                  Gabarito Simulado
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Dashboard);

const styles = StyleSheet.create({
  baloon: {borderColor:'white',borderWidth:1, width:25, height:25, borderRadius:25, justifyContent:'center', alignItems:'center',backgroundColor:'#4579F1'},
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  main: {
    marginTop: 0,
    paddingTop: 0,
    padding: 15,
    color: 'black',
  },
  maintext: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  maintextDark: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  div: {
    flex: 1,
    marginTop: 20,
    fontSize: 10,
    color: 'black',
    backgroundColor: '#EFEFEF',
    textAlign: 'center',
    padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  divDark: {
    flex: 1,
    marginTop: 20,
    fontSize: 10,
    color: 'black',
    backgroundColor: 'rgba(182, 181, 180, 0.32)',
    textAlign: 'center',
    padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  div1: {
    flex: 1,
    marginTop: 20,
    height: 40,
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: 'white',
    flexDirection:'row',
  },
  textinner: {
    color: 'white',
    fontSize: 15,
  },
  div2: {
    flex: 1,
    justifyContent: 'center',
    height: 40,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  div3: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  div4: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  div5: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    height: 50,
    padding: 10,
    paddingBottom: 0,
    borderRadius: 5,
    borderColor: 'white',
  },
  imagetopicon: {
    backgroundColor: '#655CFF',
    top: -23,
    left: 2,
    borderRadius: 2,
    borderRadius: 10,
    padding: 10,
    paddingTop: 7,
    alignContent: 'center',
    width: 50,

    height: 40,
  },
  imagetopicon1: {
    backgroundColor: '#FA8985',
    top: -23,
    left: 2,
    borderRadius: 2,
    borderRadius: 10,
    padding: 10,
    paddingTop: 7,
    alignContent: 'center',
    width: 50,

    height: 40,
  },
  imagetopicon2: {
    backgroundColor: '#FDA868',
    top: -23,
    left: 2,
    borderRadius: 2,
    borderRadius: 10,
    padding: 10,
    paddingTop: 7,
    alignContent: 'center',
    width: 50,
    height: 40,
  },
  imagseticon1: {
    width: 30,
    height: 30,
  },
  icontext: {
    color: 'white',
    marginLeft: 13,
    fontSize: 18,
    fontWeight: 'bold',
  },
  div6: {
    flex: 1,
    marginTop: -2,
    fontSize: 10,
    justifyContent: 'center',

    color: 'white',
    textAlign: 'center',
    padding: 10,
    height: 50,

    paddingBottom: 0,
    borderRadius: 5,
    borderColor: 'white',
  },
  div7: {
    flex: 1,
    marginTop: -2,
    fontSize: 10,
    height: 50,
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    paddingBottom: 0,
    borderRadius: 5,
    borderColor: 'white',
  },

  texthead: {
    color: 'white',
    fontSize: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 6,
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    borderColor: '#C0C0C0',
    borderStyle: 'dotted',
    borderWidth: 1,
  },
  head: {
    paddingLeft: 5,
    height: 40,
    backgroundColor: '#C0C0C0',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texttable: {
    flex: 1,
    margin: 6,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  textS: {
    margin: 6,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    textAlign: 'center',
  },
  texttabledata: {
    padding: 10,
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  },
  textdataS: {
    paddingLeft: 10,
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  },
  textdataSMALL: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
    fontSize: 7.5,
    width: 160,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  },
  imagsetboy: {
    borderRadius: 10,
    width: 70,
    height: 80,
  },
  textsboydiv: {
    paddingLeft: 5,
    paddingTop: 6,
    fontSize: 18,

    // textAlign: "right",
    marginLeft: 10,
  },
  textsboydivDark: {
    color: 'white',
    paddingLeft: 5,
    paddingTop: 6,
    fontSize: 18,

    // textAlign: "right",
    marginLeft: 10,
  },
  textsmallboy: {
    paddingLeft: 5,
    padding: 0,
    marginTop: 3,
    fontSize: 12,
    marginLeft: 10,
  },
  textsmallboyDark: {
    color: 'white',
    paddingLeft: 5,
    padding: 0,
    marginTop: 3,
    fontSize: 12,
    marginLeft: 10,
  },
  textsmallboyB: {
    color: 'white',
    backgroundColor: '#21223E',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 15,
    borderRadius: 50,
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  underlineTextF: { marginTop: 10, textDecorationLine: 'underline' },
  underlineTextFDark: {
    marginTop: 10,
    textDecorationLine: 'underline',
    color: 'white',
  },
  underlineText: { marginTop: 5, textDecorationLine: 'underline' },
  underlineTextDark: {
    marginTop: 5,
    textDecorationLine: 'underline',
    color: 'white',
  },
});