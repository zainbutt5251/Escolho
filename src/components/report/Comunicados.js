import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {TextInput} from 'react-native-gesture-handler';
import {Row, Table, Col, Cell} from 'react-native-table-component';
import RoundCheck from './RoundCheck';

const Comunicados = ({navigation, isDark}) => {
  const [tableHead, settableHead] = useState(['Tudo', 'Parte', 'Rejeitou']);
  const [row1, setRow1] = useState([
    <View style={{flexDirection: 'row', borderRightWidth: 1, height: 40}}>
      <Text>Suco</Text>
      <View style={{marginLeft: 30, flexDirection: 'row'}}>
        <RoundCheck text="M" />
        <RoundCheck text="T" />
      </View>
    </View>,

    <RoundCheck text="M" />,
    <RoundCheck text="T" />,
    <RoundCheck text="M" />,
    <RoundCheck text="T" />,
    <RoundCheck text="M" />,
    <RoundCheck text="T" />,
  ]);
  console.log('#################');
console.log(isDark);
  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.bgimage}>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={ isDark?  styles.headViewDark : styles.headView}>
            <Text style={ isDark?  styles.headingDark : styles.heading}>Comunicados</Text>
          </View>
          <View style={ isDark ? styles.textViewDark : styles.textView}>
            <TextInput
              placeholder="text"
              style={styles.textInput}
              multiline={true}></TextInput>
          </View>
          <View>
            <Text style={isDark ? styles.heading2Dark : styles.heading2}>
              Alimentação
            </Text>
          </View>
          {/* Table Portion */}

          <View style={styles.portionMain}>
            <View style={styles.portionSecondary}>
              <View style={styles.portionThird}>
                {/* LeftCell */}

                <View style={styles.Cell}>
                  <View style={styles.text1}>
                    <Text style={styles.headText}>Todo</Text>
                  </View>
                  <View style={styles.textNCheck}>
                    <Text style={styles.sideText}>Suco </Text>
                    <View style={styles.duoCheck}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* Other Cells */}

                <View style={styles.Cell2}>
                  <View style={styles.text2}>
                    <Text style={styles.headText}>Parte</Text>
                  </View>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheck2}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* OneCell end */}

                <View style={styles.Cell3}>
                  <View style={styles.text2Last}>
                    <Text style={styles.headText}>Rejeitou</Text>
                  </View>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheck2}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* Other Cells End/ */}
              </View>

              {/* start of new Row */}
              {/* LeftCell */}
              <View style={styles.portionThird}>
                <View style={styles.Cell}>
                  <View style={styles.text1r1}></View>
                  <View style={styles.textNCheck}>
                    <Text style={styles.sideText}>Fruta </Text>
                    <View style={styles.duoCheck}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* LeftCell End */}
                {/* Other Cells */}

                <View style={styles.Cell2}>
                  <Text style={styles.headText}></Text>
                  <View style={styles.text2}></View>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheck3}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* OneCell end */}

                <View style={styles.Cell3}>
                  <Text style={styles.headText}></Text>
                  <View style={styles.text2}></View>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheck3}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* Other Cells End/ */}
              </View>
              {/* End of row */}

              {/* start of new Row */}
              {/* LeftCell */}
              <View style={styles.portionThird}>
                <View style={styles.Cell}>
                  <View style={styles.text1r1}></View>
                  <View style={styles.textNCheck}>
                    <Text style={styles.sideText}>Lanche</Text>
                    <View style={styles.duoCheck}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* LeftCell End */}
                {/* Other Cells */}

                <View style={styles.Cell2}>
                  <View style={styles.text2}>
                    <Text> </Text>
                  </View>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheck3}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* OneCell end */}

                <View style={styles.Cell3}>
                  <Text style={styles.headText}></Text>
                  <View style={styles.text2}></View>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheck3}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* Other Cells End/ */}
              </View>
              {/* End of row */}

              {/* start of new Row */}
              {/* LeftCell */}
              <View style={styles.portionThird}>
                <View style={styles.Cell}>
                  <View style={styles.text1r1}></View>
                  <View style={styles.textNCheck}>
                    <Text style={styles.sideText}>Almoço</Text>
                    <View style={styles.duoCheck}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* LeftCell End */}
                {/* Other Cells */}

                <View style={styles.Cell2}>
                  <Text style={styles.headText}></Text>
                  <View style={styles.text2}></View>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheck3}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* OneCell end */}

                <View style={styles.Cell3}>
                  <Text style={styles.headText}></Text>
                  <View style={styles.text2}></View>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheck3}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* Other Cells End/ */}
              </View>
              {/* End of row */}

              {/* start of new Row */}
              {/* LeftCell */}
              <View style={styles.portionThird}>
                <View style={styles.CellLast}>
                  <View style={styles.text1r1}></View>
                  <View style={styles.textNCheck}>
                    <Text style={styles.sideText}>Mamadeiro</Text>
                    <View style={styles.duoCheckLast}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* LeftCell End */}
                {/* Other Cells */}

                <View style={styles.Cell2Last}>
                  <Text style={styles.headText}></Text>
                  <View style={styles.text2}></View>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheck3}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* OneCell end */}

                <View style={styles.Cell3Last}>
                  <Text style={styles.headText}></Text>
                  <View style={styles.text2}></View>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheck3}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                  </View>
                </View>
                {/* Other Cells End/ */}
              </View>

              {/* End of row */}
            </View>
            {/* end of secondry Portion */}
            {/* Sono Banho  */}
            <View style={styles.sonobanhoView}>
              <Text style={isDark ? styles.heading3Dark : styles.heading3}>
                Sono/Banho
              </Text>
              <View style={{borderBottomWidth: 1, borderColor: '#6CB6B7'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textInputBath}>Dormiu de:</Text>
                    <TextInput
                      style={
                        isDark ? styles.bathInputDark : styles.bathInput
                      }></TextInput>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textInputBathas}>às</Text>
                    <TextInput
                      style={
                        isDark ? styles.bathInputDark : styles.bathInput
                      }></TextInput>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textInputBath}>Dormiu de:</Text>
                  <TextInput
                    style={
                      isDark ? styles.bathInputDark : styles.bathInput
                    }></TextInput>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textInputBathas}>às</Text>
                  <TextInput
                    style={
                      isDark ? styles.bathInputDark : styles.bathInput
                    }></TextInput>
                </View>
              </View>
            </View>

            {/* SonoBanho form end */}

            {/* //Banho button */}
            <View>
              <View style={styles.banhoView}>
                <View style={styles.banhobutton}>
                  <View>
                    <Text style={styles.banhoText}>banho </Text>
                  </View>
                  <View style={styles.duoCheckBanho}>
                    <RoundCheck text={'S'} checkedColor={'#FFFFFF'} />
                    <View style={styles.TCheck}>
                      <RoundCheck text={'N'} checkedColor={'#FFFFFF'} />
                    </View>
                  </View>
                </View>
              </View>
              {/* Evacuacao */}
              <View style={styles.evacaoView}>
                <View>
                  <View style={styles.portionThirdEvacao}>
                    <View style={styles.evacaoUpperView}>
                      <View style={styles.text1r1}></View>
                      <View style={styles.textNCheck}>
                        <Text style={styles.bigHeading}>Evacuação</Text>
                        <View style={styles.duoCheckLast}>
                          <RoundCheck text={'M'} />
                          <View style={styles.TCheck}>
                            <RoundCheck text={'T'} />
                          </View>
                        </View>
                        <View style={styles.inputevacao}>
                          <TextInput
                            style={
                              isDark ? styles.textColorDark : styles.textColor
                            }></TextInput>
                        </View>
                        <Text style={styles.greenText}>X</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.trioCheck}>
                    <RoundCheck />
                    <Text
                      style={isDark ? styles.innerTextDark : styles.innerText}>
                      Normal
                    </Text>
                    <View style={styles.TCheck}>
                      <RoundCheck />
                    </View>
                    <Text
                      style={isDark ? styles.innerTextDark : styles.innerText}>
                      {' '}
                      Pastoso
                    </Text>
                    <View style={styles.TCheck}>
                      <RoundCheck />
                    </View>
                    <Text
                      style={isDark ? styles.innerTextDark : styles.innerText}>
                     
                      Liquido
                    </Text>
                  </View>
                </View>
              </View>
              {/* Evacuacao end */}
            </View>
            {/* Medicamento */}

            <View style={{marginTop: '-35%', marginBottom: '25%'}}>
              <View>
                <Text style={styles.bigHeading}>Medicamento</Text>
                <View style={{marginLeft: '-4%'}}>
                  <View style={styles.textNCheck}>
                    <View style={styles.duoCheckLast}>
                      <RoundCheck text={'M'} />
                      <View style={styles.TCheck}>
                        <RoundCheck text={'T'} />
                      </View>
                    </View>
                    <View style={styles.inputeMedi}>
                      <TextInput
                        style={
                          isDark ? styles.textColorDark : styles.textColor
                        }></TextInput>
                    </View>
                    <Text style={styles.greenTextMedi}>h</Text>
                    <View style={styles.inputeMedi}>
                      <TextInput
                        style={
                          isDark ? styles.textColorDark : styles.textColor
                        }></TextInput>
                    </View>
                    <Text style={styles.greenTextMedi}>h</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.textNCheck}>
                    <View
                      style={{flexDirection: 'row', alignItems: 'baseline'}}>
                      <Text
                        style={{
                          fontSize: 22,
                          color: '#6CB6B7',
                          alignSelf: 'baseline',
                        }}>
                        Temp
                      </Text>
                      <View
                        style={{
                          borderBottomWidth: 1,
                          borderColor: '#6CB6B7',
                          flexDirection: 'row',
                        }}>
                        <TextInput
                          style={[
                            isDark ? styles.textColorDark : styles.textColor,
                            {width: 45},
                          ]}></TextInput>

                        <Text
                          style={{
                            fontSize: 20,
                            color: '#6CB6B7',
                            alignSelf: 'baseline',
                            top: 25,
                          }}>
                          C
                        </Text>

                        <TextInput
                          style={[
                            isDark ? styles.textColorDark : styles.textColor,
                            {width: 65},
                          ]}></TextInput>
                        <Text
                          style={{
                            fontSize: 20,
                            color: '#6CB6B7',
                            alignSelf: 'baseline',

                            top: 25,
                          }}>
                          h
                        </Text>
                      </View>
                    </View>

                    <Text style={styles.greenTextMedi}>Dose</Text>
                    <View style={styles.inputeMedi}>
                      <TextInput
                        style={
                          isDark ? styles.textColorDark : styles.textColor
                        }></TextInput>
                    </View>
                    {/* <Text style={styles.greenTextMedi}></Text> */}
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View>
                  <Text style={styles.bigHeading}>Ciente</Text>
                </View>
                <View style={{top: 12, paddingLeft: 15}}>
                  <RoundCheck text={'S'} />
                </View>
              </View>
              <View style={{marginBottom: 50, marginTop: 10}}>
                <Button
                  title="Salvar"
                  onPress={() => Alert.alert('Simple Button pressed')}
                />
              </View>
            </View>
            {/* Medicamento end */}
            {/* Banho button end */}
            {/* Medicamento */}
          </View>
        </View>

        {/* Medicamento end */}
      </ScrollView>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Comunicados);


const styles = StyleSheet.create({
  textColor: {
    color: 'black',
    fontSize: 20,
    // borderWidth: 1,
    borderColor: 'red',
  },
  textColorDark: {
    color: 'white',
    fontSize: 20,
    // borderWidth: 1,
    borderColor: 'red',
    // alignItems:'baseline'
  },
  bathInput: {
    // paddingLeft: 115,
    fontSize: 20,
  },
  bathInputDark: {
    // paddingLeft: 115,
    fontSize: 20,
    color: 'white',
    // borderWidth: 1,
    borderColor: 'red',
    width: 110,
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  mainView: {
    marginBottom: '5%',
    paddingBottom: '10%',
  },
  headView: {
    marginTop: '15%',
    backgroundColor: '#F5F6FA',
    padding: '15%',
    // borderWidth:1,
    borderColor:'red',
   
  },

  headViewDark: {
    marginTop: '15%',
    backgroundColor: '#F5F6FA',
    padding: '15%',
    // borderWidth:1,
    borderColor:'red',
    opacity:0.5 
  },


  heading: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#5A607F',
  },
  headingDark: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  heading3: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#5A607F',
  },
  heading3Dark: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  heading2Dark: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  heading2: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#5A607F',
  },
  textView: {
    margin: '4%',
    height: 150,
    backgroundColor: '#EEF3F6',
    
  },
  textViewDark: {
    margin: '4%',
    height: 150,
    backgroundColor: '#EEF3F6',
    opacity:0.5
  },
  textInput: {
    padding: 20,
    color:'black'
    // opacity:0.5
    // backgroundColor:'red'
  },
  portionMain: {
    margin: '4%',
  },
  portionSecondary: {
    flexDirection: 'column',
    paddingLeft: '0%',
    paddingRight: '3%',
  },
  portionThird: {
    flexDirection: 'row',
  },
  Cell: {
    // marginLeft: '5%',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: '47%',
    height: 70,
  },
  Cell2: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: '30%',
    height: 70,
  },
  Cell3: {
    borderBottomWidth: 1,
    width: '30%',
    height: 70,
  },
  Cell2Last: {
    borderRightWidth: 1,
    height: 70,

    width: '30%',
  },
  Cell3Last: {
    width: '30%',
    height: 70,
  },
  CellLast: {
    // marginLeft: '5%',
    height: 70,

    width: '47%',
    borderRightWidth: 1,
  },
  textNCheck: {
    flexDirection: 'row',
    // marginBottom: '6%',
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  duoCheck: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '18%',
    marginTop: '8%',
    // marginBottom: '5%',
    // borderWidth: 2,
  },
  duoCheckLast: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '4%',
    marginTop: '8%',
    // marginBottom: '5%',
    // borderWidth: 2,
  },
  duoCheck2: {
    alignItems: 'center',

    flexDirection: 'row',
    marginLeft: '25%',
    marginTop: '8%',
    // marginBottom: '5%',
    // borderWidth: 2,
  },
  duoCheck3: {
    alignItems: 'center',

    flexDirection: 'row',
    marginLeft: '25%',
    marginTop: '4%',
    // marginBottom: '5%',
    // borderWidth: 2,
  },
  text1: {
    marginLeft: '62%',
    // marginBottom: '3%',
    // borderWidth: 2,
  },
  text1r1: {
    marginLeft: '55%',
    marginBottom: '3%',
    marginTop: '5%',
    // borderWidth: 2,
  },
  text2: {
    marginLeft: '35%',
    marginBottom: '1%',
    // borderWidth: 2,
  },
  text2Last: {
    marginLeft: '28%',
    marginBottom: '1%',
    // borderWidth: 2,
  },
  TCheck: {
    marginLeft: '15%',
  },
  sideText: {
    marginTop: '5%',
    fontWeight: 'bold',
    color: '#C36064',
    fontSize: 18,
  },
  headText: {
    color: '#C36064',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textInputBath: {
    color: '#6CB6B7',
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textInputBathas: {
    color: '#6CB6B7',
    fontSize: 23,
    // top: 30,
    // paddingLeft: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textInputTimeDark: {
    // paddingLeft: 115,
    fontSize: 20,
    color: 'white',
    // borderWidth: 1,
    borderColor: 'red',
  },
  textInputTime: {
    // paddingLeft: 115,
    fontSize: 20,
  },
  sonobanhoView: {
    marginTop: '5%',
  },
  banhoView: {
    flexDirection: 'row',
    backgroundColor: '#6CB6B7',
    marginTop: '5%',
    borderRadius: 10,
    // borderWidth: 1,
    height: '19%',
  },
  banhobutton: {width: '100%', flexDirection: 'row'},
  banhoText: {
    paddingLeft: '30%',
    fontSize: 23,
    top: 23,
    color: 'white',
    fontWeight: 'bold',
  },
  duoCheckBanho: {
    alignItems: 'center',

    flexDirection: 'row',
    marginLeft: '7%',
    marginTop: '4%',
    marginBottom: '3%',
    // borderWidth: 2,
  },

  portionThirdEvacao: {
    flexDirection: 'row',
  },
  bigHeading: {
    marginTop: '5%',
    fontWeight: 'bold',
    color: '#C36064',
    fontSize: 28,
  },
  inputevacao: {
    borderBottomWidth: 1,
    borderColor: '#6CB6B7',
    marginLeft: '-15%',
    width: '20%',
  },
  inputeMedi: {
    borderBottomWidth: 1,
    borderColor: '#6CB6B7',
    width: '28%',
    marginLeft: '-20%',
  },
  inputeMediW2Text: {
    borderBottomWidth: 1,
    borderColor: '#6CB6B7',
    width: '100%',
    top: 20,
    marginLeft: '-100%',
  },

  evacaoUpperView: {width: '90%'},
  greenText: {
    marginLeft: '-8%',

    top: 15,
    color: '#6CB6B7',
    fontSize: 23,
  },
  greenTextMedi: {
    marginLeft: '-19%',

    top: 15,
    color: '#6CB6B7',
    fontSize: 23,
  },
  trioCheck: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '8%',
    width: '80%',
    // marginBottom: '5%',
  },
  innerText: {
    marginLeft: '4%',
    color: '#5A607F',
    fontWeight: 'bold',
  },
  innerTextDark: {
    marginLeft: '4%',
    color: 'white',
    fontWeight: 'bold',
  },
});


