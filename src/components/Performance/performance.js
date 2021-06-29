import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Linking,
  Image,
  ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import { firebase, Auth } from '../../../App';

import { connect } from 'react-redux';

class Performance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'java',
      Etapa: '',
      name:'',
      image:'',
      data:[]
      // data: [
      //   { title: 'Matemática', marks: '60', color: 'green' },
      //   { title: 'Inglês', marks: '100', color: 'blue' },
      //   { title: ' História', marks: 'marks', color: '#993800' },
      //   { title: 'Espanhol', marks: '30', color: '#D7945F' },
      //   { title: 'LÍNGUA PORTUGUESA', marks: '95', color: 'orange' },
      //   { title: 'Artes', marks: '30', color: '#B3A2CE' },
      //   { title: 'Física', marks: '40', color: '#42CAEA' },
      //   { title: 'Biologia', marks: '97', color: 'pink' },
      //   { title: 'Química', marks: '60', color: 'orange' },
      //   { title: 'Geografia', marks: '70', color: '#A0AF82' },
      //   { title: 'Filosofia', marks: '80', color: '#347E9F' },
      //   { title: 'Sociologia', marks: '100', color: '#F75B00' },

      //   { title: 'História', marks: '70', color: 'skyblue' },
      //   { title: 'Artes', marks: '92', color: 'green' },
      // ],
    };
  }
  componentDidMount() {
    // console.log(this.props.route.params.rollno)
   firebase.firestore().collection('students').doc(this.props.route.params.rollno).get().then(res=>{
      // console.log(res.data().subjectlist)
      this.setState({name:res.data().name,
        data:res.data().subjectlist,
        image:res.data().image
      })
     
    })
  }
  handleInput = (value, prop) => {
    const state = this.state;
    state[prop] = value;
    this.setState(state);
  };

  render() {
    // console.log(this.state.data.length / 2);
    let rollno = this.props.route.params.rollno
    return (
      <ImageBackground
        source={this.props.isDark ? bgImage : bgImageLight}
        style={styles.image}>
        <ScrollView>
          <View
            style={{
              width: '100%',
              flexDirection: 'column',
              height: '100%',
              padding: 15,
              justifyContent: 'flex-start',
            }}>
            {/* <Text style={{fontWeight: '700', fontSize: 20, textAlign: 'center'}}>
Performance do Aluno
</Text> */}
            <Text
              style={
                this.props.isDark ? styles.subHeadingDark : styles.subHeading
              }>
              Etapa para busca dos resultados
</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#CCCCCC',
                borderRadius: 8,
                height: 50,
                padding: 0,
                fontSize: 10,
              }}>
              <Picker
                mode="dropdown"
                style={
                  this.props.isDark
                    ? styles.sessionDropDark
                    : styles.sessionDrop
                }
                selectedValue={this.state.step}
                onValueChange={(value) => this.handleInput(value, 'Etapa')}>
                <Picker.Item label="1° Etapa" value="1° Etapa" />
                <Picker.Item label="2° Etapa" value="2° Etapa" />
                <Picker.Item label="3° Etapa" value="3° Etapa" />
              </Picker>
            </View>

            <View style={{ width: '100%', marginTop: 20 }}>
              <View
                style={
                  this.props.isDark
                    ? styles.performanceGraphDark
                    : styles.performanceGraph
                }>
                {/* {/ <View style={{ height: '50%', width: '100%', backgroundColor: 'red', flexDirection: 'row' }}> /} */}
                <View style={styles.div}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      style={styles.imagsetboy}
                      source ={{uri:'data:image/png;base64,' + this.state.image}}
                      // source={require('../../../assets/images/boy.png')}
                    />
                    <View>
                      <Text
                        style={
                          this.props.isDark
                            ? styles.textsboydivDark
                            : styles.textsboydiv
                        }>
                        {this.state.name}
</Text>
                      <View style={{ flexDirection: 'row', margin: 10 }}>
                        <View
                          style={{
                            backgroundColor: 'lightblue',
                            borderRadius: 5,
                            height: 30,
                            width: 40,
                            margin: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text>100</Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: 'red',
                            width: 40,
                            borderRadius: 5,
                            margin: 5,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text style={{}}>0</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* {/ </View> /} */}
                </View>
                <View
                  style={{
                    height: '40%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {this.state.data.map((data, Index) => {
                    return (
                      <View key={Index} style={{ justifyContent: 'flex-end' }}>
                        <View
                          style={{
                            width: 20,
                            height: data.marks + '%',
                            backgroundColor: data.color,
                            borderRadius: 3,
                            marginBottom: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{ color: 'white', fontSize: 10 }}>
                            {data.marks}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: 20,
                            // height: 30,
                            backgroundColor: 'darkgrey',
                            borderRadius: 3,
                            // margin: 1.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: 15,
                          }}>
                          {data.marks > 89 ? (
                            <Icon
                              name={'star'}
                              style={{
                                color: 'yellow',
                                marginTop: 7,
                                marginBottom: 7,
                              }}></Icon>
                          ) : null}
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
            {this.state.data
              .slice(this.state.data.length / 2)
              .map((data, Index) => {
                return (
                  <View
                    key={Index}
                    style={{ marginTop: 10, flexDirection: 'row' }}>
                    <View
                      style={{
                        width: '50%',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: 30,
                          height: 20,
                          backgroundColor: this.state.data[Index * 2].color,
                          borderRadius: 3,
                        }}></View>
                      <View style={{ marginLeft: 10 }}>
                        <Text
                          style={
                            this.props.isDark
                              ? styles.subjectNameDark
                              : styles.subjectName
                          }>
                          {this.state.data[Index * 2].title}{' '}
                        </Text>
                      </View>
                    </View>
                    {this.state.data.length > Index * 2 + 1 ? (
                      <View
                        style={{
                          width: '50%',
                          borderRadius: 3,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            width: 30,
                            height: 20,
                            backgroundColor: this.state.data[Index * 2 + 1]
                              .color,
                            borderRadius: 3,
                          }}></View>
                        <View style={{ marginLeft: 10 }}>
                          <Text
                            style={
                              this.props.isDark
                                ? styles.subjectNameDark
                                : styles.subjectName
                            }>
                            {this.state.data[Index * 2 + 1].title}{' '}
                          </Text>
                        </View>
                      </View>
                    ) : null}
                  </View>
                );
              })}

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <View
                style={{
                  width: '30%',
                  borderRadius: 10,
                  backgroundColor: '#48bfaf',
                  padding: 15,
                  marginRight: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../assets/images/icon1.png')}
                />
                {/* {/ <Svg/> /} */}
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Dentro da Expectative
</Text>
              </View>
              <View
                style={{
                  width: '30%',
                  backgroundColor: '#ef4780',
                  borderRadius: 10,
                  padding: 15,
                  marginRight: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../assets/images/icon2.png')}
                />
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Esforço
</Text>
              </View>
              <LinearGradient
                colors={['#816eb2', '#6859ff']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{
                  width: '30%',
                  borderRadius: 10,
                  backgroundColor: 'yellow',
                  padding: 15,
                  marginRight: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../assets/images/icon3.png')}
                />
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Solução de problemas
</Text>
              </LinearGradient>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <LinearGradient
                colors={['#f48784', '#f0578a']}
                style={{
                  width: '30%',
                  borderRadius: 10,
                  backgroundColor: 'darkslateblue',
                  padding: 15,
                  marginRight: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../assets/images/icon4.png')}
                />
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Alunos Especiais
</Text>
              </LinearGradient>
              <View
                style={{
                  width: '30%',
                  borderRadius: 10,
                  backgroundColor: '#3e60ec',
                  padding: 15,
                  marginRight: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../assets/images/icon5.png')}
                />
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Retenção de Informação
</Text>
              </View>
              <View
                style={{
                  width: '30%',
                  borderRadius: 10,
                  backgroundColor: '#f9a05e',
                  padding: 15,
                  marginRight: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../assets/images/icon6.png')}
                />
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Alunos Especiais
</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  performanceGraph: {
    width: '100%',
    padding: 10,
    height: 200,
    backgroundColor: '#efefef',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  performanceGraphDark: {
    width: '100%',
    padding: 10,
    height: 200,
    backgroundColor: 'rgba(182, 181, 180, 0.32)',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  subjectName: { textTransform: 'capitalize' },
  subjectNameDark: { textTransform: 'capitalize', color: 'white' },
  sessionDrop: { padding: 10 },
  sessionDropDark: {
    // borderWidth: 1,
    // borderColor: 'white',
    // margin: -5,
    color: 'white',
    backgroundColor: 'rgba(182, 181, 180, 0.32)',
  },
  subHeading: {
    color: 'black',
  },
  subHeadingDark: {
    color: 'white',
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
  main: {
    marginTop: 1,
    paddingTop: 10,
    padding: 25,
    color: 'black',
  },
  maintext: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  div: {
    flex: 1,
    // marginTop: 20,
    fontSize: 10,
    color: 'black',
    // backgroundColor: '#EFEFEF',
    textAlign: 'center',
    // padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  div1: {
    flex: 1,
    marginTop: 20,
    fontSize: 10,
    color: 'black',
    backgroundColor: '#F79859',
    textAlign: 'center',
    padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  textinner: {
    color: 'white',
    fontSize: 11,
  },
  div2: {
    flex: 1,
    marginTop: 10,
    fontSize: 10,
    color: 'black',
    backgroundColor: '#F4907E',
    textAlign: 'center',
    padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  div3: {
    flex: 1,
    marginTop: 10,
    fontSize: 10,
    color: 'black',
    backgroundColor: '#8CE78C',
    textAlign: 'center',
    padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  div4: {
    flex: 1,
    marginTop: 10,
    fontSize: 10,
    color: 'black',
    backgroundColor: '#6699FF',
    textAlign: 'center',
    padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  div5: {
    flex: 1,
    marginTop: 20,
    fontSize: 10,
    color: 'white',
    backgroundColor: '#4452DF',
    textAlign: 'center',
    padding: 5,
    paddingBottom: 0,
    borderRadius: 5,
    borderColor: 'white',
  },
  imagseticon1: {
    top: -22,
    left: 10,
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  icontext: {
    color: 'white',
    marginLeft: 13,
    fontSize: 12,
    fontWeight: 'bold',
  },
  div6: {
    flex: 1,
    marginTop: -2,
    fontSize: 10,
    color: 'white',
    backgroundColor: '#F4907E',

    textAlign: 'center',
    padding: 5,
    paddingBottom: 0,
    borderRadius: 5,
    borderColor: 'white',
  },
  div7: {
    flex: 1,
    marginTop: -2,
    fontSize: 10,
    color: 'white',
    backgroundColor: '#F7804A',
    textAlign: 'center',
    padding: 5,
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
    borderRadius: 40,
    width: 70,
    height: 70,
  },
  textsboydiv: {
    paddingLeft: 5,
    paddingTop: 6,
    fontSize: 12,
    marginLeft: 10,
  },
  textsboydivDark: {
    color: 'white',
    paddingLeft: 5,
    paddingTop: 6,
    fontSize: 12,
    marginLeft: 10,
  },
  textsmallboy: {
    paddingLeft: 5,
    padding: 0,
    marginTop: 3,
    fontSize: 8,

    marginLeft: 10,
  },
  textsmallboyB: {
    color: 'white',
    backgroundColor: 'black',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 15,
    borderRadius: 50,
    fontSize: 8,
    marginTop: 5,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Performance);