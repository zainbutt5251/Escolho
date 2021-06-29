import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import MModal from '../Modal/updatePassModal';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';
import {firebase, Auth} from '../../../App';
import {firestore} from '@react-native-firebase/firestore';
import Entypo from 'react-native-vector-icons/Entypo';
const ProfileInfo = ({navigation, isDark}) => {
  console.log('************** StudentList');
  console.log(isDark);
  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}>
      <ScrollView style={{}}>
        <View style={isDark? styles.ScreenTopDark : styles.ScreenTop }>
          <View
            style={isDark? styles.imageContDark : styles.imageCont}>
            <Image
              source={require('../../../assets/images/financeicon.png')}
              style={{
                width: 110,
                height: 150,
                // flexWrap:'wrap',
                // marginBottom: 10,
                marginTop: 10,
                // flex:1,
                alignSelf:'center',
                alignItems:'center',
                justifyContent:'center'
               
              }}
            />
          </View>
<View style={isDark? styles.tableViewDark : styles.tableView}>




          <View
             style={isDark? styles.TableDark : styles.Table}>
            <View
               style={styles.TableHeader}>
              <Text style={{fontWeight:'bold'}}>Informações do Financeiro</Text>
              <Entypo name="minus" />
            </View>

            <View style={{paddingLeft:20, paddingRight:20}}>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Nome:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>Valentino C</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>CPF:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}></Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Gênero:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>Masculino</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Data de Nascimento:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>03/06/1968</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>E-mail:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>teste99@thunderbees.com</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>CEP:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>30810-420</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>U.F.:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>MG</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Cidade:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>Belo Horizonte</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Tipo:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>RUA</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Logradouro:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>A+</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Número:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>508</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Bairro:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>Jardim Alvorada</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Complemento:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>01 June 2018</Text></View>
                
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Telefone Residencial:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>(31)3714-5292</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Telefone Comercial:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>(31)3714-5292</Text></View>
                <View style={styles.dataRows} ><Text  style={isDark ? styles.leftTextStyleDark: styles.leftTextStyle}>Telefone Celular:</Text><Text style={isDark ? styles.RightTextStyleDark : styles.RightTextStyle}>(31) 99259-3018</Text></View>




                {/* <View style={styles.dataRows} ><Text style={styles.leftTextStyle}>Responsável Financeiro:</Text><Text></Text></View>
                <View style={styles.dataRows} ><Text style={styles.leftTextStyle}>Responsável Pedagógico:</Text><Text></Text></View> */}
            </View>

          </View>
        </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(ProfileInfo);

const styles = StyleSheet.create({

  dataRows:{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1, height:40, alignItems:'center', borderColor:'lightgrey'},
  leftTextStyleDark:{fontWeight:'bold', color:'white'},
  leftTextStyle:{fontWeight:'bold', color:'black'},
  RightTextStyle: {
    color:'black'
  },
  RightTextStyleDark:{
  color:'white'
  },
  
  
  ScreenTop: {flex: 1,  borderColor:'red', backgroundColor:'#4287f5', marginTop:-50},
  ScreenTopDark: {flex: 1,  borderColor:'red', },
  imageCont:{
            
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    alignSelf:'center',
    borderRadius:20,
    top:50,
    zIndex:10,
    elevation:15,
  },
  imageContDark:{
            
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#21223E',
    alignSelf:'center',
    borderRadius:20,
    top:50,
    zIndex:10,
    elevation:15,
    opacity:0.8
  },
  tableView:{ borderColor:'red', backgroundColor:'white', borderTopLeftRadius:50, borderTopRightRadius:50},
  tableViewDark:{ borderColor:'red', backgroundColor:'#21223E', borderTopLeftRadius:50, borderTopRightRadius:50, opacity:0.8},
  Table:{
    width: '90%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom:20,
    backgroundColor:'white',
    marginTop:65,
    elevation:15,
  },
  TableDark:{
    width: '90%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom:20,
    backgroundColor:'#21223E',
    marginTop:65,
    elevation:15,
  },
  TableHeader:{
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    height: 35,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  
  
  
  
  
  
  





  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    // paddingTop: Platform.OS === 'ios' ? 60 : 30,
    // marginTop:-31
  },
  main: {
    // marginTop: 35,
    paddingTop: 0,
    padding: 15,
    color: 'black',
    // backgroundColor: 'white',
  },
  mainHeading: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '55%',
    paddingTop: 0,
  },
  mainHeadingDark: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '55%',
    color: 'white',
  },
  imagtop: {
    marginTop: 20,
    marginLeft: 330,
    width: 10,
    height: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  borders: {
    width: 170,
    // marginBottom: 30,
    color: 'black',

    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  div: {
    marginTop: 20,
    fontSize: 10,
    color: 'black',
    backgroundColor: '#F79859',
    textAlign: 'center',
    padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  indiv: {
    color: 'black',
    fontSize: 10,
    paddingBottom: 1,
  },
  imagset: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  chaticon: {
    borderRadius: 50,
    width: 40,
    height: 40,
    textAlign: 'right',
    marginLeft: 100,
  },
  texts: {
    paddingLeft: 5,
    paddingTop: 3,
    fontSize: 17,
    color: 'white',
    // textAlign: "right",
    marginLeft: 10,
  },
  textsmall: {
    paddingLeft: 5,
    padding: 0,
    marginTop: 0,
    fontSize: 12,
    color: 'white',
    marginLeft: 10,
  },
  div1: {
    marginTop: 10,
    fontSize: 10,
    color: 'black',
    backgroundColor: '#EE4552',
    textAlign: 'center',
    textAlign: 'center',
    padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  indiv1: {
    color: 'black',
    fontSize: 10,
    paddingBottom: 2,
  },
  imagset1: {
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  topview: {
    marginTop: 10,
    marginRight: 25,
    marginLeft: 25,
    flex: 1,
    flexDirection: 'row',
  },
  leftimg: {
    width: 35,
    height: 30,
  },
  rightimg: {
    marginLeft: 265,
  },
});
