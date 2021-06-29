import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';

const FeeRecord = ({isDark}) => {
  const [tableHead, settableHead] = useState(['Em aberto']);
  const [tableData, settableData] = useState([
    ['Descrição', 'Competência', 'N° Doc', 'Vencimento'],
  ]);
  const [tablehead1, settablehead1] = useState(['Liquidado']);
  const [tabledata1, settabledata1] = useState([['Descrição', 'Competência']]);
  const [tabledata2, settabledata2] = useState([
    [
      'PARCELA DE ANUIDADE 07/2020 - 202000006 ENSINO FUNDAMETAL 1° ANO',
      '2020/07',
    ],
  ]);
  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}>
      <ScrollView>
        <View style={styles.main}>
          {/* <Text style={styles.maintext}>MENSALIDADES</Text> */}
          <View style={styles.div}>
            <Text style={styles.texthead}>
              Ultima atualização em 02/07/2020 as 20:15
            </Text>
          </View>
          <View>
            <ScrollView horizontal={true}>
              <View style={isDark ? styles.containerDark : styles.container}>
                {/* borderStyle={{ borderWidth: 2, borderColor: "black" }} */}
                <Table>
                  <Row
                    data={tableHead}
                    style={isDark ? styles.headDark : styles.head}
                    textStyle={isDark ? styles.texttableDark : styles.texttable}
                  />
                  <Rows
                    data={tableData}
                    textStyle={
                      isDark ? styles.texttabledataDark : styles.texttabledata
                    }
                  />
                </Table>
              </View>
            </ScrollView>
          </View>

          <View>
            <ScrollView horizontal={true}>
              <View style={isDark ? styles.containerDark : styles.container}>
                <Table horizontal={true}>
                  <Row
                    data={tablehead1}
                    style={isDark ? styles.headDark : styles.head}
                    textStyle={isDark ? styles.texttableDark : styles.texttable}
                  />
                  <Rows
                    data={tabledata1}
                    textStyle={isDark ? styles.textdataSDark : styles.textdataS}
                  />
                  <Rows
                    data={tabledata2}
                    style={{width: '100%'}}
                    textStyle={
                      isDark ? styles.textdataSMALLDark : styles.textdataSMALL
                    }
                  />
                </Table>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  main: {
    marginTop: 0,
    // paddingTop: 0,
    padding: 15,
    color: 'black',
  },
  maintext: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  div: {
    flex: 1,
    marginTop: 15,
    color: 'black',
    backgroundColor: '#FDA96B',
    textAlign: 'center',
    padding: 5,

    borderRadius: 5,

    borderColor: 'white',
  },
  texthead: {
    color: 'white',
    fontSize: 15,
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
    width: '100%',
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
    paddingLeft: 5,
    height: 30,
    backgroundColor: '#C0C0C0',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headDark: {
    paddingLeft: 5,
    height: 30,
    backgroundColor: 'rgba(182, 181, 180, 0.6)',
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
    width: '100%',
  },
  texttableDark: {
    flex: 1,
    margin: 6,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    // borderColor: '#C0C0C0',
    // borderWidth: 1,
    width: '100%',
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
    width: 100,
    borderBottomWidth: 1,
  },
  texttabledataDark: {
    padding: 10,
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottomColor: '#C0C0C0',
    width: 100,
    borderBottomWidth: 1,
  },
  textdataS: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  },
  textdataSDark: {
    paddingLeft: 20,
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  },
  textdataSMALL: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
    fontSize: 10,
    width: 230,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  },
  textdataSMALLDark: {
    flex: 1,
    paddingLeft: 10,
    color: 'white',
    fontSize: 10,
    width: 230,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  },
});
const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(FeeRecord);
