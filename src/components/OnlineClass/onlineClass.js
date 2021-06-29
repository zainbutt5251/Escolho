import React from 'react';
// import Modalshow from './Modalshow';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';
export class OnlineClass extends React.Component {
  constructor() {
    super();
    state = {
      step: 'Todo',
    };
  }
  render() {
    return (
      <ImageBackground
        source={this.props.isDark ? bgImage : bgImageLight}
        style={styles.image}>
        <ScrollView>
          <View>
            <View style={styles.main}>
              {/* <Text
                style={
                  this.props.isDark ? styles.maintextDark : styles.maintext
                }>
                Sala de Aula Virtual{' '}
              </Text> */}
              <View style={{flexDirection: 'row', marginTop: 12}}>
                <View style={styles.TopInputs1}>
                  <Text
                    style={
                      this.props.isDark
                        ? this.props.isDark
                          ? styles.labelDark
                          : styles.labelDark
                        : this.props.isDark
                        ? styles.labelDark
                        : styles.label
                    }>
                    Categoria
                  </Text>
                  <View style={styles.inputs}>
                    <Picker
                      mode="dropdown"
                      selectedValue="Todos"
                      style={
                        this.props.isDark ? styles.drDoVDark : styles.drDoV
                      }
                      // onValueChange={(value) => this.handleInput(value, 'step')}
                    >
                      <Picker.Item label="Todos" value="Todos" />
                      <Picker.Item label="Todos" value="Todos" />
                      <Picker.Item label="Todos" value="Todos" />
                    </Picker>
                  </View>
                </View>
                <View style={styles.TopInputs}>
                  <Text
                    style={this.props.isDark ? styles.labelDark : styles.label}>
                    Diciplinas
                  </Text>
                  <View style={styles.inputs}>
                    <Picker
                      mode="dropdown"
                      selectedValue="Todos"
                      style={
                        this.props.isDark ? styles.drDoVDark : styles.drDoV
                      }
                      // onValueChange={(value) => this.handleInput(value, 'step')}
                    >
                      <Picker.Item label="Diciplinas" value="" />
                      <Picker.Item label="Matemática" value="Matemática" />
                      <Picker.Item label="Inglês" value="Inglês" />
                      <Picker.Item label="História" value="História" />
                      <Picker.Item label="Espanhol" value="Espanhol" />
                      <Picker.Item
                        label="LÍNGUA PORTUGUESA"
                        value="LÍNGUA PORTUGUESA"
                      />
                      <Picker.Item label="Artes" value="Artes" />
                      <Picker.Item label="Física" value="Física" />
                      <Picker.Item label="Biologia" value="Biologia" />
                      <Picker.Item label="Química" value="Química" />
                      <Picker.Item label="Geografia" value="Geografia" />
                      <Picker.Item label="Filosofia" value="Filosofia" />
                      <Picker.Item label="Sociologia" value="Sociologia" />
                      <Picker.Item label="História" value="História" />
                      <Picker.Item label="Artes" value="Artes" />
                    </Picker>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={this.props.isDark ? styles.labelDark : styles.label}>
                  Professor
                </Text>
                <View style={styles.inputs}>
                  <Picker
                    mode="dropdown"
                    selectedValue="Todos"
                    style={this.props.isDark ? styles.drDoVDark : styles.drDoV}
                    // onValueChange={(value) => this.handleInput(value, 'step')}
                  >
                    <Picker.Item label="Todos" value="Matemática" />
                    <Picker.Item label="Todos" value="Inglês" />
                    <Picker.Item label="Todos" value="História" />
                  </Picker>
                </View>
              </View>
              <View>
                <Text
                  style={this.props.isDark ? styles.labelDark : styles.label}>
                  Etapa
                </Text>
                <View style={styles.inputs}>
                  <Picker
                    mode="dropdown"
                    selectedValue="Todos"
                    style={this.props.isDark ? styles.drDoVDark : styles.drDoV}
                    // onValueChange={(value) => this.handleInput(value, 'step')}
                  >
                    <Picker.Item label="Etapa" />
                    <Picker.Item label="Etapa 1" value="Etapa 1" />
                    <Picker.Item label="Etapa 2" value="Etapa 2" />
                    <Picker.Item label="Etapa 3" value="Etapa 3" />
                  </Picker>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Homework')}
                style={styles.publicadodiv}>
                <LinearGradient
                  style={{
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    width: '25%',
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#14D2B8', '#43DBC6', '#14D2B8']}>
                  <View style={styles.publicadodivin}>
                    <Text style={styles.publicadodivm}>Publicado</Text>
                    <Text style={styles.publicadodivd}>02</Text>
                    <Text style={styles.publicadodivname}>Julho</Text>
                  </View>
                </LinearGradient>
                <LinearGradient
                  style={{
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    width: '75%',
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#43DBC6', '#14D2B8']}>
                  <View style={{padding: 3, paddingLeft: 10}}>
                    <Text style={styles.terefadiv}>
                      Terefa de Case - Exercicios Matemática
                    </Text>

                    <Text style={styles.terefadivt}>
                      <Text style={styles.terefadivm}>Matemática </Text>
                      ELISANE DUTRA ROSSI CEDANO
                    </Text>

                    <Text style={styles.terefadivd}>
                      PRAZO <Text style={{fontWeight: 'bold'}}> 01 </Text>
                      Decembro
                    </Text>

                    <Text
                      style={{
                        textAlign: 'right',
                        color: 'white',
                        fontSize: 12,
                        paddingRight: 12,
                      }}>
                      2° Etapa
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Lecture')}
                style={styles.publicadodiv}>
                <LinearGradient
                  style={{
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    width: '25%',
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#F2A7C5', '#FE6292']}>
                  <View style={styles.publicadodivin}>
                    <Text style={styles.publicadodivm}>Publicado</Text>
                    <Text style={styles.publicadodivd}>02</Text>
                    <Text style={styles.publicadodivname}>Julho</Text>
                  </View>
                </LinearGradient>
                <LinearGradient
                  style={{
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    width: '75%',
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#F2A7C5', '#FE6292']}>
                  <View style={{padding: 3, paddingLeft: 10}}>
                    <Text style={styles.terefadiv}>
                      Video -Contando de o a 20 em Inglês
                    </Text>

                    <Text style={styles.terefadivt}>
                      <Text style={styles.terefadivm}> Inglês </Text>
                      ELISANE DUTRA ROSSI CEDANO
                    </Text>

                    <Text style={styles.terefadivd}>
                      PRAZO <Text style={{fontWeight: 'bold'}}> 01 </Text>{' '}
                      Novembro
                    </Text>

                    <Text
                      style={{
                        textAlign: 'right',
                        color: 'white',
                        fontSize: 12,
                        paddingRight: 12,
                      }}>
                      2° Etapa
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Poem')}
                style={styles.publicadodiv}>
                <LinearGradient
                  style={{
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    width: '25%',
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#6F5FFE', '#996DFF']}>
                  <View style={styles.publicadodivin}>
                    <Text style={styles.publicadodivm}>Publicado</Text>
                    <Text style={styles.publicadodivd}>02</Text>
                    <Text style={styles.publicadodivname}>Julho</Text>
                  </View>
                </LinearGradient>
                <LinearGradient
                  style={{
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    width: '75%',
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#8F80FF', '#8F80FF']}>
                  <View style={{padding: 3, paddingLeft: 10}}>
                    <Text style={styles.terefadiv}>
                      Poema - Vamos Cuidar da Natureza
                    </Text>

                    <Text style={styles.terefadivt}>
                      <Text style={styles.terefadivm}>Lingua portuguesa </Text>
                      Fernande otavio felix
                    </Text>

                    <Text style={styles.terefadivd}>
                      PRAZO <Text style={{fontWeight: 'bold'}}>31 </Text>{' '}
                      December
                    </Text>

                    <Text
                      style={{
                        textAlign: 'right',
                        color: 'white',
                        fontSize: 12,
                        paddingRight: 12,
                      }}>
                      2° Etapa
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Play')}
                style={styles.publicadodiv}>
                <LinearGradient
                  style={{
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    width: '25%',
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#F2A7C5', '#FE6292']}>
                  <View style={styles.publicadodivin}>
                    <Text style={styles.publicadodivm}>Publicado</Text>
                    <Text style={styles.publicadodivd}>02</Text>
                    <Text style={styles.publicadodivname}>Julho</Text>
                  </View>
                </LinearGradient>
                <LinearGradient
                  style={{
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    width: '75%',
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#F2A7C5', '#FE6292']}>
                  <View style={{padding: 3, paddingLeft: 10}}>
                    <Text style={styles.terefadiv}>
                      Peça de teatro -O Pequeno Principe
                    </Text>

                    <Text style={styles.terefadivt}>
                      <Text style={styles.terefadivm}>Lingua portagessa </Text>
                      ELISANA DUTRA POSSI CEDANO
                    </Text>

                    <Text style={styles.terefadivd}>
                      PRAZO <Text style={{fontWeight: 'bold'}}> 31 </Text>{' '}
                      Octobro
                    </Text>

                    <Text
                      style={{
                        textAlign: 'right',
                        color: 'white',
                        fontSize: 12,
                        paddingRight: 12,
                      }}>
                      2° Etapa
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Game')}
                style={styles.publicadodiv}>
                <LinearGradient
                  style={{
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    width: '25%',
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#6F5FFE', '#996DFF']}>
                  <View style={styles.publicadodivin}>
                    <Text style={styles.publicadodivm}>Publicado</Text>
                    <Text style={styles.publicadodivd}>01</Text>
                    <Text style={styles.publicadodivname}>Julho</Text>
                  </View>
                </LinearGradient>
                <LinearGradient
                  style={{
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    width: '75%',
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#8F80FF', '#8F80FF']}>
                  <View style={{padding: 3, paddingLeft: 10}}>
                    <Text style={styles.terefadiv}>SISTEMA SOLAR</Text>

                    <Text style={styles.terefadivt}>
                      <Text style={styles.terefadivm}>Historia </Text>
                      Fernande Otavo Felix
                    </Text>

                    <Text style={styles.terefadivd}>
                      PRAZO <Text style={{fontWeight: 'bold'}}> 31 </Text>{' '}
                      Setembro
                    </Text>

                    <Text
                      style={{
                        textAlign: 'right',
                        color: 'white',
                        fontSize: 12,
                        paddingRight: 12,
                      }}>
                      2° Etapa
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  drDoV: {
    color: 'black',
  },
  drDoVDark: {
    color: 'white',
  },
  cl: {
    color: 'red',
  },
  clDark: {
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  main: {
    marginTop: 1,
    paddingTop: 0,
    padding: 15,
    color: 'black',
    width: '100%',
  },
  maintext: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4F4F4F',
  },
  maintextDark: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  labelDark: {
    color: 'white',
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    height: 50,
    padding: 0,
    fontSize: 10,
  },
  TopInputs1: {
    width: '49%',
    marginRight: 5,
  },
  TopInputs: {
    width: '50%',
  },
  publicadodiv: {
    flexDirection: 'row',
    marginTop: 15,
    borderRadius: 6,
    width: '100%',
  },
  publicadodiv: {
    flexDirection: 'row',
    marginTop: 15,
    borderRadius: 6,
    width: '100%',
  },
  publicadodivin: {
    padding: 15,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: 70,

    width: '100%',
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
    paddingBottom: 0,
    textAlign: 'left',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom: 0,
  },
  terefadivm: {
    color: 'yellow',

    paddingTop: 4,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
  },
  terefadivt: {color: 'white', paddingRight: 15, fontSize: 10, paddingTop: 5},
  terefadivd: {color: 'white', paddingTop: 5, fontSize: 12},
});
const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(OnlineClass);
