import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import ComplModal from '../Modal/complaintModal';
import {viewComplModal} from '../../_actions/modalActions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';
import { firebase, Auth } from '../../../App';

class SecondSession extends React.Component {
  constructor() {
    super();
    this.state = {
      MyDB: 'hello MY DB',
      tableHead: ['1-MATEMÁTICA'],
      tableData: [['Avaliações', 'Peso', 'Nota', 'Nota Máxima']],

      tableData1: [
        ['Diversificadas', '', '700', '100,0'],
        ['Intermediárias', '', '-', '-'],
        ['Nota Parcial', '', '96,0', '35,0'],
        ['Recuperação Paralela', '', '-', '30,0'],
        ['Nota Final 1ª Etapa', '', '96,0', '100,0'],
      ],
      tablehead1: ['2-LÍNGUA ESTRANGEIRA'],
      tabledata1: [['Avaliações', 'Peso', 'Nota', 'Nota Máxima']],
      tabledata2: [
        ['Diversificadas', '', '26,0', '30,0'],
        ['Nenhuma avaliação foi criada para este grupo'],
      ],
      tablehead3: ['Comunicado - Coordenação Pedagógica'],
      tabledata3: [['20/07/2020', '20/07/2020']],
      tabledata3b: [['> Atraso', '> Comportamento']],
      name:'',
      image:'',
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

  render(navigation) {
    console.log(this.state.visibility1);
    return (
      <ImageBackground
        source={this.props.isDark ? bgImage : bgImageLight}
        style={styles.image}>
        <View>
          <ScrollView>
            <ComplModal data={this.state.MyDB} />
            <View>
              <View style={styles.main}>
                {/* <Text style={styles.maintext}>ANO LETIEVO 2020</Text> */}
                <View style={this.props.isDark ? styles.divDark : styles.div}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={styles.imagsetboy}
                      source={{uri:'data:image/png;base64,' + this.state.image}}
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
                      <Text
                        style={
                          this.props.isDark
                            ? styles.textsmallboyDark
                            : styles.textsmallboy
                        }>
                        Codigo:2020000006
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.textsmallboyB}>
                          Ensino Fundamental 1° Ano{' '}
                        </Text>

                        <Text
                          style={{
                            backgroundColor: '#21223E',
                            marginLeft: 3,
                            marginTop: 5,
                            borderRadius: 3,
                            width: 30,

                            padding: 4,
                          }}>
                          {' '}
                          <Icon
                            name="paste"
                            style={{
                              color: 'white',
                              fontSize: 18,
                            }}
                          />
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View>
                  <LinearGradient
                    style={styles.div7}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#FA8985', '#F5548A']}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.imagseticontop}>
                        <Image
                          style={styles.imagseticon1}
                          source={require('../../../assets/images/todoo.png')}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('Dashboard')
                        }>
                        <Text style={styles.icontext}> 2ª Etapa </Text>
                      </TouchableOpacity>
                    </View>
                  </LinearGradient>

                  <View>
                    <ScrollView horizontal={true}>
                      <View
                        style={
                          this.props.isDark
                            ? styles.containerDark
                            : styles.container
                        }>
                        {/* borderStyle={{ borderWidth: 2, borderColor: "black" }} */}
                        <Table>
                          <Row
                            data={this.state.tableHead}
                            style={
                              this.props.isDark ? styles.headDark : styles.head
                            }
                            textStyle={
                              this.props.isDark
                                ? styles.texttableDark
                                : styles.texttable
                            }
                          />
                          <Rows
                            data={this.state.tableData}
                            textStyle={
                              this.props.isDark
                                ? styles.texttabledataDark
                                : styles.texttabledata
                            }
                          />
                          <Rows
                            data={this.state.tableData1}
                            textStyle={
                              this.props.isDark
                                ? styles.textdatatopDark
                                : styles.textdatatop
                            }
                          />
                        </Table>
                      </View>
                    </ScrollView>
                  </View>
                  <View>
                    <ScrollView horizontal={true}>
                      <View
                        style={
                          this.props.isDark
                            ? styles.containerDark
                            : styles.container
                        }>
                        <Table horizontal={true}>
                          <Row
                            data={this.state.tablehead1}
                            style={
                              this.props.isDark ? styles.headDark : styles.head
                            }
                            textStyle={
                              this.props.isDark
                                ? styles.texttableDark
                                : styles.texttable
                            }
                          />
                          <Rows
                            data={this.state.tableData}
                            textStyle={
                              this.props.isDark
                                ? styles.texttabledataDark
                                : styles.texttabledata
                            }
                          />

                          <Rows
                            data={this.state.tabledata2}
                            textStyle={
                              this.props.isDark
                                ? styles.textdatatopDark
                                : styles.textdatatop
                            }
                          />
                        </Table>
                      </View>
                    </ScrollView>
                  </View>
                  <View>
                    <View
                      style={
                        this.props.isDark
                          ? styles.containerDark
                          : styles.container
                      }>
                      <Table horizontal={true}>
                        <Row
                          data={this.state.tablehead3}
                          style={
                            this.props.isDark ? styles.headDark : styles.head
                          }
                          textStyle={
                            this.props.isDark
                              ? styles.texttableDark
                              : styles.texttable
                          }
                        />

                        <Rows
                          data={this.state.tabledata3}
                          textStyle={
                            this.props.isDark
                              ? styles.lastrowDark
                              : styles.lastrow
                          }
                        />
                        <Rows
                          data={this.state.tabledata3b}
                          onPress={this.props.viewComplModal}
                          textStyle={
                            this.props.isDark
                              ? styles.complainmRowDark
                              : styles.complainmRow
                          }
                        />
                      </Table>
                    </View>
                  </View>

                  {/* <Text onPress={() => Linking.openURL('http://google.com')} style={{ marginTop: 10, textDecorationLine: 'underline' }}>Regulamento da bibliotica</Text>
                                <Text onPress={() => Linking.openURL('http://google.com')} style={{ marginTop: 5, textDecorationLine: 'underline' }}>Cardacio Almoco</Text> */}
                </View>
              </View>
            </View>
          </ScrollView>
          {/* <TouchableOpacity onPress={this.props.viewComplModal}><Text>Hello</Text></TouchableOpacity> */}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  lastrow: {
    borderBottomWidth: 1,
    paddingLeft: 10,
    fontSize: 10,
    borderColor: '#C0C0C0',
  },
  lastrowDark: {
    borderBottomWidth: 1,
    paddingLeft: 10,
    fontSize: 10,
    borderColor: '#C0C0C0',
    color: 'white',
  },
  complainmRow: {
    borderBottomWidth: 1,
    paddingLeft: 10,
    fontSize: 12,
    borderColor: '#C0C0C0',
    fontWeight: 'bold',
  },
  complainmRowDark: {
    color: 'white',
    borderBottomWidth: 1,
    paddingLeft: 10,
    fontSize: 12,
    borderColor: '#C0C0C0',
    fontWeight: 'bold',
  },
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
    color: 'red',
    flex: 1,
  },
  maintext: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
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
  imagseticontop: {
    backgroundColor: '#FA8985',

    top: -23,
    left: 10,
    borderRadius: 2,
    paddingTop: 7,
    borderRadius: 10,
    paddingLeft: 5,
    height: 40,
    paddingRight: 5,
  },
  imagseticon1: {
    width: 30,
    height: 30,
  },
  icontext: {
    color: 'white',
    marginLeft: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },

  div7: {
    flex: 1,
    marginTop: 20,
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    padding: 15,
    paddingBottom: 0,
    borderRadius: 8,
    borderColor: 'white',
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
    marginLeft: 10,
  },
  textsboydivDark: {
    color: 'white',
    paddingLeft: 5,
    paddingTop: 6,
    fontSize: 18,
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
    paddingLeft: 5,
    padding: 0,
    marginTop: 3,
    fontSize: 12,
    marginLeft: 10,
    color: 'white',
  },
  textsmallboyB: {
    color: 'white',
    backgroundColor: '#21223E',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 15,
    borderRadius: 3,
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    borderColor: '#C0C0C0',
    borderStyle: 'dotted',
    borderWidth: 1,
  },
  containerDark: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'rgba(182, 181, 180, 0.1)',
    borderColor: '#C0C0C0',
    borderStyle: 'dotted',
    borderWidth: 1,
    width: '100%',
  },
  head: {
    flex: 1,
    height: 40,
    backgroundColor: '#C0C0C0',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headDark: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(182, 181, 180, 0.6)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texttable: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  texttableDark: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  textdatatop: {
    flex: 1,
    fontSize: 10,
    paddingLeft: 10,
    textAlign: 'left',
    borderBottomColor: '#C0C0C0',
    width: 100,
    borderBottomWidth: 1,
  },
  textdatatopDark: {
    color: 'white',
    flex: 1,
    fontSize: 10,
    paddingLeft: 10,
    textAlign: 'left',
    borderBottomColor: '#C0C0C0',
    width: 100,
    borderBottomWidth: 1,
  },
  texttabledata: {
    paddingLeft: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottomColor: '#C0C0C0',
    width: 100,
    borderBottomWidth: 1,
  },
  texttabledataDark: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottomColor: '#C0C0C0',
    width: 100,
    borderBottomWidth: 1,
  },
});

// export default FirstSession;
const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});

export default connect(mapStateToProps, {viewComplModal})(SecondSession);
