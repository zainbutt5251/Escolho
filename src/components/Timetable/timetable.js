import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
let math = require('../../../assets/images/math.png');
let trans = require('../../../assets/images/trans.png');
let history = require('../../../assets/images/history.png');
let ingles = require('../../../assets/images/ingles.png');
let artes = require('../../../assets/images/artes.png');
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
} from 'react-native-table-component';

class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        'FASE 2° Etapa',
        'ANO LETIVO: 2020',
        'TURMA ENSINO FUNDAMENTAL ANO',
      ],
      tableHead1: ['DISCIPLINAS', '1° Etapa', '2° Etapa', '3° Etapa'],
      // tableTitle: [
      // <Text>
      // <Image style={{width: 10, height: 10}} source={math} /> Matematica
      // </Text>,

      // 'Lingua Portuguesa',
      // 'Historia',
      // 'Ingles',
      // 'Artes',
      // ],
      tab2head: ['PONTOS', '1° Etapa', '2° Etapa', '3° Etapa'],
      table2Data: ['MÁXIMA', 'APROVAÇÃO', '', '', '', '', '', ''],
      tableData: [
        [
          <View
            style={{
              flexDirection: 'row',
              // paddingLeft: 40,
              alignItems: 'center',
              padding: 7,
            }}>
            <Image style={{width: 15, height: 15, padding: 10}} source={math} />
            <Text style={this.props.isDark?styles.subjectNameDark:styles.subjectName}>
              {' '}
              Matemática
            </Text>
          </View>,
          'N1',
          'R1',
          'T1',
          'F1',
          'N2',
          'AC 2',
          'R2',
          'T2',
          'N2',
          'AC 2',
          'R2',
          'T2',
        ],
        [
          <View
            style={{
              flexDirection: 'row',
              // paddingLeft: 55,
              alignItems: 'center',
              padding: 7,
            }}>
            <Image
              style={{width: 15, height: 15, padding: 10}}
              source={trans}
            />
            <Text style={this.props.isDark?styles.subjectNameDark:styles.subjectName}>
              Lingua Portuguesa
            </Text>
          </View>,
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          <View
            style={{
              flexDirection: 'row',
              // paddingLeft: 40,
              alignItems: 'center',
              padding: 7,
            }}>
            <Image
              style={{width: 15, height: 15, padding: 10}}
              source={history}
            />
            <Text style={this.props.isDark?styles.subjectNameDark:styles.subjectName}>
              {' '}
              História
            </Text>
          </View>,
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          <View
            style={{
              flexDirection: 'row',
              // paddingLeft: 40,
              alignItems: 'center',
              padding: 7,
            }}>
            <Image
              style={{width: 15, height: 15, padding: 10}}
              source={ingles}
            />
            <Text style={this.props.isDark?styles.subjectNameDark:styles.subjectName}>
              {' '}
              Inglês
            </Text>
          </View>,

          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 7,
              // paddingLeft: 40,
            }}>
            <Image
              style={{width: 15, height: 15, padding: 10}}
              source={artes}
            />
            <Text style={this.props.isDark?styles.subjectNameDark:styles.subjectName}>
              {' '}
              Artes
            </Text>
          </View>,

          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
      ],
    };
  }
  render() {
    const state = this.state;
    return (
      <ImageBackground
        source={this.props.isDark ? bgImage : bgImageLight}
        style={styles.image}>
        <View style={styles.mainView}>
          <View
            style={{
              flex: 1,
            }}>
            {/* <Text
              style={
                this.props.isDark ? styles.mainHeadingDark : styles.mainHeading
              }>
              BOLETIM
            </Text> */}
            <Text
              style={this.props.isDark ? styles.headingDark : styles.heading}>
              COLÉGIO ESPÍRITO SANTO
            </Text>
            <Text
              style={
                this.props.isDark ? styles.upperTextDark : styles.upperText
              }>
              RUA TUIUTI, 1442, TATUAPÉ - SÃO PAULO/SP - TEL: (11) 3389-1000
            </Text>
            <Text
              style={
                this.props.isDark ? styles.lowerTextDark : styles.lowerText
              }>
              BOLETIM ESCOLAR
            </Text>
            <View style={styles.tabView}>
              <Text
                style={
                  this.props.isDark
                    ? styles.upperHeadLeftDark
                    : styles.upperHeadLeft
                }>
                ALUNO(A): ISSAC DA ROCHA
              </Text>
              <Text
                style={
                  this.props.isDark ? styles.upperHeadDark : styles.upperHead
                }>
                {' '}
                NÚMERO:1
              </Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.container}>
                <Row
                  data={state.tableHead}
                  widthArr={[100, 120]}
                  // flexArr={[10, 2, 1, 1]}
                  style={styles.head}
                  textStyle={this.props.isDark?styles.text1Dark:styles.text1}
                />
                <Table
                  borderStyle={{
                    borderColor: 'lightgrey',
                    // borderLeftWidth: 0,
                    borderWidth: 0.5,
                  }}>
                  <Row
                    data={state.tableHead1}
                    // flexArr={[2.3, 2.3, 2, 2, 2]}
                    widthArr={[106.5, 180, 180, 180]}
                    style={styles.t1r1}
                    textStyle={this.props.isDark?styles.text2Dark:styles.text2}
                  />

                  <Rows
                    data={state.tableData}
                    widthArr={[
                      106.5,
                      45,
                      45,
                      45,
                      45,
                      45,
                      45,
                      45,
                      45,
                      45,
                      45,
                      45,
                      45,
                    ]}
                    // flexArr={[5, 1, 1]}
                    style={styles.row}
                    textStyle={this.props.isDark?styles.textDark:styles.text}
                  />
                </Table>
              </View>
            </ScrollView>
            <View style={{flex: 5}}>
              <ScrollView horizontal={true}>
                <Table>
                  <Row
                    borderStyle={{borderWidth: 0.5, borderColor: 'lightgrey'}}
                    data={state.tab2head}
                    widthArr={[125, 90, 90, 90, 90]}
                    style={styles.t2r1}
                    textStyle={this.props.isDark?styles.t2r1TextDark:styles.t2r1Text}
                  />
                  <Row
                    borderStyle={{borderWidth: 0.5, borderColor: 'lightgrey'}}
                    data={state.table2Data}
                    widthArr={[62.5, 62.5, 45, 45, 45, 45, 45, 45]}
                    textStyle={styles.t2Text}
                    style={styles.t2r2}
                  />
                </Table>
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  subjectName:{fontSize: 12, padding: 5, color: 'grey'},
  subjectNameDark:{fontSize: 12, padding: 5, color: 'white'},
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  mainHeading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
  mainHeadingDark: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  mainView: {
    width: '100%',
    flexDirection: 'column',
    height: '100%',
    padding: 10,
    paddingTop: 0,
  },
  headingDark: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  heading: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
  upperText: {
    textAlign: 'center',
    marginLeft: 35,
    marginRight: 35,
    fontSize: 9,
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
  upperTextDark: {
    textAlign: 'center',
    marginLeft: 35,
    marginRight: 35,
    fontSize: 9,
    fontWeight: 'bold',
    color: 'white',
  },
  lowerText: {
    textAlign: 'center',
    fontSize: 9,
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
  lowerTextDark: {
    textAlign: 'center',
    fontSize: 9,
    fontWeight: 'bold',
    color: 'white',
  },
  tabView: {
    flexDirection: 'row',
    marginTop: 28,
    // marginRight: 15,
    // marginLeft: 15,
    justifyContent: 'space-between',
  },
  upperHeadLeft: {textAlign: 'left', fontWeight: '600', color: '#4f4f4f'},
  upperHeadLeftDark: {textAlign: 'left', fontWeight: '600', color: 'white'},
  upperHead: {textAlign: 'right', color: '#4f4f4f'},
  upperHeadDark: {textAlign: 'right', color: 'white'},
  container: {flex: 1, paddingTop: 10},
  head: {
    height: 40,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    width: '100%',
    borderColor: 'lightgrey',
  },
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, height: 300},
  row: {height: 40},
  text: {textAlign: 'center', color: '#4f4f4f'},
  textDark: {textAlign: 'center', color: 'white'},
  text1: {
    textAlign: 'center',
    color: 'red',
    fontSize: 10,
    paddingLeft: 10,
    color: '#4f4f4f',
  },
  text1Dark: {
    textAlign: 'center',
    color: 'red',
    fontSize: 10,
    paddingLeft: 10,
    color: 'white',
  },
  text2: {textAlign: 'center', fontWeight: 'bold', color: '#4f4f4f'},
  text2Dark: {textAlign: 'center', fontWeight: 'bold', color: 'white'},
  t1r1: {height: 58},
  //Table---------------------------------------2
  //r1
  t2r1Text: {textAlign: 'center', color: '#4f4f4f'},
  t2r1TextDark: {textAlign: 'center', color: 'white'},
  t2r1: {
    height: 40,
  },
  //r2
  t2Text: {
    textAlign: 'center',
    fontSize: 10,
    color: '#4f4f4f',
    fontWeight: 'bold',
  },
  t2TextDark: {
    textAlign: 'center',
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  t2r2: {
    height: 30,
  },
});

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Timetable);
